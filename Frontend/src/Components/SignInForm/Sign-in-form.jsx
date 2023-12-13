import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons from react-icons/fa
import "./Sign-in-form.css"; // Import the CSS file
// import axios from "axios";
// import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
  
    console.log("SignInForm => auth: ", auth);
    console.log("SignInForm => auth.lastNotifiedUid: ", auth.lastNotifiedUid);

    const dashNavigate = useNavigate();
    const navigateToDashboard = () => {
        dashNavigate('/dashboard');
    };

    useEffect(() => {
        // Check conditions
        if (auth.lastNotifiedUid) {
            // Execute code if the condition is true
            console.log('User already logged in');
            navigateToDashboard();
            alert("User already logged in");
            return;
        }

        return () => {
            // Cleanup code
        };
    }, [auth.lastNotifiedUid, navigateToDashboard]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form values using the state variables (name, email, password, confirmPassword)
        // Perform validation, API calls, sor any other necessary operations

        console.log(email, password);
        if (password.length < 6) {
            alert("The password must be at least 6 characters.");
            return;
        }

        // signin user
        // try {
        //     const response = await axios.post("http://localhost:4069/signin", { email, password });
        //     console.log(response.data); // Handle success or display a success message
        //     alert("User SignIn - Success!");
        //     navigateToDashboard();
        // } catch (error) {
        //     console.error(error);
        //     alert("User SignIn - Failed!");
        //     // Handle error, show an error message, etc.
        // }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                alert("User SignIn - Success!\n");
                console.log("user: ", user);
                console.log("auth: ", auth);
                console.log("auth.lastNotifiedUid: ", auth.lastNotifiedUid);
                navigateToDashboard();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("User SignIn - Failed!\n");

                console.log("Error code: ", errorCode);
                console.log("Error message: ", errorMessage);
            });
    };

    return (
        <div>
            <h3 className="signin-form-heading-text">Sign In with Email</h3>
            <form onSubmit={handleSubmit} className="signin-form">
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                    />
                    <div className="icon">
                        <FaEnvelope />
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                    />
                    <div className="icon">
                        <FaLock />
                    </div>
                </div>

                <div className="form-group">
                    {/* <h4>Forgot Password?</h4> */}
                    <a href="/signin" className='forgot-password'>Forgot Password?</a>
                    <br />
                </div>

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
