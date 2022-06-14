import React, { Component } from "react";
// import { Dropdown } from "react-bootstrap";
// import { Trans } from "react-i18next";
import {Link} from 'react-router-dom'
import './NavbarTwo.css'
// import Search from "./Search";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

class Topnavbar extends Component {
  // constructor(props) {
  //   super(props);
    // this.state={
    //   toggleLogo: true
    // }
  // }
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  toggleRightSidebar() {
    document.querySelector(".right-sidebar").classList.toggle("open");
  }

  // handleClick = ()=> {
  //   this.setState(prevState => ({ toggleLogo: !prevState.toggleLogo }));
  // }

  render() {
    // const mystyle = {
    //   color: "#212121",
      
    //   padding: "8px 10px",
    //   border: "1px solid #DFDFDF",
    //   borderRadius: "6px",
    //   marginTop: "30px",
    //   fontStyle: "normal",
    //   fontWeight: " 600",
    //   fontSize: "12px",
    //   lineHeight: "16px",
    //   fontFamily: "Manrope",
    //   minWidth: "170px",
    //   height: "34px",
    //   background: "#ffffff",
    //   erticalAlign: "middle",
     
    // };

    // const date = {
    //   color: "#212121",
    //   // backgroundColor: "white",
    //   // padding: "10px",
    //   // marginTop:'10px',
    //   // border:'1px solid #DFDFDF',
    //   // fontFamily: "Arial"
    //   padding: "8px 15px",
    //   border: "1px solid #DFDFDF",
    //   borderRadius: "6px",
    //   marginTop: "30px",
    //   fontStyle: "normal",
    //   fontWeight: " 600",
    //   fontSize: "12px",
    //   lineHeight: "16px",
    //   fontFamily: "Manrope",
    //   minWidth: "170px",
    //   height: "34px",
    //   background: "#ffffff",
    //   erticalAlign: "middle",
    // };
    // const cls = this.visible ? "visible" : "hidden";
    var myDate = new Date();
    var currentHour = myDate.getHours();

    var msg;

    if (currentHour < 12) msg = "Good Morning,";
    else if (currentHour === 12) msg = "Good Afternoon,";
    else if (currentHour >= 12 && currentHour <= 17) msg = "Good Evening,";
    else if (currentHour >= 17 && currentHour <= 24) msg = "Good Night,";
    return (
      <nav
        className={`navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex nav_container ${this.cls}`}
      >
        <div className="navbar-menu-wrapper d-flex align-items-center navtwo justify-content-between">
         
          <a
            className="navbar-brand brand-logo-mini align-self-center d-lg-none"
            href="!#"
            onClick={(evt) => evt.preventDefault()}
          >
            <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </a>

          <div className="navbar-nav navbar-nav-left header-links align-self-center">
                 {/* <div>
         <Link to='/'>
            <img src='https://www.bootstrapdash.com/demo/star-admin2-pro/template/images/logo.svg' />
          </Link>
          </div> */}
          {/* <div><h1>hello</h1></div> */}
         <Link to='/dashboard' style={{textDecoration:'none' , color:'black'}}> <div className="jotform_heading"><h1>Thyform</h1></div></Link>
            <div className="font-weight-semibold   pt-3">
              <h3 className="message-gm">
                {msg} <span className="text-black fw-bold">John</span>
              </h3>{" "}
            </div>

            {/* <li className="nav-item dropdown language-dropdown">   */}
            {/* <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <div className="d-inline-flex mr-0 mr-md-3">
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-us"></i>
                    </div>
                  </div>
                  <span className="profile-text font-weight-medium d-none d-md-block">English</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-us"></i>
                    </div>English
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-fr"></i>
                    </div>French
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-ae"></i>
                    </div>Arabic
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-ru"></i>
                    </div>Russian
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            {/* </li> */}
          </div>

          {/* <form className="ml-auto search-form d-none d-md-block" action="#">
            <div className="form-group">
              <input type="search" className="form-control" placeholder="Search Here" />
            </div>
          </form> */}
          {/* <Dropdown>
            <Dropdown.Toggle
              style={mystyle}
              variant="btn  dropdown-toggle ml-4"
              id="dropdownMenuButton1"
            >
              Select category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Header>Bootstrap</Dropdown.Header>
              <Dropdown.Item>Angular</Dropdown.Item>
              <Dropdown.Item>React</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="pl-2">
            <input id="startDate" type="date" style={date} />
          </div> */}
{/* 
          <ul className="navbar-nav navbar-nav-right mt-3">
            <li className="nav-item  nav-profile border-0 pl-1">
              <div>
                {" "}
                <Search />
              </div>
            </li>
            <li className="nav-item  nav-profile border-0 ">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count bg-success">4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item
                    className="dropdown-item py-3 d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <p className="mb-0 font-weight-medium float-left">
                      <Trans>You have</Trans> 4 <Trans>new notifications</Trans>{" "}
                    </p>
                    <span className="badge badge-pill badge-primary float-right">
                      View all
                    </span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">
                        <Trans>Application Error</Trans>
                      </h6>
                      <p className="font-weight-light small-text mb-0">
                        {" "}
                        <Trans>Just now</Trans>{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-settings m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">
                        <Trans>Settings</Trans>
                      </h6>
                      <p className="font-weight-light small-text mb-0">
                        {" "}
                        <Trans>Private message</Trans>{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content py-2">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">
                        <Trans>New user registration</Trans>
                      </h6>
                      <p className="font-weight-light small-text mb-0">
                        {" "}
                        2 <Trans>days ago</Trans>{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item  nav-profile border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count">7</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item
                    className="dropdown-item  d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <p className="mb-0 font-weight-medium float-left">
                      <Trans>You have</Trans> 7 <Trans>unread mails</Trans>{" "}
                    </p>
                    <span className="badge badge-pill badge-primary">
                      View all
                    </span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face10.jpg")}
                        alt="profile"
                        className="img-sm profile-pic"
                      />{" "}
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">
                        <Trans>Marian Garner</Trans>{" "}
                      </p>
                      <p className="font-weight-light small-text">
                        {" "}
                        <Trans>The meeting is cancelled</Trans>{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face12.jpg")}
                        alt="profile"
                        className="img-sm profile-pic"
                      />{" "}
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">
                        <Trans>David Grey</Trans>{" "}
                      </p>
                      <p className="font-weight-light small-text">
                        {" "}
                        <Trans>The meeting is cancelled</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <img
                        src={require("../../assets/images/faces/face1.jpg")}
                        alt="profile"
                        className="img-sm profile-pic"
                      />{" "}
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">
                        <Trans>Travis Jenkins</Trans>{" "}
                      </p>
                      <p className="font-weight-light small-text">
                        {" "}
                        <Trans>The meeting is cancelled</Trans>{" "}
                      </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li className="nav-item  nav-profile border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <img
                    className="img-xs rounded-circle"
                    src={require("../../assets/images/faces/face8.jpg")}
                    alt="Profile"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                  <Dropdown.Item
                    className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0 mt-2"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Manage Accounts</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center border-0"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Sign Out</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul> */}
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.toggleOffcanvas}
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Topnavbar;
