import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import AboutUs from "./components/AboutUs";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/homepage/*" element={<HomePage />} />
        <Route path="/UserProfile" element={<UserProfile/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
