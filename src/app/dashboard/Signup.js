import React, { useState } from "react";
import "./Signup.css";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
// import { HiOutlineSearchCircle } from "react-icons/hi";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
const Signup = () => {
  const [passwordShown, setpasswordShown] = useState("false");
  const [radio, setRadio] = useState(false);
  const handleradio = () => {
    setRadio(true);
  };

  const handleradio1 = () => {
    setRadio(false);
  };
  const handles = () => {
    setpasswordShown(!passwordShown);
  };
  const handleForm = () => {
    setShowForm(false);
  };
  const hideForm = () => {
    setShowForm(true);
  };
  const [hide, setHide] = useState(true);
  const [secondhide, setsecondhide] = useState(false);
  const [thirdhide, setthirdhide] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // const firstbtn = () => {
  //   setHide(false);
  //   setsecondhide(true);
  //   setthirdhide(false);
  // };
  // const secondbtn = () => {
  //   setHide(false);
  //   setsecondhide(false);
  //   setthirdhide(true);
  // };
  // const threebtn = () => {
  //   setHide(true);
  //   setsecondhide(false);
  //   setthirdhide(false);
  // };
  return (
    <div className="row justify-content-center w-100">
      {/* <Col sm={4}></Col> */}
      <div className="col-md-8 bg-white">
        <div className="row w-100 mx-0 signup-pagediv">
          <div className="col-12">
            {" "}
            <h2 className="pb-2 mt-5 text-center">SignUp</h2>
          </div>
          <div className="col-md-12">
            <h2 className="yourbusiness">Your Business</h2>
          </div>
          <div className="col-12">
            {" "}
            <h5 className="pleaseselect">Please select your business type:</h5>
          </div>
          {/* <div className="row">
            <div className="col-md-12"> */}{" "}
          <div className="row first-radiobutton">
            <div class="form-check col-sm-4 col-md-4 col-lg-3 xyz">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={() => {
                  setHide(true);
                  setsecondhide(false);
                  setthirdhide(false);
                }}
              />
              <label
                className="form-check-label label1"
                for="flexRadioDefault1"
              >
                Limited Company
              </label>
            </div>
            {/* <div className="radiosecond"> */}
            <div class="form-check col-sm-8 col-md-4 col-lg-3 solo-traderdiv">
              <input
                className="form-check-input"
                // class=""
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={() => {
                  setHide(false);
                  setsecondhide(true);
                  setthirdhide(false);
                }}
              />
              {/* <label class="form-check-label label2" for="flexRadioDefault2"> */}
              <label
                className="form-check-label label1"
                for="flexRadioDefault1"
              >
                {/* <h6 className="label1"> */}
                  Solo Trader
                  {/* </h6> */}
              </label>
              {/* </div> */}
            </div>
            {/* <div className="radiosecond"> */}
            <div className="form-check col-md-4 col-lg-3 xyz2 otherpartnership">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={() => {
                  setHide(false);
                  setsecondhide(false);
                  setthirdhide(true);
                }}
                // checked
              />
              <label
                // class="form-check-label"
                for="flexRadioDefault2"
                // className="otherpartnership  label3"
                className="form-check-label label1"
              >
                {/* <h6 className="label1"> */}
                  Other(e.g.Partnership)
                  {/* </h6> */}
              </label>
              {/* </div> */}
            </div>
            {/* </div>
                </div> */}
         <div class="col-12 col-lg-3"></div>
          </div>
          {/* <div className="xyz1"> */}
          {/* <div className="auth-form-light text-left px-sm-5 "> */}
          {/* <div className="row justify-content-between">
             
              </div> */}
          {hide && (
            <>
              <div>
                {" "}
                <div className="row w-100">
                  <div className="col-12">
                    <h5 className="serachbys">Search by</h5>
                  </div>
                </div>
                <div className="radiobutton row bustype-row">
                  <div class="form-check col-xs-12 col-sm-4 col-lg-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault1"
                      onChange={(e) => {
                        handleradio();
                      }}
                    />
                    <label
                      for="flexRadioDefault1"
                      className="label1 form-check-label"
                    >
                      Business name
                    </label>
                  </div>
                  <div className="form-check col-xs-12 col-sm-8 col-lg-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault1"
                      onChange={(e) => {
                        handleradio1();
                      }}
                    />
                    <label
                      // class="form-check-label"
                      for="flexRadioDefault1"
                      // className="label1"
                      className="form-check-label label1"
                    >
                      Company Register Number
                    </label>
                  </div>
                  <div className="col-lg-5"></div>
                </div>
                <div className="row w-100 mx-0 d-flex middle-row">
                  <div className="col-12 col-sm-7 col-md-6 col-lg-6 col-xl-4 ">
                    <div className="companydetails">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg companyinput"
                          placeholder="Enter your Business name"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12 col-sm-1 col-xl-1 searchbtn">
                    <button type="button" className="searchbutton1">
                      Search
                    </button>
                  </div> */}
                  <div className="col-12 col-sm-4 col-md-5 col-lg-5 col-xl-3 searchbtn mb-2">
                    <button type="button" className="btnsearch">
                      <span> SEARCH </span>
                      <span>
                        <SearchTwoToneIcon className="search-icon" />
                        {/* < HiOutlineSearchCircle /> */}
                      </span>
                    </button>
                  </div>
                  <div className="col-12 col-xl-4  middle-row-lastdiv">
                    {radio ? (
                      <div className="comRegn">
                        Enter at least the first three Characters of your
                        Company name of your full Company registration number
                        and press search to locate your company details
                      </div>
                    ) : (
                      <div className="comRegn">
                        Enter your full 8 digit company registration number. If
                        your registration number is only seven digits, add a
                        zero to the beginning. Companies registered in Scotland
                        and Northern Ireland must add SC or NI to the beginning.
                      </div>
                    )}
                  </div>
                  <div></div>
                </div>
                <div className="row w-100 mx-0 d-flex mt-3 selectbusiness-div">
                  <div className="col-md-3 col-lg-3 serachby">
                    Select business*
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <select
                        className="form-select select-box"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-lg-4"></div> */}
                </div>
                <div className="row w-100 mx-0 d-flex">
                  <div className="col-md-3 col-lg-3 serachby ">
                    Select director*
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <select
                        className="form-select select-box"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="col-md-4 col-lg-4"></div> */}
                </div>
                <div className="row w-100 mx-0 d-flex ">
                  <div className="col-md-3 col-lg-3 serachby ">
                    {" "}
                    Company registration number
                  </div>
                  <div className="col-md-9 col-lg-9">
                    <div className="none-text">None selected </div>
                  </div>
                </div>
                <div className="row w-100 mx-0 d-flex">
                  <div className="col-md-3 col-lg-3 serachby ">
                    Registration business number
                  </div>
                  <div className="col-md-9 col-lg-9 ">
                    <div className="none-text">None selected </div>
                  </div>
                </div>
                {/* <div className=" firstemail serachby"> */}
                <div className="row form-group pt-3 email-row">
                  <div className="col-md-3 col-lg-3 email-div">
                    <label>
                      <h6 className="label2 ">Email:</h6>
                    </label>
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-5">
                    <input
                      type="email"
                      className="form-control form-control-lg passwordinput"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/* </div> */}
                {/* <div className="firstemail"> */}
                <div className="row form-group email-row">
                  <div className="col-md-3 col-lg-3 email-div">
                    <label>
                      <h6 className="label2">Password:</h6>
                    </label>
                  </div>
                  <div className="signupicon  " onClick={handles}>
                    {passwordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-5">
                    <input
                      type={passwordShown ? "password" : "text"}
                      className="form-control form-control-lg passwordinput"
                      id="exampleInputUsername1"
                      placeholder="your password"
                    />
                  </div>
                </div>
                <br />
                <div>
                  <hr className="horizontal-line" />
                </div>
                <br />
                <div className=" mb-3 next-btn-div">
                  <Link to="/signin">
                    <button
                      // onClick={firstbtn}
                      type="button"
                      class="btn btn-success next-btn"
                    >
                      Next
                      <ArrowForwardIosIcon fontSize="inherit" />
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
          {/* second tab ---2 */}
          {secondhide && (
         
            <>
              <div className="solo-trader-page">
                <div className="row w-100 d-flex mt-3 solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                    Business Name*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter your Business name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">Industry*</div>
                  {/* <div className="col-md-5 col-lg-5 "> */}
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      {/* <select className="selecttype2">
                        <option value="opel"></option>
                        <option value="volvo">Mining</option>
                        <option value="saab">manufacutring</option>
                        <option value="opel">
                          information and communication
                        </option>
                        <option value="audi">constructor</option>
                      </select> */}
                      <select
                        className="form-select selecttype2"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                    Number of employees*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="Number"
                        className="form-control form-control-lg numberinput"
                        placeholder="Enter "
                      />
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex">
                  <div className="col-md-4 col-lg-3 serachby">
                    {" "}
                    Are you a Contractore or freelancer ?*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <select
                        className="form-select selecttype2"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex">
                  <div className="col-md-4 col-lg-3 serachby">
                    {" "}
                    What's your expected monthly spend for this account*
                  </div>

                  {/* <div className="col-md-5  col-md-5 euro-icon-solo-div"> */}
                  <div className="col-md-8 col-lg-9 col-xl-5 ">
                    <div className="form-group euro-icon">
                      <div className="solo-euro-div">
                        <div className="solo-inputicon">£</div>
                        {/* <span class="glyphicon glyphicon-gbp"></span> */}
                        <input
                          type="Number"
                          className="form-control form-control-lg emailsinput3"
                          placeholder="Enter "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 solo-euro-lastdiv">
                    Please enter number only
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                    {" "}
                    Does your organisation have a website ?*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <select
                        className="form-select selecttype2"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex">
                  <div className="col-md-4 col-lg-3 serachby">
                    {" "}
                    Business name as it should appear on card*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter "
                      />
                      <div className="solo-page-bottom-line">
                        Please enter the company name exactly as you like to
                        appear on your card
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row form-group email-row">
                  <div className="col-md-4 col-lg-3 email-solo-div">
                    <label>
                      <h6 className="label2 ">Email:</h6>
                    </label>
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <input
                      type="email"
                      className="form-control form-control-lg solo-passwordinput"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/* </div> */}
                {/* <div className="row form-group email-row">
                  <div className="col-md-3 col-lg-3 email-div">
                    <label>
                      <h6 className="label2">Password:</h6>
                    </label>
                  </div>
                  <div className="signupicon  " onClick={handles}>
                    {passwordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                  <div className="col-md-9 col-lg-9 col-xl-5">
                    <input
                      type={passwordShown ? "password" : "text"}
                      className="form-control form-control-lg passwordinput"
                      id="exampleInputUsername1"
                      placeholder="your password"
                    />
                  </div>
                </div> */}
                {/* <div className="firstemail"> */}
                <div className="row form-group email-row">
                  <div className="col-md-4 col-lg-3 email-solo-div">
                    <label>
                      <h6 className="label2">Password:</h6>
                    </label>
                  </div>
                  <div className="signupicon  " onClick={handles}>
                    {passwordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <input
                      type={passwordShown ? "password" : "text"}
                      className="form-control form-control-lg solo-passwordinput"
                      id="exampleInputUsername1"
                      placeholder="your password"
                    />
                  </div>
                  {/* </div> */}
                </div>
                <br />
                <div>
                  <hr className="horizontal-line" />
                </div>
                <br />
                <div className="mb-5 next-btn-div">
                  <Link to="/signin">
                    {" "}
                    <button
                      // onClick={secondbtn}
                      type="button"
                      class="btn btn-success next-btn"
                    >
                      Next
                      <ArrowForwardIosIcon fontSize="inherit" />
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
          {thirdhide && (
            <>
              {/* Three----3 */}
              <div className="other-page">
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby ">
                    {" "}
                    Business type*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      {/* <select className="selecttype2">
                        <option value="volvo"></option>
                        <option value="saab">Charity</option>
                        <option value="opel">Public Sector</option>
                        <option value="opel">Partnership</option>
                      </select> */}
                      <select
                        className="form-select selecttype2"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">Industry*</div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <select
                        className="form-select selecttype2"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                    Number of employees*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="Number"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter "
                      />
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                    Business postcode*
                  </div>
                  {/* <div className="col-md-5 col-lg-5 euro-icon-div"> */}
                  <div className="col-12 col-md-7 col-lg-8 col-xl-5 euro-icon-div">
                    <div className="form-group otherpage-euro-icon">
                      <div className="otherpage-find-input">
                        {/* <span class="glyphicon glyphicon-gbp"></span> */}
                        <input
                          type="Number"
                          className="form-control form-control-lg postcode-input"
                          placeholder="Enter "
                        />
                      </div>
                      {/* CHANGES */}
                      <div className="col-md-3 find-btn ">
                        <button type="button" class="btnfind">
                          <span> FIND </span>
                          <span>
                            <SearchTwoToneIcon className="search-icon-findbtn" />
                          </span>
                        </button>
                      </div>
                      {/* <div className="pt-3 pl-5 label1">Enter Manually</div> */}

                      {/* CHANGES */}
                    </div>
                  </div>
                </div>
                {showForm ? (
                  <div className="row w-100 d-flex show-hide-row">
                    <div className="col-md-4 col-lg-3 serachby"></div>
                    <div
                      className="enter-keyword mb-3 col-md-7 col-lg-3"
                      onClick={handleForm}
                    >
                      Enter Manually
                    </div>
                  </div>
                ) : 
                     <div>
                  <div className="row w-100 d-flex show-hide-row">
                    <div className="col-md-3 col-lg-3 serachby"></div>
                    <div
                      className="enter-keyword mb-3 col-md-3 col-lg-3"
                      onClick={hideForm}
                    >
                      Find address by lookup
                    </div>                    
                  </div>
                  <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                  Building No. or name
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter your building number or name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                  House number*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="Number"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter your house number"
                      />
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                  Address line*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter the first line of your address"
                      />
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby ">
                    Town/City*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter your town or city"
                      />
                    </div>
                  </div>
                </div>
                  </div>
                }
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                    {" "}
                    Are you a Contractore or freelancer ?*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5">
                    <div className="form-group">
                      <select
                        className="form-select selecttype2"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row w-100 d-flex solo-page-firstrow">
                  <div className="col-md-4 col-lg-3 serachby">
                    {" "}
                    What's your expected monthly spend for this account*
                  </div>

                  <div className="col-md-8 col-lg-9 col-xl-5 euro-icon-solo-div">
                  {/* <div className="col-md-9 col-lg-9 col-xl-5"> */}
                    <div className="form-group euro-icon">
                      <div className="solo-euro-div">
                        <div className="solo-inputicon">£</div>
                        {/* <span class="glyphicon glyphicon-gbp"></span> */}
                        <input
                          type="Number"
                          className="form-control form-control-lg emailsinput3"
                          placeholder="Enter "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 solo-euro-lastdiv">
                    Please enter number only
                  </div>
                </div>
                <div className="row w-100 d-flex">
                  <div className="col-md-4 col-lg-3 serachby">
                    Does your organisation have a website ?*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5"> 
                    <div className="form-group">
                      <select
                        className="form-select selecttype2"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row w-100 d-flex">
                  <div className="col-md-4 col-lg-3 serachby">
                    {" "}
                    Business name as it should appear on card*
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5"> 
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg emailsinput"
                        placeholder="Enter "
                      />
                      <div className="pt-2 input-bottom-line">
                        Please enter the company name exactly as you like to
                        appear on your card
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row form-group email-row">
                  <div className="col-md-4 col-lg-3 email-solo-div">
                    <label>
                      <h6 className="label2 ">Email:</h6>
                    </label>
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5"> 
                    <input
                      type="email"
                      className="form-control form-control-lg solo-passwordinput"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row form-group email-row">
                  <div className="col-md-4 col-lg-3 email-solo-div">
                    <label>
                      <h6 className="label2">Password:</h6>
                    </label>
                  </div>
                  <div className="signupicon  " onClick={handles}>
                    {passwordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-5"> 
                    <input
                      type={passwordShown ? "password" : "text"}
                      className="form-control form-control-lg solo-passwordinput"
                      id="exampleInputUsername1"
                      placeholder="your password"
                    />
                  </div>
                </div>
                <br />
                <div>
                  <hr className="horizontal-line" />
                </div>
                <br />
                <div className="next-btn-div mb-5">
                  <Link to="/signin">
                    <button
                      // onClick={threebtn}
                      type="button"
                      class="btn btn-success next-btn"
                    >
                      Next <ArrowForwardIosIcon fontSize="inherit" />
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
