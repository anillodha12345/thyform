import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import SettingsIcon from '@material-ui/icons/Settings';
import "./Signin.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { TiArrowRightThick } from "react-icons/ti";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Box, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    borderRadius: 100
  }
});
const Signin = () => {
  const [passwordShowns, setpasswordShown] = useState("false");
  const handle = () => {
    setpasswordShown(!passwordShowns);
  };
const [darkmode,setDarkmode] = useState({
  color:'black',
  backgroundColor:'white'
})

const btntoggle = ()=>{
  if(darkmode.color == 'black'){
    setDarkmode({ color:'white',
    backgroundColor:'#566573'})
  }else{
    setDarkmode({   color:'black',
    backgroundColor:'white'})
  }
}
 


const [image, setImage] = useState({ preview: "", raw: "" });

const handleChange = e => {
  if (e.target.files.length) {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    });
  }
};

const handleUpload = async e => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("image", image.raw);

  await fetch("YOUR_URL", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: formData
  });
};


  return (
    <div className="signin-page">
     
      
      
      
      {/* <Demo onToggleDark={toggleDarkTheme} /> */}
  
    <div className="d-flex align-items-center auth signin-div px-0">
      <div className="row w-100 mx-0">
        {/* <div className="col-lg-6 mx-auto"></div> */}
        <div className="col-lg-5 sigin-container mt-5">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5" style={darkmode}>
            <div className="thyform-heading">
              <div className="coloradmins">
              {image.preview ? (
          <img src={image.preview} alt="dummy" className="upload-img" />
        ) : (
          <>
            <span className="linear"></span>
                <b className="bold-letter">ThyForm</b>{" "}
                <span className="admin-letter">Admin</span>
          </>
        )}
               
              </div>
              <div className="icon change-logo-btn">
              <label htmlFor="upload-button">
              <TiArrowRightThick />
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      {/* <button onClick={handleUpload}>Upload</button> */}
              
              </div>
            </div>
            {/* <h6 className="font-weight-light">Bootstrap 5 Responsive ThyForm templete</h6> */}
            {/* <div className='darkicon' onClick={darkmode}>dark</div> */}
            <form className="pt-3">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg signin-input"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  defaultValue={null}
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <div className="showlog" onClick={handle}>
                  {passwordShowns ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
                <div>
                  <input
                    type={passwordShowns ? "password" : "text"}
                    className="form-control form-control-lg signin-input"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="Number"
                  className="form-control form-control-lg signin-input"
                  id="exampleInputUsername1"
                  placeholder="Pin code"
                />
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <label className="form-check-label text-muted check-box-label">
                    <input type="checkbox" className="form-check-input" />
                    <i className="input-helper pr-1"></i>
                    Remember me
                  </label>
                </div>
              </div>
              <Link to="/forget">Forget Password ?</Link>
              <div className="mt-3">
                <div className="loginbutton">
                  <Link
                    className="btn btn-block  btn-lg font-weight-medium auth-form-btn loginbutton-btn"
                    to="/dashboard"
                  >
                    Sign me in
                  </Link>
                </div>
              </div>
              <div className="text-center mt-4 font-weight-light">
                {/* Not a member yet ? click <Link to="/Signup">here</Link> to SignUp */}
                Not a member yet ? click <Link to="/signup">here</Link> to
                SignUp
              </div>
              <hr />
              <div className="reserved">ThyForm All Right Reserved 2021</div>
            </form>
            <SettingsIcon onClick={btntoggle} style={{float:'right'}} className='change-logo-btn'/>
          </div>
      
        </div>
    
      </div>
    </div>

     </div>
  );
};

export default Signin;
