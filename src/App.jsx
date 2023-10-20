import "./App.css";
import Navbar from "./component/navbar";
// import Lifestyle from "./pages/Lifestyle";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/Signup";
import FooterSection from "./component/Footer";
import Dashbord from "./pages/Dashbord";
import Comment from "./pages/Comment";
import Blogs from "./pages/Blogs";
// import Modol from "./pages/Modol";

function App() {
  return (
    <>
     <Router>
        <Navbar />        
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Blogs" element={<Blogs />} />
          {/* <Route path="/Modol" element={<Modol />} /> */}

        </Routes>
        <FooterSection />
      </Router>
    </>
  );
}

export default App;
