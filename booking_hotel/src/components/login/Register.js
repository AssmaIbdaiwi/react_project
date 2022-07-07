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
    <section class="vh-100" style={{backgroundColor: '#508bfc'}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr class="my-4"/>

            <button class="btn btn-lg btn-block btn-primary" style={{backgroundColor:' #dd4b39'}}
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: '#3b5998'}}
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
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
