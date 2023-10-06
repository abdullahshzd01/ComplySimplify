import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Import icons from react-icons/fa
import "./Sign-up-form.css"; // Import the CSS file
import axios from "axios";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  const handleSubmit = async  (e) => {
    // Handle form submission logic here
    // You can access the form values using the state variables (name, email, password, confirmPassword)
    // Perform validation, API calls, sor any other necessary operations
    e.preventDefault();
    console.log(name, email, password);

    if (password.length < 6) {
      alert("The password must be at least 6 characters.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/signup', { name, email, password });
      console.log(response.data);
      
      if(response.data.message === "User created successfully"){
        alert("User created successfully");
        window.location.href = "/signin";
      }
       else{
        alert("Some Error");
       }
    } catch (error) {
      console.error(error);
      // Handle error, show an error message, etc.
    }
    
    // axios.post("http://localhost:4000/signup", userObject)
    //     .then((res) => console.log(res.data));
    
    
    
    // alert("Successfully Registered, Please login now.");
    // window.location.href = "/login";
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your Name"
          />
          <div className="icon">
            <FaUser />
          </div>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your Email"
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
            placeholder="Enter your Password"
          />
          <div className="icon">
            <FaLock />
          </div>
        </div>
        <b>{ErrorMsg}</b>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
