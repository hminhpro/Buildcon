import "../result/result.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../utils/Card";
import Header from "../../utils/Header";
import Slider from "../../utils/Slider";
import Footer from "../../utils/Footer";

const Homepage = () => {
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
    {
      id: 3,
      title: "Nhà thầu C",
      image: "./images/content/project3.svg",
      address: "Nam Tu Liem, Ha Noi, Viet Nam",
    },
  ]);

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
      image: "./images/content/project3.svg",
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
    {
      id: 2,
      title: "Nhà cung cấp B",
      image: "./images/content/project2.svg",
      address: "Binh Thanh, Ho Chi Minh, Viet Nam",
    },
    {
      id: 3,
      title: "Nhà cung cấp C",
      image: "./images/content/project3.svg",
      address: "Binh Thanh, Ho Chi Minh, Viet Nam",
    },
  ]);
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
          <div className="search">
            <input
              type="text"
              placeholder="Tìm kiếm nhà thầu/ kiến trúc sư/ nguyên vật liệu"
              style={{ width: "90%" }}
            />
            <Link to="/">
              <img
                className="search-icon"
                src="./images/content/Vector.svg"
                alt=""
              />
            </Link>
            <Link to="/project-info">
              <img
                className="add-icon"
                src="./images/content/Vector1.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="project-item">
            <h3 className="constractors-list">Đề xuất nhà thầu cho bạn:</h3>
            <div className="row project-row" data-aos="fade-up">
              {contractors.map((c) => (
                <Card
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  address={c.address}
                  hidden={true}
                />
              ))}
            </div>

            <h3 className="constractors-list">Kiến trúc sư:</h3>
            <div className="row project-row" data-aos="fade-up">
              {architects.map((c) => (
                <Card
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  address={c.address}
                  hidden={true}
                />
              ))}
            </div>

            <h3 className="constractors-list">Nhà cung cấp NVL:</h3>
            <div className="row project-row" data-aos="fade-up">
              {suppliers.map((c) => (
                <Card
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  address={c.address}
                  hidden={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;
