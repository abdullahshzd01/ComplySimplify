const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require("cors");

const auth = "firebase.js";
// Initialize Firebase Admin SDK
const serviceAccount = require('./fyp-auth-firebase-private-key.json'); // Update with your key path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());



// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await admin.auth().createUser({
      email: email,
      password: password,
      displayName:name
    });
    res.status(200).json({ message: 'User created successfully', uid: user.uid });
    // console.log("'User created successfully'");
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: 'An error occurred' });

  }
});


// Sign in route
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Sign in the user with Firebase Authentication
    const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);

    res.status(200).json({ message: 'User signed in successfully', uid: userCredential.user.uid });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Invalid credentials' });
  }
});


// List users route
app.get('/listUsers', async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map((user) => ({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
    }));
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurredw' });
  }
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
