const CardResult = (props) => {
  const { image, title, address, select } = props;
  return (
    <div className="col-md-4 project-item">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4 className="card-title" style={{ display: "inline" }}>
              {title}
            </h4>
            {select ? <input type="checkbox" style={{width:"25px", height:"25px", border:"1px solid #ccc", textAlign:"center", borderRadius:"50%"}} /> : <></>}
          </div>

          <p className="card-text">
            <img className="address-icon" src="./images/content/Address.svg" />
            {address}
          </p>
          <p className="card-text">
            <img className="file-icon" src="./images/content/file.svg" />
            Hosodaugia.pdf
          </p>

          <button className="btn btn-primary project-btn">Xem lại dự án</button>
        </div>
      </div>
    </div>
  );
};

export default CardResult;
