import React from "react";
import Carousal from "../../components/carasoul/carasoul";
import "./Home.css";
import home from "./Home.png"
import ebanner from "../../pages/upcomingevent/banner/ebanner.jpeg";
import design from "./design.mp4"
import image from "./design.png"

function Home() {
  return (
    <>
      <section class="base">
        <div class="intro">
          {" "}
          
          <div>
          <h1>
              Introducing <br /> KUTUHULA{" "}
            </h1>
            <h2 class="larger">The official quizzing club of UVCE.
            <br /><br />
            
              We promote quiz culture and inspire you all to be more curious.
              <br /><br />
              We believe in learning and quizzing in a fun and creative way.<br/>
            </h2>
          </div>

          <div><video autoPlay loop muted>
              <source src={design} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
           
           </div>

        </div>
        <div class="howtojoin">
          {" "}
          <div><img src={image} /><h1>
              HOW TO BE A PART<br /> OF THE TEAM ?
            </h1>
           
           </div>
          <div>
          
            <h2 >Quizzing Spirit<br />
            <br /><hr color='white'/><br />
            
              Head the warning : those who use Google to find solutions shall suffer in the depths of hell. 
              <br /><br /><hr color='white'/><br />
              Answer the frequently asked questions <br/>
            </h2>
          </div>

          

        </div>





        <div class="glass-card">
          <img src={ebanner} alt="Upcoming Event" />
          <h2>Upcoming Event</h2>
          <a href="/Events" class="button">
            RSVP
          </a>
        </div>
        <Carousal />
      </section>
    </>
  );
}

export default Home;
