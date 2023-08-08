import React from "react";
import "./base.css";
import OIG from "./OIG.jpg";

// import Carousel from '../../components/carasoul/carasoul';

// const CARDS = 10;

// const Card = ({ title, content }) => (
//   // The Card component code remains the same as before
//   <div className='card'>
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

function Base() {
  return (
    <>
      <section class="base">
        <h1>
          We are the official quizzing club of UVCE.
          <br />
          <img class="quizz" src={OIG} />
          We promote quiz culture and inspire you all to be more curious
          <br />
          we believe in learning and quizzing in a fun and creative way <br />
          we participate in and also organize quizzes boyh on intercollegiate
          and intracollegiate level
        </h1>{" "}
      </section>

      {/* <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card key={i} title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      ))}
    </Carousel> */}
    </>
  );
}

export default Base;
