import React from "react";
import "./gallery.css";
import inquisitive from "./images/inquisitive.png"
import quizindiamoment from "./images/quizindiamoment.png"
import quizzicableme from "./images/quizzicableme.png"
import venturefortreasure from "./images/venturefortreasure.png"
import QBEE from "./images/QBEE.jpeg";
import ykpr from "./images/ykpr.png"
function Gallery() {
  return (
    <div class="background-gallery">
      <header class="app-header">
        <h1>Events Gallery</h1>
      </header>
      <main class="app-main">
        <section class="event-gallery">
        <div class="event-item">
            <img class="eventimage"   src={QBEE} alt="Event 1" />
            <div class="event-info">
              <h2>Quizzy Bee Challenge</h2>
              <p>Date: July 31st, 2023</p>
              <p>Location: Banglore , India</p>
            </div>
          </div>
          <div class="event-item">
            <img class="eventimage"  src={inquisitive} alt="Event 1" />
            <div class="event-info">
              <h2>inQUIZitive</h2>
              <p>Date: August 12, 2022</p>
              <p>Location: FIESTA 22 Banglore , India </p>
            </div>
          </div>
          <div class="event-item">
            <img class="eventimage" src={quizindiamoment} alt="Event 1" />
            <div class="event-info">
              <h2>QUIZ INDIA MOVEMENT</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: Banglore , India</p>
            </div>
          </div>
          <div  class="event-item">
            <img class="eventimage"  src={quizzicableme} alt="Event 1" />
            <div class="event-info">
              <h2>QUIZZICABLE ME!</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: Banglore , India</p>
            </div>
          </div>
          <div class="event-item">
            <img class="eventimage"  src={venturefortreasure} alt="Event 1" />
            <div class="event-info">
              <h2>VENTURE FOR TREASURE</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: Banglore , India</p>
            </div>
          </div>
          <div class="event-item">
            <img class="eventimage"  src={ykpr} alt="Event 1" />
            <div class="event-info">
              <h2>Yakshaprashne</h2>
              <p>Date: November 15, 2022</p>
              <p>Location: Banglore , India</p>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default Gallery;
