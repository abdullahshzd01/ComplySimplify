import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Screens/Sign-up/signup";
import Signin from "./Screens/Sign-in/signin";
import HomePage from "./Screens/HomePage/home-page";
import Dashboard from "./Screens/Internal-Working/Dashboard/dashboard";
import Standards from "./Screens/Internal-Working/Standards/standards";
import EvidenceTasks from "./Screens/Internal-Working/EvidenceTasks/EvidenceTasks";
import People from "./Screens/Internal-Working/People/people";
import Policy from "./Screens/Internal-Working/Policy/policy";
import Settings from "./Screens/Internal-Working/Settings/settings";
import Standard from "./Screens/Internal-Working/Standard/standard";
import MyApp from "./Testing/popup";

function App() {
    return (
        <div className="App">
            {/* <NavBar /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/signin" exact element={<Signin />} />

                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/Standards" exact element={<Standards />} />
                    <Route path="/Standard" exact element={<Standard />} />
                    <Route path="/EvidenceTasks" exact element={<EvidenceTasks />} />
                    <Route path="/People" exact element={<People />} />
                    <Route path="/Policy" exact element={<Policy />} />
                    <Route path="/Settings" exact element={<Settings />} />
                    <Route path="/Testing/PopUp" exact element={<MyApp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
