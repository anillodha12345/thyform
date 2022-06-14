import React, { useState } from "react";
// import React, { Component, useState, } from "react";
// import { Button, Offcanvas } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "./Jotfrom.css";
// import Sidebar from "./Sidebarform";
import { useHistory } from "react-router-dom";
import NavbarTwo from "../shared/NavbarTwo";
import SideBarForm from "./Sidebarform";
import {
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineMobile,

} from "react-icons/ai";

import { BsArrowUpRightSquare } from "react-icons/bs";
import { IoIosTabletLandscape, IoIosTabletPortrait } from "react-icons/io";
// import FormPage from "./FormPage";


const Jotform = (props) => {
  const [ preview, setpreview] = useState(true);
  const [active, setActive] = useState("desktop");
  const [show, setShow] = useState(true);
  const handleMobile = () => {
    setShow(true);
  };
  const handleTable = () => {
    setShow(false);
  };
  console.log('active', active);
 
  const history = useHistory();
 
  const redirect = () => {
    history.push("/createform/setting");
  };
  const new_page = () => {
    // history.push('/createform/formpage')
    setTimeout(() => {
      // history.push("/createform/formpage");
      setpreview(false);
    }, 1000);
  };
  const backToThyfomr = () => {
    setTimeout(() => {
      // history.push("/createform");
      // window.location.reload();
      setpreview(true);
    }, 1000);
  };
  return (
    <>
    <NavbarTwo />
    { preview ? 
    <div>
      <Row className="mt-3">
        <Col sm={16}>
          <div className="jotheader">
            <section className="before_build"></section>
            <div className="build">
              <h3>Build</h3>
            </div>
            <div className="build" onClick={redirect}>
              <h3>Setting</h3>
            </div>
            <div className="build">
              <h3>Publish</h3>
            </div>
            <section className="after_build ml-5">Preview Form </section>

            <section className="form-check form-switch jot_switch">
           
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={new_page}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              ></label>
            </section>
          </div>
        </Col>

      
      </Row>
      <SideBarForm name={props.name}/>
      </div>:
     <div>
     <div className="formpage_nav">
       <div className="formpage_first_div">
         <div>
           <input className="formpage_input" />
           <span className="icon-span">
             <BsArrowUpRightSquare className="send_icon" />
           </span>
         </div>
         <div className="fill-form">Fill Form</div>
       </div>
       <div className="formpage_item">
         <div
           className="formpage_item_first"
           onClick={() => setActive("mobile")}
         >
           <div>
             <AiOutlineMobile className="formpage_icon_mob" />
           </div>
           <div>
             <p className="icon_name">Mobile</p>
           </div>
         </div>
         <div onClick={() => setActive("tablet")}>
           <div>
             <AiOutlineTablet className="formpage_icon" />
           </div>
           <div>
             <p className="icon_name">Tablet</p>
           </div>
         </div>
         <div
           className="formpage_item_last"
           onClick={() => setActive("desktop")}
         >
           <div>
             <AiOutlineDesktop className="formpage_icon" />
           </div>
           <div>
             <p className="icon_name">Desktop</p>
           </div>
         </div>
         <section className="after_build_form">Preview Form </section>
         <section className="form-check form-switch">
           <input
             className="form-check-input"
             type="checkbox"
             role="switch"
             id="flexSwitchCheckChecked"
             defaultChecked
             onChange={backToThyfomr}
           />
           <label
             className="form-check-label"
             htmlFor="flexSwitchCheckChecked"
           ></label>
         </section>
       </div>
     </div>
     {/* PAGE CONTENTENT */}
     {/* DESKTOP PAGE START HERE */}
     {active === "desktop" && (
       <div className="formpage_container">
         <div className="formpage_desktop">
           <div className="desktop_heading">
             <h1>Heading</h1>
           </div>

           <form>
             <div class="row jumbotron">
               <div class="col-sm-6 form-group">
                 <label for="name-f">First Name</label>
                 <input
                   type="text"
                   class="form-control"
                   name="fname"
                   id="name-f"
                   placeholder="Enter your first name."
                   required
                 />
               </div>
               <div class="col-sm-6 form-group">
                 <label for="name-l">Last name</label>
                 <input
                   type="text"
                   class="form-control"
                   name="lname"
                   id="name-l"
                   placeholder=" last name."
                   required
                 />
               </div>
               <div class="col-sm-6 form-group">
                 <label for="email">Email</label>
                 <input
                   type="email"
                   class="form-control"
                   name="email"
                   id="email"
                   placeholder=" email."
                   required
                 />
               </div>
               <div class="col-sm-6 form-group"></div>
               <div class="col-sm-6 form-group">
                 <label for="email">Phonenumber</label>
                 <input
                   type="number"
                   class="form-control"
                   name="email"
                   id="email"
                   placeholder="phonenumber."
                   required
                 />
               </div>
               <div class="col-sm-6 form-group"></div>
               <div class="col-sm-6 form-group">
                 <label for="email">Date</label>
                 <input
                   type="date"
                   class="form-control"
                   name="email"
                   id="email"
                   placeholder="date."
                   required
                 />
               </div>
               <div class="col-sm-6 form-group"></div>
             </div>
           </form>

           {/* changes */}
         </div>
       </div>
     )}
     {/* DESKTOP PAGE END HERE */}

     {/* TABPAGE  START HERE */}
     {active === "tablet" && (
       <div className="formpage_container">
         <h6 className="mt-3">ORIENTATION</h6>
         <div>
           <span className="incon-container" onClick={handleMobile}>
             <IoIosTabletPortrait className="formpage_icon-tabland" />
           </span>
           <span className="incon-container-right" onClick={handleTable}>
             <IoIosTabletLandscape className="formpage_icon-tabland" />
           </span>
         </div>
         {show ? (
           <div className="formpage_desktop-tab">
             <div className="tab-border">
               <div className="desktop_heading">
                 <h1>Heading</h1>
               </div>
               <form className="form_data">
                 <div className="row desktop_input">
                   <div className="col">
                     <label>Name</label>
                     <input
                       type="text"
                       className="form-control input_field"
                       placeholder="First name"
                     />
                   </div>
                   <div className="col mt-3">
                     <label>Email</label>
                     <input
                       type="email"
                       className="form-control input_field"
                       placeholder="email"
                     />
                   </div>
                   <div className="col mt-3">
                     <label>Phone Number</label>
                     <input
                       type="number"
                       className="form-control input_field"
                     />
                   </div>
                   <div className="col mt-3 mb-5">
                     <label>Date</label>
                     <input
                       type="Date"
                       className="form-control input_field"
                       placeholder="Date"
                     />
                   </div>
                 </div>
                 <div className="row desktop_input">
                   <div className="col">
                     <label className="lastname_heading">Email</label>
                     <input
                       type="email"
                       className="form-control input_field"
                       placeholder="Last name"
                     />
                   </div>
                 </div>
               </form>
             </div>
             <h1>
               {" "}
               <span class="dot"></span>
             </h1>
           </div>
         ) : (
           <div className="formpage_desktop-tab1-horizontal">
             <h1 className="vertical-tab-button">
               <span class="dot-vertical"></span>
             </h1>
             <div className="tab-border-vertical " target="my-iframe">
               <div className="vertical-align">
                 <div className="desktop_heading">
                   <h1>Heading</h1>
                 </div>
                 <form className="form_data">
                   <div className="row desktop_input">
                     <div className="col">
                       <label>Name</label>
                       <input
                         type="text"
                         className="form-control input_field-vertical"
                         placeholder="First name"
                       />
                     </div>
                     <div className="col mt-3">
                       <label>Email</label>
                       <input
                         type="email"
                         className="form-control input_field-vertical"
                         placeholder="email"
                       />
                     </div>
                     <div className="col mt-3">
                       <label>Phone Number</label>
                       <input
                         type="number"
                         className="form-control input_field-vertical"
                       />
                     </div>
                     <div className="col mt-3 mb-5">
                       <label>Date</label>
                       <input
                         type="Date"
                         className="form-control input_field-vertical "
                         placeholder="Date"
                       />
                     </div>
                   </div>
                   <div className="row desktop_input">
                     <div className="col">
                       <label className="lastname_heading">Email</label>
                       <input
                         type="email"
                         className="form-control input_field-vertical"
                         placeholder="Last name"
                       />
                     </div>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         )}
       </div>
     )}
     {/* TABPAGE  END HERE */}
     {active === "mobile" && (
       <div className="formpage_container">
         <h6 className="mt-3">ORIENTATION</h6>
         <div>
           <span className="incon-container" onClick={handleMobile}>
             <AiOutlineMobile className="formpage_icon-tabland" />
           </span>
           <span className="incon-container-right" onClick={handleTable}>
             <AiOutlineMobile className="formpage_icon-mobhori" />
           </span>
         </div>
         {show ? (
           <div className="formpage_desktop-mob">
             <div className="mobile-border">
               <div className="mobile_heading">
                 <h1>Heading</h1>
               </div>
               <form>
                 <div class="row jumbotron">
                   <div class="col-sm-6 form-group">
                     <label for="name-f">First Name</label>
                     <input
                       type="text"
                       class="form-control"
                       name="fname"
                       id="name-f"
                       placeholder="Enter your first name."
                       required
                     />
                   </div>
                   <div class="col-sm-6 form-group">
                     <label for="name-l">Last name</label>
                     <input
                       type="text"
                       class="form-control"
                       name="lname"
                       id="name-l"
                       placeholder=" last name."
                       required
                     />
                   </div>
                   <div class="col-sm-12 form-group">
                     <label for="email">Email</label>
                     <input
                       type="email"
                       class="form-control"
                       name="email"
                       id="email"
                       placeholder=" email."
                       required
                     />
                   </div>
                   <div class="col-sm-6 form-group"></div>
                   <div class="col-sm-12 form-group">
                     <label for="email">Phonenumber</label>
                     <input
                       type="number"
                       class="form-control"
                       name="email"
                       id="email"
                       placeholder="phonenumber."
                       required
                     />
                   </div>
                   <div class="col-sm-6 form-group"></div>
                   <div class="col-sm-12 form-group">
                     <label for="email">Date</label>
                     <input
                       type="date"
                       class="form-control"
                       name="email"
                       id="email"
                       placeholder="date."
                       required
                     />
                   </div>
                   <div class="col-sm-6 form-group"></div>
                 </div>
               </form>
             </div>

             <h1>
               {" "}
               <span class="dot"></span>
             </h1>
           </div>
         ) : (
           <div className="formpage_desktop-mob-hor">
             <h1 className="vertical-tab-button">
               <span class="dot-mobvertical"></span>
             </h1>
             {/* <iframe name="my-iframe" target="my-iframe"> */}
             <div className="mob-border-vertical" target="my-iframe">
               <div className="vertical-align-mob">
                 <div className="desktop_heading">
                   <h1>Heading</h1>
                 </div>
                 <form className="form_data">
                   <div className="row mobile_input">
                     <div className="col">
                       <label>Name</label>
                       <input
                         type="text"
                         className="form-control input_field_mob"
                         placeholder="First name"
                       />
                     </div>
                     <div className="col mt-3">
                       <label>Email</label>
                       <input
                         type="email"
                         className="form-control input_field_mob"
                         placeholder="email"
                       />
                     </div>
                     <div className="col mt-3">
                       <label>Phone Number</label>
                       <input
                         type="number"
                         className="form-control input_field_mob"
                       />
                     </div>
                     <div className="col mt-3 mb-5">
                       <label>Date</label>
                       <input
                         type="Date"
                         className="form-control input_field_mob"
                         placeholder="Date"
                       />
                     </div>
                   </div>
                   <div className="row mobile_input">
                     <div className="col">
                       <label className="lastname_heading">Email</label>
                       <input
                         type="email"
                         className="form-control input_field_mob"
                         placeholder="Last name"
                       />
                     </div>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         )}
       </div>
     )}
     </div>
}
      
    </>
  );
};
export default Jotform;

