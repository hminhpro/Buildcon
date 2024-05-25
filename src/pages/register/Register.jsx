import { Link } from "react-router-dom";
import "../register/register.css"

const Register = () => {
    return (
        <div className="cover">
            <div className="register">
                <div className="welcome-part">
                    <h1>Welcome Back</h1>
                    <p>Enter Your Personal Details To <br/> Create Account</p>
                    <Link to="/signin" type="button" className="btn btn-primary register-btn">SIGN IN</Link>
                </div>
                <div className="form-part">
                    <h1>Create Account</h1>
                    <img src="./images/Mainicon.svg" />
                    <p>Or Use Email For Registeration</p>
                    <input type="text" placeholder="Name" className="form-input" />
                    <input type="text" placeholder="Email" className="form-input" />
                    <input type="text" placeholder="Password" className="form-input" />
                    <button type="button" className="btn btn-primary register-btn">SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default Register;