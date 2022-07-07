import React from "react";
// import '.cd/css/style.css'
// import './css/style.css';
import { useParams } from 'react-router-dom';
import { useState} from "react";
import axios from 'axios'
const Register = () => {

    const [user, setUser] = useState({
     name: "",
     phone: "",
     email:"",
     pass:"",
    });
const handleSubmit =(e)=> {
  e.preventDefault();
  
  axios({
    method: "post",
    url: "http://localhost:8000/api/register",
    data:user,

  }).then(res=>{
    console.log(res)
  }).catch(error=>{
    console.log(error.response.data.message);
  });
}

  return (
    <>

    {/*  */}
      <div className="img js-fullheight" />
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
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  className="signin-form"
                >
                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, name: e.target.value }))
                      }
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="name"
                      value={user.name}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, email: e.target.value }))
                      }
                      type="text"
                      className="form-control"
                      placeholder="email"
                      name="email"
                      value={user.email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      type="text"
                      className="form-control"
                      placeholder="phone"
                      name="phone"
                      value={user.phone}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          pass: e.target.value,
                        }))
                      }
                      id="password-field"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="pass"
                      value={user.pass}
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
