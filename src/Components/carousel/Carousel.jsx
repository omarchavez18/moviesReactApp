import React from "react";
import Image from "./Image";
import Button from "../NavBar/Button";

function Carousel() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="https://media.istockphoto.com/id/1293741276/photo/majestic-view-of-the-k2-peak.jpg?b=1&s=170667a&w=0&k=20&c=Zls4snzMqeupClx7hQRIqbBanjnEUO_kw4Cf8e7OM2o="
              className="d-block w-100"
              alt="K2"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://c4.wallpaperflare.com/wallpaper/564/174/495/himalaya-nepal-asia-pokhara-wallpaper-preview.jpg"
              className="d-block w-100"
              alt="Annapurna"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://viajes.nationalgeographic.com.es/medio/2018/10/30/cho-oyu_e35b898f_1500x907.jpg"
              className="d-block w-100"
              alt="Everest"
            />
          </div>
        </div>
        <Button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
