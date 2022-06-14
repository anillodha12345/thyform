import React, {useState} from 'react';
import { Link } from "react-router-dom"
import './Forget.css';

const ResetPassword = () => {
    const [ timerStart, setTimerStart] = useState(false);

  const startTimer = () => {
    setTimerStart(true);
  }
    return (
        <>
        {/* <div className="d-flex justify-content-center"> */}
        <div className="row justify-content-center w-100">
          <div className="row w-100 mx-0 d-flex justify-content-center">
            <div className="col-lg-5">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 bg-white abcv">
                <form className="reset-form-data">
                  <h3 className='label-heading'>Reset Password</h3>
                  <div className="form-group pt-3">
                    <label>
                      <h5 className='label-heading'>New Password:</h5>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg from-input-field"
                      id="exampleInputEmail1"
                      placeholder="New password"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <h5 className='label-heading'>Confirm Password:</h5>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg from-input-field"
                      id="exampleInputEmail1"
                      placeholder="Confirm password"
                    />
                  </div>
                  <div className="mt-3">
                    <Link
                      className="btn btn-block  btn-lg font-weight-medium auth-form-btn forgetbutton"
                      to="/"
                    >
                      Continue
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
    );

};
export default ResetPassword;