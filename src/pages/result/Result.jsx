import "./result.css";
import { useState } from "react";
import CardResult from "../../utils/CardResult";
import Header from "../../utils/Header";
import Slider from "../../utils/Slider";
import Footer from "../../utils/Footer";

const Result = () => {
  const [contractors, setContractors] = useState([
    {
      id: 1,
      title: "Nhà thầu A",
      image: "./images/content/project1.svg",
      address: "Binh Thanh, Ho Chi Minh, Viet Nam",
    },
    {
      id: 2,
      title: "Nhà thầu B",
      image: "./images/content/project2.svg",
      address: "Nam Tu Liem, Ha Noi, Viet Nam",
    },
  ]);
  const [select, setSelect] = useState(false);

  const [architects, setArchitects] = useState([
    {
      id: 1,
      title: "Kiến trúc sư A",
      image: "./images/content/project1.svg",
      address: "Binh Thanh, Ho Chi Minh, Viet Nam",
    },
    {
      id: 2,
      title: "Kiến trúc sư B",
      image: "./images/content/project2.svg",
      address: "Nam Tu Liem, Ha Noi, Viet Nam",
    },
    {
      id: 3,
      title: "Kiến trúc sư C",
      image: "./images/content/project2.svg",
      address: "Nam Tu Liem, Ha Noi, Viet Nam",
    },
  ]);

  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      title: "Nhà cung cấp A",
      image: "./images/content/project1.svg",
      address: "Binh Thanh, Ho Chi Minh, Viet Nam",
    },
  ]);

  const handleSelect = () => {
    setSelect(!select);
  };

  return (
    <>
      <Header/>
      <Slider/>
      <div id="content">
        <div className="message">
          <p>Dịch vụ tư vấn cùng chuyên gia</p>
          <img
            src="./images/header/64px-Google_Messages_icon_(2022).svg.png"
            alt=""
          />
        </div>

        <div className="project">
          <h2 className="project-heading">Kết quả đấu thầu dự án </h2>
          <div className="text-decor"></div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-success pick-btn"
              onClick={handleSelect}
            >
              Chọn đối tượng trúng thầu
            </button>
          </div>
          <div className="project-item">
            <h3 className="constractors-list">Danh sách nhà thầu tham gia</h3>
            <div className="row project-row" data-aos="fade-up">
              {contractors.map((c) => (
                <CardResult
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  address={c.address}
                  select={select}
                />
              ))}
            </div>

            <h3 className="constractors-list">Danh sách kiến trúc sư </h3>
            <div className="row project-row" data-aos="fade-up">
              {architects.map((c) => (
                <CardResult
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  address={c.address}
                  select={select}
                />
              ))}
            </div>

            <h3 className="constractors-list">Danh sách nhà cung cấp NVL</h3>
            <div className="row project-row" data-aos="fade-up">
              {suppliers.map((c) => (
                <CardResult
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  address={c.address}
                  select={select}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="file-submit">
          <label className="upload-field">
            <img className="file-icon" src="./images/content/file.svg" />
            Kéo thả hoặc thêm file hợp đồng đã có chữ ký điện tử
            <input type="file" style={{ visibility: "hidden" }} />
          </label>

          <div>
            <div className="agree-pick">
              <input type="radio" style={{ marginRight: "10px" }} />
              Tôi đồng ý với điều khoản dịch vụ
            </div>
            <button
              type="button"
              className="btn btn-success project-submit"
              onClick={() => {
                alert("Success");
              }}
            >
              HOÀN TẤT LỰA CHỌN
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Result;
