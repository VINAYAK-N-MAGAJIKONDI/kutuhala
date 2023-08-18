import React from "react";
import ebanner from "./banner/ebanner.jpeg";
import "./upcomingevent.css";

export default function UEvents() {
  return (
    <section class="uevents">
   
      <img src={ebanner} />

      <h1>
        📅 Reminder: Quizzy Bee Challenge - General Knowledge Quiz 🧠🚀 <br />
        🗓️ Date: July 31st, 2023
        <br />
        🕑 Time: 2:45 PM
        <br />
        📍 Venue: Senate hall
        <br />
        <br />
        👥 Team size: 1-3
        <br />
        👦 Quiz for Juniors 🧒
        <br />
        Others are welcome to spectate and can win candy!
        <br />
        <br />
        🎉 Don't miss this chance to show off your quizzing prowess and have a
        buzzing good time!
        <br />
        📝🔗<a href="/Register" class="underline"> Register here to bee there! </a>🐝
        <br />
        <br />
        For further inquiries, contact:
        <br />
        Sujay Vikram: +91 86182 39664
        <br />
        Nitin Reddy: +91 81236 47783
        <br />
        <br />
        Get ready to join the quizzical minds and hive-five your way to victory!
        🏆🌟
        <br />
      </h1>
      <div id="unique-background-container">
        {/* Animated circles */}
        <div className="unique-circle" id="circle1"></div>
        <div className="unique-circle" id="circle2"></div>
        <div className="unique-circle" id="circle3"></div>
      </div>
    </section>
  );
}
