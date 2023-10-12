import { useNavigate } from 'react-router-dom';
import "./sign-up-style.css";
import Logo from "../../assets/Logo.png";
import SignupForm from "../../Components/SignUpForm/Sign-up-form";
// import { FaFacebook, FaEnvelope, FaLock } from "react-icons/fa"; // Import icons from react-icons/fa

function Signup() {
    const NavigateToSignIN = useNavigate();
    // const NavigateToDashborad = useNavigate();
    const NavigateToLandingPage = useNavigate();
    
    const navigateToAnotherPage = () => {
        // Use history.push to navigate to another page
        NavigateToSignIN('/signin');
    };


    // const navigateToAnother = () => {
    //     // Use history.push to navigate to another page
    //     NavigateToDashborad('/dashboard');
    // };

    const navigateToLandingPage = () => {
        // Use history.push to navigate to another page
        NavigateToLandingPage('/');
    };


    return (
        <div className="signup-container">
            <div className="signup-left-pane">
                <div>
                    <img className="signup-logo-img" src={Logo} alt="Logo" onClick={navigateToLandingPage} />
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

                {/* <button onClick={navigateToAnother}>Oh Yeah</button> */}
            </div>

            <div className="signup-right-pane">
                <div className="text">
                    <h1 className="h1">Create Account</h1>
                </div>

                <div className="signUpOptions">
                    <div className="option facebook">
                        <h2 className="h2">f</h2>
                    </div>
                    {/* <div className="option">
                        <FaFacebook />
                    </div> */}

                    <div className="option google">
                        <h2 className="h2">G</h2>
                    </div>

                    <div className="option linkedin">
                        <h2 className="h2">in</h2>
                    </div>
                </div>

                {/* <div className='divider'>
                    <hr className='dividerLeft' />

                    <div className='dividerText'>
                        <p>OR</p>
                    </div>

                    <hr className='dividerRight' />
                </div> */}

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '1px', width: '90%', backgroundColor: '#ccc' }} />

                    <div style={{ width: '70px', textAlign: 'center', color: '#AFAFAF' }}>
                        <p>OR</p>
                    </div>

                    <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }} />
                </div>

                <div className="form">
                    <SignupForm />
                </div>

            </div>
        </div>
    );
}

export default Signup;
