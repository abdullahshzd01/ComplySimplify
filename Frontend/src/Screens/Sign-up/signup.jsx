import { useNavigate } from 'react-router-dom';
import "./sign-up-style.css";
import Logo from "../../assets/Logo.png";
import SignupForm from "../../Components/SignUpForm/Sign-up-form";





function Signup() {
  const NavigateToSignIN = useNavigate();
  const navigateToAnotherPage = () => {
    // Use history.push to navigate to another page
    NavigateToSignIN('/signin');
  };


  const NavigateToDashborad = useNavigate();
  const navigateToAnother= () => {
    // Use history.push to navigate to another page
    NavigateToDashborad('/dashboard');
  };


  return (
    <div className="signup-container">
      <div className="signup-left-pane">
        <div>
          <img className="signup-logo-img" src={Logo} alt="Logo" />
        </div>

        <div className="text">
          <h1 className="h1">Welcome Back!</h1>
          <h4 className="h4">
            To keep connected with us please login with your personal info
          </h4>
        </div>

        <div>
          <button className="signup-my-button" onClick={navigateToAnotherPage}>SIGN IN</button>
        </div>
        <button onClick={navigateToAnother}>.</button>

      </div>

      <div className="signup-right-pane">
        <div className="text">
          <h1 className="h1">Create Account</h1>
        </div>

        <div className="signUpOptions">
          <div className="option">
            <h2 className="h2">f</h2>
          </div>

          <div className="option">
            <h2 className="h2">G+</h2>
          </div>

          <div className="option">
            <h2 className="h2">in</h2>
          </div>
        </div>
        <div className="form">
        <SignupForm />

        </div>
        
      </div>
    </div>
  );
}

export default Signup;
