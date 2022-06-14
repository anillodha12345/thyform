import React, { useState } from "react";
import NavbarTwo from "./../shared/NavbarTwo";
// import Jotfrom from "./Jotform";
import "./Setting.css";
import { Link } from "react-router-dom";
import { AiTwotoneSetting, AiOutlineCheck, AiFillLock } from "react-icons/ai";
import CreateForm from "./CreateForm";
import { MdSettings } from "react-icons/md";
import { BsGear } from "react-icons/bs";

const Setting = () => {
  const [showData, setShowData] = useState(false);
  // const [ showfield, setShowfield] = useState(false);
  const [option, setOption] = useState("");

  const handleValue = (e) => {
    setOption(e.target.value);
  };

  const handleData = () => {
    setShowData(!showData);
  };
  return (
    <>
      <NavbarTwo />
      {/* <Jotfrom /> */}
      <div className="setting_container mt-5">
        <div className="first-div">
          <div className="first-link">
            <div>
              <AiTwotoneSetting className="setting-icon" />
            </div>
            <div className="mt-3 first-link-text">
              <div>
                <Link to="/dashboard/createform/setting/secondpage">
                  FORM SETTING
                </Link>
              </div>
              <div>Form status and properties.</div>
            </div>
          </div>
          <div className="first-link">
            <div>
              <AiOutlineCheck className="setting-icon" />
            </div>
            <div className="mt-3 first-link-text">
              <div>THANK YOU PAGE</div>
              <div>Shown after form submit.</div>
            </div>
          </div>
        </div>
        <div className="last-div">
          <div className="second-div">
            <div className="data-content">
              <div className="setting-icon1">
                {/* <div className="setting-icon-div"> */}
                <MdSettings />
              </div>
              <div className="setting-heading ml-3">
                <div className="form-setting-heading">FORM SETTINGS</div>
                <p className="form-setting-para">
                  Change form status and properties.
                </p>
              </div>
            </div>
            <div className="form-container">
              <form>
                <div className="form-group input-field-div mb-3">
                  <label for="exampleInputEmail1" className="label-heading">
                    Title
                  </label>
                  <br />
                  <p className="label-para">
                    Enter a short, descriptive name for this form.
                  </p>
                  <input
                    type="email"
                    className="form-control setting-input-field"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Form"
                  />
                </div>
              </form>
              <div className="form-container">
                <form>
                  <div className="form-group input-field-div">
                    <label for="exampleInputEmail1" className="label-heading">
                      Form Status
                    </label>
                    <br />
                    <p className="label-para2">
                      You can disable your form now, on a specific date, or when
                      it reaches a certain <br></br> number of submissions.
                    </p>
                    <select
                      class="form-select setting-input-field"
                      aria-label="Default select example"
                      onChange={handleValue}
                      value={option}
                    >
                      <option defaultValue="enabled">Enabled</option>
                      <option value="disabled">Disabled</option>
                      <option value="disableondate">Disable on date</option>
                      <option value="disableonsubmissionlimit">
                        Disable on submisseon limit
                      </option>
                      <option value="disableondateandsubmissionlimit">
                        Disable on date and submisseon limit
                      </option>
                    </select>
                    <div>
                      {option === "enabled" && <div></div>}
                      {option === "disabled" && (
                        <div className="disabled-form">
                          <form>
                            <div className="form-group input-field-div mb-3">
                              <label
                                for="exampleInputEmail1"
                                className="label-heading"
                              >
                                Warning Message
                              </label>
                              <br />
                              <p className="label-para">
                                Set a message for forms which are expired or
                                limited
                              </p>
                              <input
                                type="email"
                                className="form-control setting-input-field"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="This form is currently unavailable!"
                              />
                            </div>
                          </form>
                        </div>
                      )}
                      {option === "disableondate" && <div>Disable on date</div>}
                      {option === "disableonsubmissionlimit" && (
                         <div className="disabled-form">
                         <form>
                         <div className="form-group input-field-div mb-3">
                             <label
                               for="exampleInputEmail1"
                               className="label-heading"
                             >
                               Warning Message
                             </label>
                             <br />
                             <p className="label-para">
                               Set a message for forms which are expired or
                               limited
                             </p>
                             <input
                               type="email"
                               className="form-control setting-input-field"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="This form is currently unavailable!"
                             />
                           </div>
                           <div className="form-group input-field-div mb-3">
                             <label
                               for="exampleInputEmail1"
                               className="label-heading"
                             >
                               Warning Message
                             </label>
                             <br />
                             <p className="label-para">
                               Set a message for forms which are expired or
                               limited
                             </p>
                             <input
                               type="email"
                               className="form-control setting-input-field"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="This form is currently unavailable!"
                             />
                           </div>
                         </form>
                       </div>
                      )}
                      {option === "disableondateandsubmissionlimit" && (
                        <div>Disable on date and submisseon limit</div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
              {showData ? (
                <button className="show-more-btn-div" onClick={handleData}>
                  SHOW MORE OPTION
                </button>
              ) : (
                <div>
                  <div className="form-container-showhide">
                    <form>
                      <div className="d-flex justify-content-around">
                        <div className="form-group hide-data mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="label-headingdata"
                          >
                            Form Warnings
                          </label>
                          <br />
                          <p className="label-para3">
                            Change the warning messages on your form.
                          </p>
                        </div>
                        <div>
                          <button className="edit-btn-div">EDIT</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="form-group input-field-div">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Form Language
                        </label>
                        <br />
                        <p className="label-para2">
                          Please select the language for your form.
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Enabled</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="form-container-showhide">
                    <form>
                      <div className="d-flex justify-content-around">
                        <div className="form-group hide-data mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="label-headingdata"
                          >
                            Translations
                          </label>
                          <br />
                          <p className="label-para3">
                            Make your form available in multiple languages.
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            class="edit-btn-disabled"
                            disabled
                          >
                            EDIT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="form-group input-field-div">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Password Protection
                        </label>
                        <br />
                        <p className="label-para2">
                          Set a password to limit access to your forms.
                        </p>
                        <form>
                          <div className="form-row align-items-center password-field">
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox mr-sm-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customControlAutosizing"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customControlAutosizing"
                                >
                                  Enable password protection
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </form>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="form-group input-field-div">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Encrypt Form Data
                        </label>
                        <br />
                        <p className="label-para2">
                          Encrypt your form responses to store sensitive data
                          securely.<span> Learn more.</span>
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="form-container-showhide">
                    <form>
                      <div className="d-flex justify-content-around">
                        <div className="form-group enable-div mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="label-headingdata"
                          >
                            Auto-Delete Form Submissions
                          </label>
                          <br />
                          <p className="label-para3">
                            Delete form submissions after a certain period of
                            time.
                          </p>
                        </div>
                        <div>
                          <button className="edit-btn-div">ENABLE</button>
                        </div>
                      </div>
                      <p className="profile-page">
                        Add a default deletion period to all of your forms
                      </p>
                    </form>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="form-group input-field-div">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Continue Forms Later
                        </label>
                        <br />
                        <p className="label-para2">
                          Enable or disable autofill on your form.
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Enabled</option>
                          <option value="1">Disabled</option>
                        </select>
                        <p className="deletion-page">
                          Add a default deletion period to all of your forms
                        </p>
                      </div>
                    </form>
                  </div>
                  {/* COMMENT */}
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Tooltip on bottom"
                  >
                    Tooltip on bottom
                  </button> */}

                  {/* COMMENT */}
                  <div className="form-container-showhide">
                    <form>
                      <div className="d-flex justify-content-around">
                        <div className="form-group enabledata-div mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="label-headingdata"
                          >
                            Require SSO
                          </label>
                          <br />
                          <p className="label-para3">
                            Add Single Sign-On (SSO) login to fill out the form.
                          </p>
                        </div>
                        <div className="d-flex flex-row thyform-div">
                          <div className="blank-space"></div>
                          <div className="lock-icon-div">
                            <AiFillLock className="lock-icon" />
                          </div>
                        </div>
                      </div>
                    </form>
                    <form>
                      <div className="form-row align-items-center password-field">
                        <div className="col-auto">
                          <div className="custom-control custom-checkbox mr-sm-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customControlAutosizing"
                            />
                            <label
                              className="custom-control-label"
                              for="customControlAutosizing"
                            >
                              Users need to login to view and submit the form
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mr-sm-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customControlAutosizing"
                            />
                            <label
                              className="custom-control-label"
                              for="customControlAutosizing"
                            >
                              Users can save drafts and continue later
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="form-group input-field-div">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Unique Submission
                        </label>
                        <br />
                        <p className="label-para2">
                          Use cookies (loose check) or IP address (strict check)
                          to prevent multiple form submissions.
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Enabled</option>
                          <option value="1">Disabled</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="form-group input-field-div">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Unique Question
                        </label>
                        <br />
                        <p className="label-para2">
                          Do not allow previously entered values.{" "}
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Enabled</option>
                          <option value="1">Disabled</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="form-container">
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Form Accessibility
                        </label>
                        <br />
                        <p className="label-para2">
                          Check your form's accessibility.
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Enabled</option>
                          <option value="1">Disabled</option>
                        </select>
                        <form>
                          <div className="form-row align-items-center password-field">
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox mr-sm-2">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customControlAutosizing"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customControlAutosizing"
                                >
                                  Show the accessibility badge on the form.
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Page Title
                        </label>
                        <br />
                        <p className="label-para2">
                          Enter the title that will be used as HTML page title.
                        </p>
                        {/* <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Enabled</option>
                          <option value="1">Disabled</option>
                        </select> */}
                        <input
                          type="email"
                          className="form-control setting-input-field"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="form"
                        />
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Send Post Data
                        </label>
                        <br />
                        <p className="label-para2">
                          Do you want to send HTTP POST data to the Thank-You
                          page?
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Clear Hidden Field Values
                        </label>
                        <br />
                        <p className="label-para2">
                          Do you want to clear the values of fields hidden by
                          conditional logic?
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Highlight Effect
                        </label>
                        <br />
                        <p className="label-para2">
                          Enable or disable the yellow background highlight on
                          input fields.
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Form Layout
                        </label>
                        <br />
                        {/* <p className="label-para2">
                        Do you want to send HTTP POST data to the Thank-You page?
                        </p> */}
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Show error navigation on forms
                        </label>
                        <br />
                        <p className="label-para2">
                          Navigation between errors on form
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Prevent Cloning
                        </label>
                        <br />
                        <p className="label-para2">
                          Prevent other users from cloning this form.
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                    <form>
                      <div className="form-group form-accessibility">
                        <label
                          for="exampleInputEmail1"
                          className="label-heading"
                        >
                          Allow Browser AutoComplete
                        </label>
                        <br />
                        <p className="label-para2">
                          Allow browsers to store and autocomplete form fields.
                        </p>
                        <select
                          class="form-select setting-input-field"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option defaultValue="enabled">Yes</option>
                          <option value="1">No</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <button className="show-more-btn-div" onClick={handleData}>
                    SHOW LESS
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
