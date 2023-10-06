import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import SignInForm from "../../Components/SignInForm/Sign-in-form";
import "./sign-in-style.css";

function Signin() {

  const NavigateToSignUP = useNavigate();
  
  const navigateToAnotherPage = () => {
    NavigateToSignUP('/signup');
  };


  return (
    <div className="signin-container">
      <div className="signin-left-pane">
        <div>
          <img className="signin-logo-img" src={Logo} alt="Logo" />
        </div>

        <div className="text">
          <h1 className="h1">Sign In</h1>
        </div>

        <div className="signInOptions">
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
        <SignInForm/>

      <h4>Forgot Password?</h4>
      </div>

      <div className="signin-right-pane">
        <div className="text">
          <h1 className="h1">Hello, Friends</h1>
        <h4 className="h4">
          Enter your personal details and strat journy with us.
        </h4>

        </div>
        <div>
          <button className="signin-my-button" onClick={navigateToAnotherPage}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
