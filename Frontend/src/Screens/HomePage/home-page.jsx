import { useNavigate } from "react-router-dom";
import "./home-page-style.css";
import Logo from "../../assets/Logo.png";
import Typed from "react-typed";
import "./navbar.css";
import Spline from '@splinetool/react-spline';

function Homepage() {
  // const NavigateToSignIN = useNavigate();
  // const navigateToAnotherPage = () => {
  //   // Use history.push to navigate to another page
  //   NavigateToSignIN("/signin");
  // };

  // const NavigateToSignUP = useNavigate();
  // const navigateToSignUP = () => {
  //   // Use history.push to navigate to another page
  //   NavigateToSignUP("/signup");
  // };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <a href="/signup">Signup</a>
            <a href="/signin">Sign In</a>
          </div>
        </div>
      </nav>
      <div className="homePage-container">
        <div>
          <img className="homePage-logo-img" src={Logo} alt="Logo" />
        </div>

        <div className="background">
          <div className="left-pane">
            <div className="animated-typing">
              <Typed
                strings={[
                  "committed to your compliance journey.",
                  "offering expert guidance for compliance success.",
                  "prioritizing your compliance needs.",
                  "simplifying compliance comparisons effortlessly.",
                ]}
                typeSpeed={50}
                backSpeed={20}
                loop
              />
            </div>
          </div>

          <div className="right-pane">
            <Spline scene="https://prod.spline.design/HqInsLxb38UUSXpY/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
