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
import Coment from "./pages/SinglePost";
import Blogs from "./pages/Blogs";
import SinglePost from "./pages/SinglePost";
import Update from "./pages/Update";
import Dashbordog from "./pages/Dashbordog";
import Allcharts from "./component/Allcharts";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/Dashbordog" element={<Dashbordog />} />
          <Route path="/Blog/:_id" element={<SinglePost />} />
          <Route path="/Blogs" element={<Blogs />} />
          {/* <Route path="/Modol" element={<Modol />} /> */}
          <Route path="/update" element={<Update />} />
          <Route path="/Allcharts" element={<Allcharts />} />
        </Routes>
        <FooterSection />
      </Router>
    </>
  );
}

export default App;
