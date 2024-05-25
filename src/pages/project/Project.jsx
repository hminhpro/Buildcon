import { Link } from "react-router-dom";
import "./project.css";
import { useState } from "react";
import Card from "../../utils/Card";
import Header from "../../utils/Header";
import Slider from "../../utils/Slider";
import Footer from "../../utils/Footer";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Landmark 81",
      image: "./images/content/project1.svg",
      address: "Binh Thanh, Ho Chi Minh, Viet Nam",
      status: true,
    },
    {
      id: 2,
      title: "AON Hanoi Landmark Tower",
      image: "./images/content/project2.svg",
      address: "Nam Tu Liem, Ha Noi, Viet Nam",
      status: false,
    },
    {
      id: 3,
      title: "Lotte Center Hanoi",
      image: "./images/content/project3.svg",
      address: "Ba Dinh, Ha Noi, Viet Nam",
      status: false,
    },
    {
      id: 4,
      title: "Bitexco Financial Tower",
      image: "./images/content/project4.svg",
      address: "Quan 1, Ho Chi Minh, Viet Nam",
      status: true,
    },
    {
      id: 5,
      title: "TechnoPark Tower",
      image: "./images/content/project5.svg",
      address: "Gia Lam, Ha Noi, Viet Nam",
      status: true,
    },
    {
      id: 6,
      title: "IFC One Saigon",
      image: "./images/content/project6.svg",
      address: "Quan 1, Ho Chi Minh, Viet Nam",
      status: false,
    },
  ]);

  const handleStatus = (project) => {
    let newProject = projects;
    for (let i = 0; i < projects.length; i++) {
      if (newProject[i].id == project.id) {
        newProject[i].status = true;
      }
    }

    setProjects([...newProject]);
  };

  return (
    <>
      <Header/>
      <Slider/>
      <div id="content">
        <div className="search">
          <input type="text" placeholder="Tìm kiếm hoặc đăng tải dự án" style={{width: "90%"}}/>
          <Link to="/">
            <img
              className="search-icon"
              src="./images/content/Vector.svg"
              alt=""
            />
          </Link>
          <Link to="/project-info">
            <img className="add-icon" src="./images/content/Vector1.svg" alt="" />
          </Link>
        </div>

        <div className="project">
          <h2 className="project-heading">Dự án của bạn: </h2>
          <div className="project-item">
            <div className="row project-row" data-aos="fade-up">
              {projects.map((p) => (
                <Card
                  id={p.id}
                  title={p.title}
                  image={p.image}
                  address={p.address}
                  status={p.status}
                  handle={handleStatus}
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

export default Project;
