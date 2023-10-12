import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import SignInForm from "../../Components/SignInForm/Sign-in-form";
import "./sign-in-style.css";
// import { Link } from 'react-router-dom';

function Signin() {

    const NavigateToSignUP = useNavigate();
    const NavigateToLandingPage = useNavigate();

    const navigateToAnotherPage = () => {
        NavigateToSignUP('/signup');
    };

    const navigateToLandingPage = () => {
        // Use history.push to navigate to another page
        NavigateToLandingPage('/');
    };

    return (
        <div className="signin-container">
            <div className="signin-left-pane">
                <div>
                    <img className="signin-logo-img" src={Logo} alt="Logo" onClick={navigateToLandingPage} />
                </div>

                <div className="text">
                    <h1 className="h1">Sign In</h1>
                </div>

                <div className="signInOptions">
                    <div className="option facebook">
                        <h2 className="h2">f</h2>
                    </div>

                    <div className="option google">
                        <h2 className="h2">G</h2>
                    </div>

                    <div className="option linkedin">
                        <h2 className="h2">in</h2>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '1px', width: '90%', backgroundColor: '#ccc' }} />

                    <div style={{ width: '70px', textAlign: 'center', color: '#AFAFAF' }}>
                        <p>OR</p>
                    </div>

                    <div style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }} />
                </div>

                <SignInForm />
            </div>

            <div className="signin-right-pane">
                <div className="text">
                    <h1 className="h1">Hello, Friends</h1>
                    <h4 className="h4">
                        Enter your personal details and start journey with us.
                    </h4>
                </div>
                <div>
                    <button className="signin-my-button" onClick={navigateToAnotherPage}>SIGN UP</button><br/>
                    {/* <Link to={'/signup'} className="signin-my-button">SIGN UP</Link> */}
                </div>
            </div>
        </div>
    );
}

export default Signin;
