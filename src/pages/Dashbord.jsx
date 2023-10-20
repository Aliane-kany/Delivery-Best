import React from "react";
import { Link } from "react-router-dom";

const  Dashbord =()=> {
  return (
    <div className="maindashbord">
      <div className="main-dashbord">
        <h1>//ADD BLOG//</h1>

        <div className="input-dashbord">
          <input type="text" name="name" placeholder="Title" />
          
        </div>
        <div className="add-description">
          <textarea placeholder="Description" name="message"></textarea>
        </div>
        <div className="upload-image">
        <input className="choose" type="file" name="image"></input>
        <Link to="/Blogs"><button type="send">ADD BLOG</button></Link>
            
          </div>
        </div>
      </div>
   

    // <div className="form-cntainer">
    //   <div class="wrapper">
    //     <form action="#"></form>
    //     <input className="choose" type="file" name="image"></input>
    //     <h2>Post a Blog</h2>
    //     <div class="input-field">
    //       <input type="text" required />
    //       <label>Title</label>
    //     </div>
    //     <div class="input-field">
    //       <input type="password" required />
    //       <label>Description</label>
    //     </div>

    //     <button type="submit">Send</button>
    //   </div>
    // </div>
  );
}

export default Dashbord;
