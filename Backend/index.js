const express = require("express");
const multer = require("multer");
const axios = require("axios");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const cors = require("cors");
require("dotenv").config();

function calculateStatus(score) {
    if (score > 0.8) {
        return "Fully Compliant";
    } else if (score > 0.5) {
        return "Partially Compliant";
    } else {
        return "Not Compliant";
    }
}

// const auth = "firebase.js";
// Initialize Firebase Admin SDK
const serviceAccount = require("./complysimplify-firebase-adminsdk-dnto0-64d6ad4d97.json"); // Update with your key path
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "complysimplify.appspot.com",
});

const app = express();
const upload = multer(); // for parsing multipart/form-data

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Signup route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log("email: ", email);
        console.log("password: ", password);
        console.log("name: ", name);

        const user = await admin.auth().createUser({
            email: email,
            password: password,
            displayName: name,
        });

        // Store user information in Firestore
        await admin.firestore().collection("users").doc(user.uid).set({
            email,
            name,
            // Add more user data as needed
        });

        res.status(200).json({
            message: "User created successfully",
            uid: user.uid,
        });
        console.log("'User created successfully'");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

// Sign in route
app.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("email: ", email);
        console.log("password: ", password);

        // Sign in the user with Firebase Authentication
        // const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
        admin
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User is authenticated
                const user = userCredential.user;
                console.log(`User ${user.email} is authenticated`);
            })
            .catch((error) => {
                // Authentication failed
                console.error("Authentication failed:", error);
            });

        console.log("'User signedin successfully'");
        console.log("userCredential => ", userCredential);

        res.status(200).json({
            message: "User signed in successfully",
            uid: userCredential.user.uid,
        });
    } catch (error) {
        console.error(error);
        // res.status(401).json({ error: 'Invalid credentials' });
        res.status(401).json({ error: error });
    }
});

// List users route
app.get("/listUsers", async (req, res) => {
    try {
        const listUsersResult = await admin.auth().listUsers();
        const users = listUsersResult.users.map((user) => ({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            role: user.role,
        }));
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurredw" });
    }
});

// Upload Policy route
app.post("/UploadPolicy", upload.single("policy"), async (req, res) => {
    try {
        const { policyType, policyCategory } = req.body;
        // console.log(req.body);
        // console.log(policyType, policyCategory);
        const file = req.file;

        // Upload file to Firebase Cloud Storage
        const bucket = admin.storage().bucket();
        const fileUpload = bucket.file(file.originalname);

        await fileUpload.save(file.buffer, {
            metadata: { contentType: file.mimetype },
        });

        // Get public URL of the file
        const fileURL = await fileUpload.publicUrl();
        const filePath = fileURL.split("/").pop();

        // Send data to Flask service and wait for result
        const flaskServiceUrl = "http://127.0.0.1:5000/calculate_similarity"; // Replace with your Flask service URL
        const response2 = await axios.post(flaskServiceUrl, {
            policyType,
            policyCategory,
            filePath,
        });

        // setTimeout(() => {
        //     // Place your code that needs to run after the wait here
        //   }, 5000);

        console.log(response2);

        const currentDate = new Date();
        const date = admin.firestore.Timestamp.fromDate(currentDate);

        // Store data in Firestore
        const db = admin.firestore();
        const policy = db.collection("policies").doc();
        await policy.set({
            policyType,
            policyCategory,
            fileURL,
            date,
        });

        const complyPercent = response2.data.similarity_score;

        const status = calculateStatus(complyPercent);
        const docRef2 = db.collection("compliance").doc();
        await docRef2.set({
            complyPercent,
            policy,
            status,
        });

        res.status(200).json({
            message: "File uploaded successfully",
            status: status,
            fileURL,
        });
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ message: "Error uploading file" });
    }
});

// List users route
app.get("/listUsers2", async (req, res) => {
    try {
        const currentUserId = req.query.userId;
        let db = admin.firestore();
        const usersSnapshot = await db.collection("users").get();
        const users = [];
        usersSnapshot.forEach((doc) => {
            const userData = doc.data();
            if (currentUserId === doc.id) {
                users.push({ id: doc.id, name: userData.name, role: userData.Role, status: "active" });
            } else {
                users.push({ id: doc.id, name: userData.name, role: userData.Role, status: "not-active" });
            }
        });

        // console.log(users);

        // return users;
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurredw" });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
