import "./project-info.css";
import Header from "../../utils/Header";
import Slider from "../../utils/Slider";
import Footer from "../../utils/Footer";

const ProjectInfo = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <div id="content">
      <div className="content-container" data-aos="fade-up">
        <img className="project-cover" src="./images/content/pi1.svg" />
        <form>
          <h3 className="text-center p-2 pb-4">CHI TIẾT DỰ ÁN</h3>

          <label className="form-element">
            Tên dự án:{" "}
            <input
              className="element-input"
              type="text"
              placeholder="Bạn muốn xây dựng công trình gì?"
            />
          </label>
          <div className="textline"></div>

          <label className="form-element">
            Vị trí chính xác:{" "}
            <input
              className="element-input"
              type="text"
              placeholder="Nhập địa chỉ chính xác hoặc ghim trên bản đồ"
            />
          </label>
          <div className="textline"></div>

          <label className="form-element">
            Diện tích:{" "}
            <input className="element-input" type="text" placeholder="m2" />
          </label>
          <div className="textline"></div>

          <label className="form-element">
            Thời gian:{" "}
            <input
              className="element-input"
              type="text"
              placeholder="ngày/ tháng/ năm - ngày/ tháng/ năm"
            />
          </label>
          <div className="textline"></div>

          <label className="form-element">
            Yêu cầu:{" "}
            <input
              className="element-input"
              type="text"
              placeholder="chất lượng, số lượng, yêu cầu kỹ thuật của xây dựng/ kỹ thuật/ vật liệu"
            />
          </label>
          <div className="textline"></div>

          <label className="form-element">
            Giá khởi điểm:{" "}
            <input
              className="element-input"
              type="text"
              placeholder="Giá khởi điểm đấu giá thầu/ thiết kế kiến trúc/ nguyên vật liệu"
            />
          </label>
          <div className="textline"></div>

          <fieldset>
            <p className="form-element">
              CÁC CHỦ THỂ CÓ THỂ THAM GIA ĐẤU THẦU/ ĐẤU GIÁ CHO DỰ ÁN CỦA BẠN:
            </p>
            <label className="form-pick">
              <input type="checkbox" name="chuthe" /> Nhà thầu{" "}
            </label>
            <label className="form-pick">
              <input type="checkbox" name="chuthe" /> Kiến trúc sư{" "}
            </label>
            <label className="form-pick">
              <input type="checkbox" name="chuthe" /> Nhà bán nguyên vật liệu{" "}
            </label>
          </fieldset>

          <div className="file-submit">
            <label className="upload-field">
              <img className="file-icon" src="./images/content/file.svg" />
              Kéo thả hoặc thêm file hồ sơ dự án
              <input type="file" style={{ visibility: "hidden" }} />
            </label>
            <button type="button" className="btn btn-success project-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProjectInfo;
