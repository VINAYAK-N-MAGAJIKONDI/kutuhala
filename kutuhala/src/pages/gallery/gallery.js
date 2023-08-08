import React from "react";
import "./gallery.css";
import vinayak from "../../assets/images/vinayak.png";
function Gallery() {
  return (
    <div class="background-gallery">
      <header class="app-header">
        <h1>Events Gallery</h1>
      </header>
      <main class="app-main">
        <section class="event-gallery">
          <div class="event-item">
            <img src={vinayak} alt="Event 1" />
            <div class="event-info">
              <h2>Event 1</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: City, Country</p>
            </div>
          </div>
          <div class="event-item">
            <img src={vinayak} alt="Event 1" />
            <div class="event-info">
              <h2>Event 1</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: City, Country</p>
            </div>
          </div>
          <div class="event-item">
            <img src={vinayak} alt="Event 1" />
            <div class="event-info">
              <h2>Event 1</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: City, Country</p>
            </div>
          </div>
          <div class="event-item">
            <img src={vinayak} alt="Event 1" />
            <div class="event-info">
              <h2>Event 1</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: City, Country</p>
            </div>
          </div>
          <div class="event-item">
            <img src={vinayak} alt="Event 1" />
            <div class="event-info">
              <h2>Event 1</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: City, Country</p>
            </div>
          </div>
          <div class="event-item">
            <img src={vinayak} alt="Event 1" />
            <div class="event-info">
              <h2>Event 1</h2>
              <p>Date: August 12, 2023</p>
              <p>Location: City, Country</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Gallery;
