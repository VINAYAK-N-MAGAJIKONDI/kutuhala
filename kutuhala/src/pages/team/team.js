import React from 'react'
import './team.css';
import abhay from "../../assets/images/abhay.png"
import nitin from "../../assets/images/nitin.png"
import saadhvi from "../../assets/images/saadhvi.png"
import sujay from "../../assets/images/sujay.png"
import sujayb from "../../assets/images/sujayb.png"
import vinayak from "../../assets/images/vinayak.png"


function Team() {
  return (
    <>
    
   

	<section class="team">
		<div class="center">
			<h1>Our Team</h1>
		</div>

		<div class="team-content">
			<div class="box">
			<img class='team-image' src={nitin}/>
				<h3>NITIN </h3>
				<h5>Core Team</h5>
				<div class="icons">
					<a href="#"><i class="ri-linkedin-fill"></i></a>
					<a href="#"><i class="ri-facebook-box-fill"></i></a>
					<a href="#"><i class="ri-instagram-fill"></i></a>
				</div>
			</div>

			<div class="box">
			<img class='team-image' src={sujay}/>
				<h3>SUJAY V</h3>
				<h5>Core Team</h5>
				<div class="icons">
				<a href="#"><i class="ri-linkedin-fill"></i></a>

					<a href="#"><i class="ri-facebook-box-fill"></i></a>
					<a href="#"><i class="ri-instagram-fill"></i></a>
				</div>
			</div>

			{/* <div class="box">
			<img class='team-image' src={vinayak}/>
				<h3>VINAYAK </h3>
				<h5>Core Team</h5>
				<div class="icons">
					<a href="#"><i class="ri-linkedin-fill"></i></a>
					<a href="#"><i class="ri-facebook-box-fill"></i></a>
					<a href="#"><i class="ri-instagram-fill"></i></a>
				</div>
			</div> */}

			<div class="box">
			<img class='team-image' src={saadhvi}/>
				<h3>SAADHVI</h3>
				<h5>Core Team</h5>
				<div class="icons">
					<a href="#"><i class="ri-linkedin-fill"></i></a>
					<a href="#"><i class="ri-facebook-box-fill"></i></a>
					<a href="#"><i class="ri-instagram-fill"></i></a>
				</div>
			</div>

			<div class="box">
			<img class='team-image' src={abhay}/>
				<h3>ABHAY PAI</h3>
				<h5>Core Team</h5>
				<div class="icons">
					<a href="#"><i class="ri-linkedin-fill"></i></a>
					<a href="#"><i class="ri-facebook-box-fill"></i></a>
					<a href="#"><i class="ri-instagram-fill"></i></a>
				</div>
			</div>


			<div class="box">
			<img class='team-image' src={sujayb}/>
				<h3>SUJAY B</h3>
				<h5>Core Team</h5>
				<div class="icons">
					<a href="#"><i class="ri-linkedin-fill"></i></a>
					<a href="#"><i class="ri-facebook-box-fill"></i></a>
					<a href="#"><i class="ri-instagram-fill"></i></a>
				</div>
			</div>

		</div>
	</section>


    </>
    
  );
}
export default Team;