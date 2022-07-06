import { NavLink } from "react-router-dom";
const Navbar =()=>{
    return(
       
        <header className="header_area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                   
                    <NavLink className="navbar-brand logo_h" to="index.html"><img src="image/Logo.png" alt=""/></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li> 
                            <li className="nav-item"><NavLink className="nav-link" to="/about">About us</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/rooms">Rooms</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/">Gallery</NavLink></li>

                            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/register">Signup</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div> 
                </nav>
            </div>

            
        </header>
        

        );
}

export default Navbar;