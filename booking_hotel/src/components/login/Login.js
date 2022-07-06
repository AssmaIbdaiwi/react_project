import React from "react";
import "./css/style.css";

const Login = () => {
  return (
    <>
  

	<div className="img js-fullheight" />
      <section className="ftco-section" id="backg">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Login </h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-4">
					<div className="login-wrap p-0">
		      	<h3 className="mb-4 text-center">Have an account?</h3>
		      	<form action="#" className="signin-form">
		      		<div className="form-group">
		      			<input type="text" className="form-control" placeholder="Username" name='name' required/>
		      		</div>
	            <div className="form-group">
	              <input id="password-field" type="password" className="form-control" placeholder="Password" name ='pass' required/>
	              <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
	            </div>
	            <div className="form-group">
	            	<button type="submit" className="form-control btn btn-primary submit px-3">Login</button>
	            </div>
	            <div className="form-group d-md-flex">
	            	<div className="w-50">
		            	<label className="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" checked/>
									  <span className="checkmark"></span>
									</label>
								</div>
								<div className="w-50 text-md-right">
									<a href="#" ><link href="/register"/>Sign Up</a>
								</div>
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
export default Login
