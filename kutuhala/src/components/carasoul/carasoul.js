import React from "react";
import venturefortreasure from "../../pages/gallery/images/venturefortreasure.png"
import QBEE from "../../pages/gallery/images/QBEE.jpeg";
import ykpr from "../../pages/gallery/images/ykpr.png"
import OIG from "../../pages/Home/OIG.jpg";
import './carasoul.css'

function Carousal() {
  return (
    <>
      <section
        class="carousal"
        style={{ position: "relative", maxWidth: "100vw" }}
      >
        <h1 style={{ textAlign: "center" }}> Recent Events </h1>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                style={{ aspectRatio: "16/9" }}
                class="d-block w-100"
                src={QBEE}
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Quizzy Bee Challenge</h5>
                <p>Date</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                style={{ aspectRatio: "16/9" }}
                class="d-block w-100"
                src={ykpr}
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Yakshaprashne</h5>
                <p>Date</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                style={{ aspectRatio: "16/9" }}
                class="d-block w-100"
                src={venturefortreasure}
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>VENTURE FOR TREASURE</h5>
                <p>Date</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Carousal;
