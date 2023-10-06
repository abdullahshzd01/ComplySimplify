// import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons from react-icons/fa
import "./Sign-in-form.css"; // Import the CSS file
import axios from "axios";


function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const Navigates = useNavigate();
  const navigateToAnother = () => {
    // Navigates('/dashboard');
  };

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
    try {
      const response = await axios.post("http://localhost:4000/signin", { email, password });
      console.log(response.data); // Handle success or display a success message
    } catch (error) {
      console.error(error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
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

        <button type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
