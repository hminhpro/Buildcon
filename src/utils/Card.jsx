import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, image, address, status, handle, hidden } = props;
  const changeStatus = () => {
    handle({ id: id });
  };
  return (
    <div className="col-md-4 project-item">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            <img className="address-icon" src="./images/content/Address.svg" />
            {address}
          </p>
          <p className="card-text">
            <img className="address-icon" src="./images/content/Info.svg" />
            Thông tin
          </p>
          {!hidden ? (
            status ? (
              <Link to="/result" className="btn btn-primary project-btn">
                Xem lại dự án
              </Link>
            ) : (
              <>
                <img className="clock-icon" src="/images/content/Clock.svg" />
                <button
                  className="btn btn-primary project-btn"
                  onClick={changeStatus}
                >
                  Dừng tiếp nhận đấu thầu
                </button>
              </>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
