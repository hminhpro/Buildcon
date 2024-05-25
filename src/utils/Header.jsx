import { Link, useLocation } from "react-router-dom";

import "./header.css";
const Header = () => {
  const path = useLocation();

  return (
    <div id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-center align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/homepage" className="nav-link" replace>
                  <p>Trang chủ</p>
                </Link>
                {path.pathname == "/homepage" ? (
                  <div className="underline"></div>
                ) : (
                  <></>
                )}
                
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link" replace>
                  <p>Dịch vụ</p>
                </Link>
                {path.pathname == "/service" ? (
                  <div className="underline"></div>
                ) : (
                  <></>
                )}
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link" replace >
                  <p>Dự án</p>
                </Link>
                {path.pathname == "/project" ? (
                  <div className="underline"></div>
                ) : (
                  <></>
                )}
              </li>
              <li className="nav-item">
                <Link to="/review" className="nav-link" replace>
                  <p>Đánh giá</p>
                </Link>
                {path.pathname == "/review" ? (
                  <div className="underline"></div>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="account">
          <img src="./images/header/Account.svg" alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
