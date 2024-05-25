import { Link } from "react-router-dom";
import "./signin.css"
const Signin = () => {
  return (
    <div className="cover">
      <div className="signin">
        <div className="form-part">
          <h1>Sign In</h1>
          <img src="./images/Mainicon.svg" />
          <p>Or Use Your Email And Password</p>
          <input type="text" placeholder="Name" className="form-input" />
          <input type="text" placeholder="Email" className="form-input" />
          <p>Forget Your Password?</p>
          <Link to="/homepage" type="button" className="btn btn-primary register-btn">
            SIGN IN
          </Link>
        </div>

        <div className="welcome-part">
          <h1>Hello, Friend!</h1>
          <p>
            Register With Your Personal Details To <br /> Use All Features
          </p>
          <Link to="/" type="button" className="btn btn-primary register-btn">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;