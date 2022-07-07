import React from "react";
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
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <form
                    action="#"
                    onSubmit={handleSubmit}
                    classNameName="signin-form"
                  >
                    <div className="form-outline mb-4">
                      <label className="form-label" for="typeEmailX-2">
                        Name
                      </label>
                      <input
                        onChange={(e) =>
                          setUser((prev) => ({ ...prev, name: e.target.value }))
                        }
                        type="text"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        name="name"
                        value={user.name}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          setUser((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        name="email"
                        value={user.email}
                        required
                      />
                      <label className="form-label" for="typeEmailX-2">
                        Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          setUser((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        name="phone"
                        value={user.phone}
                        required
                      />
                      <label className="form-label" for="typeEmailX-2">
                        Phone
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={(e) =>
                          setUser((prev) => ({
                            ...prev,
                            pass: e.target.value,
                          }))
                        }
                        name="pass"
                        value={user.pass}
                        required
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX-2">
                        Password
                      </label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label className="form-check-label" for="form1Example3">
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
