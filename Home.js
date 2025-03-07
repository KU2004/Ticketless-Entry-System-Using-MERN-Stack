import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import "./Home.css";

function Home() {
  const [showDistrictModal, setShowDistrictModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const districts = ["Mumbai", "Pune", "Nagpur", "Nashik", "Kolhapur", "Aurangabad", "Thane"];

  const handleDistrictClick = (district) => {
    alert(`Selected District: ${district}`);
    setShowDistrictModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const monuments = [
    {
      name: "Gateway of India",
      location: "Chhatrapati Shivaji Maharaj Terminus, Mumbai.",
      img: require("../Assets/image 1.png"),
    },
    {
      name: "Elephanta Caves",
      location: "Gharapuri, Mumbai.",
      img: require("../Assets/image 2.png"),
    },
    {
      name: "Siddhivinayak Temple",
      location: "Dadar, Mumbai.",
      img: require("../Assets/image 3.png"),
    },
    {
      name: "Chhatrapati Shivaji Maharaj Museum",
      location: "Mumbai.",
      img: require("../Assets/image 4.png"),
    },
    {
      name: "Sanjay Gandhi National Park",
      location: "Borivali, Mumbai.",
      img: require("../Assets/image 5.png"),
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div>
          <Link to="/">
            <img className="logo" src={require("../Assets/Monumento.png")} alt="LOGO" />
          </Link>
        </div>

        <div className="Searchbar">
          <img className="searchIcon" src={require("../Assets/search.png")} alt="Search" />
          <input
            className="searchBar"
            type="text"
            placeholder="Search for Monument..."
          />
        </div>

        <div>
          <button className="district-btn" onClick={() => setShowDistrictModal(true)}>
            Select District
          </button>
        </div>

        <div className="Login">
          <img className="icon" src={require("../Assets/icon.jpeg")} alt="User Icon" />
          <a className="black" href="/">
            <strong>Hi, Guest</strong>
          </a>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/monuments" className="nav-item">Monuments</Link>
        <Link to="/forts" className="nav-item">Forts</Link>
        <Link to="/sanctuaries" className="nav-item">Sanctuaries</Link>
        <Link to="/temples" className="nav-item">Temples</Link>
        <Link to="/palaces" className="nav-item">Palaces</Link>
        <Link to="/caves" className="nav-item">Caves</Link>
        <Link to="/museums" className="nav-item">Museums</Link>
        <Link to="/maps" className="nav-item">Maps</Link>
        <Link to="/offers" className="nav-item">Offers</Link>
        <Link to="/gift-cards" className="nav-item">GiftCards</Link>
      </nav>

      {/* Map Section */}
      <div className="mapdiv">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867495.5656358157!2d74.1275990766745!3d18.804786278273312"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Recommended Sites */}
      <div className="addBar">
        <h1>Recommended Sites</h1>
        <h3>
          <a className="seeAll" href="/">
            See All
          </a>
        </h3>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          {monuments.map((item, index) => (
            <div key={index} className="section">
              <img src={item.img} alt={item.name} />
              <Link className="black" to="/monuments">
                <strong>{item.name}</strong>
                <br />
                <small>{item.location}</small>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <footer className="footer">
        <div className="parent"></div>
      </footer>

      {/* District Modal Popup */}
      {showDistrictModal && (
        <div className="district-modal">
          <div className="district-popup">
            <input
              type="text"
              placeholder="Search for District"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="district-list">
              {districts
                .filter((d) => d.toLowerCase().includes(searchText.toLowerCase()))
                .map((district, index) => (
                  <div
                    key={index}
                    className="district-item"
                    onClick={() => handleDistrictClick(district)}
                  >
                    {district}
                  </div>
                ))}
            </div>
            <button className="close-btn" onClick={() => setShowDistrictModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
