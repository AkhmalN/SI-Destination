import logo_brand from "../images/icons8-airbnb-144.png";
import { Link } from "react-router-dom";
import headerimg from "../images/header.jpg";
import headerimg2 from "../images/headerimg2.jpg";
import headerimg3 from "../images/headerimg3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="header container-fluid overflow-hidden">
      <div className="background-image">
        <Slider {...settings}>
          <img src={headerimg} alt="" height={600} width='auto' />
          <img src={headerimg2} alt=""  height={600} width='auto'/>
          <img src={headerimg3} alt=""  height={600} width='auto'/>
        </Slider>
      </div>

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <img src={logo_brand} alt="" width={40} height="auto" /> Akhmal
            Novanda
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center py-1"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link text-dark mx-2" href="#beranda">
                  <h5>Beranda</h5>
                </a>
              </li>
              <li className="nav-link dropdown">
                <h5
                  className="text-dark dropdown-toggle mx-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  role="button"
                >
                  Kategori
                </h5>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item">Bahari</Link>
                  <Link className="dropdown-item">Budaya</Link>
                  <Link className="dropdown-item">Cagar Alam</Link>
                  <Link className="dropdown-item">Pusat perbelanjaan</Link>
                  <Link className="dropdown-item">Taman Hiburan</Link>
                  <Link className="dropdown-item">Tempat Ibadah</Link>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark mx-2" href="#destinasi">
                  <h5>Destinasi Populer</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark mx-2" href="kontak">
                  <h5>Kontak</h5>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item btn btn-transparent rounded px-0 py-0 mx-2">
                <a className="nav-link text-dark  " href="masuk">
                  <h5> <FontAwesomeIcon icon={faUser}/> Masuk  </h5>
                </a>
              </li>
              <li className="nav-item btn btn-primary px-0 py-0 mx-2">
                <a className="nav-link text-light " href="daftar">
                  <h5><FontAwesomeIcon icon={faUserPen}/> Daftar</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container hero d-flex flex-column mt-5">
        <h1 className="text-center text-dark">
          Jadikan Liburan Anda Luar Biasa bersama Kami
        </h1>
        <p className="text-center text-dark">
          Nikmati perjalanan dan liburanmu
        </p>
        <div className="p-3 mb-2 bg-transparent text-body ">
          <div className="w-80">
            <div className="p-3 bg-transparent text-dark text-emphasis-secondary">
              <p>Cari Tempat Wisata</p>
              <div className="d-flex mr-auto ">
                <input
                  className="form-control form-control-lg w-75 bg bg-transparent border border-light mx-2 text-dark"
                  type="text"
                  placeholder="cari ..."
                  aria-label=".form-control-lg example"
                />
                <button className="btn btn-primary" type="button">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
