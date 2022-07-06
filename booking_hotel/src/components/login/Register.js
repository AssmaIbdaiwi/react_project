import React from "react";
import './css/style.css'
const Register = () => {
  return (
    <>
      <div className="img js-fullheight"  />
      <section className="ftco-section" id="backg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Sign Up</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <form action="#" className="signin-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type=""
                      text
                      className="form-control"
                      placeholder="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type=""
                      text
                      className="form-control"
                      placeholder="phone"
                      name="phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type=""
                      text
                      className="form-control"
                      placeholder="address"
                      name="address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="password-field"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="pass"
                      required
                    />
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      Sign Up
                    </button>
                  </div>
                 
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
