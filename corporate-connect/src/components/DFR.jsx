import React from "react";

import "./DFR.css";
import Card from "./Card.jsx";

import sukrit from "../assets/contactusimages/sukrit.jpeg"
import brijesh from "../assets/contactusimages/brijesh.png"
import padhee from "../assets/contactusimages/padhee.jpeg"
import Arghya from "../assets/contactusimages/Arghya.jpg"
import rahultm from "../assets/contactusimages/rahultm.jpeg"
import Indramani from "../assets/contactusimages/Indramani-Dhada.png"
import prince from "../assets/contactusimages/Prince-Singh-11.png"
import bidhan from "../assets/contactusimages/bidhan.jpeg"
import hari from "../assets/contactusimages/hari-vansh.jpg"
import mukesh from "../assets/contactusimages/mukesh.png"
import anupam from "../assets/contactusimages/anupam.jpg"
import Bodhisatwa from "../assets/contactusimages/Bodhisatwa.jpg"
import dhiraj from "../assets/contactusimages/dhiraj.jpg"

function DFR() {
  return (
    <div className="section">
      <div className="heading">Department Faculty Representative</div>
      <div className="dfr-images">
        <div className="image-row">
          <Card pic={sukrit} name="Dr. Sukrit Gupta" phone="Computer Science and Engineering" email="sukrit.gupta@iitrpr.ac.in"  />
          <Card pic={brijesh} name="Dr. Brijesh Kumbhani" phone="Electrical Engineering" email="Brijesh@iitrpr.ac.in"  />
          <Card pic={padhee} name="Dr. S.S.Padhee" phone="Mechanical Engineering" email="sspadhee@iitrpr.ac.in"  />
        </div>
        <div className="image-row">
          <Card pic={Arghya} name="Dr. Arghya Banerjee" phone="Chemical Engineering" email="arghyab@iitrpr.ac.in"  />
          <Card pic={rahultm} name="Dr. Rahul T.M." phone="Civil Engineering" email="tm.rahul@iitrpr.ac.in"  />
          <Card pic={Indramani} name="Dr. Indramani Dhada" phone="Civil Engineering" email="idhada@iitrpr.ac.in"  />
        </div>
        <div className="image-row">
          <Card pic={prince} name="Dr. Prince Kumar Singh" phone="Metallurgy and Materials engineering" email="princeks@iitrpr.ac.in"  />
          <Card pic={dhiraj} name="Dr. Dhiraj K.Mahajan" phone="MSDSM" email="dhiraj.mahajan@iitrpr.ac.in"  />
          <Card pic={hari} name="Dr. Hari vansh rai Mittal" phone="Mathematics and computing" email="hvrmittal@iitrpr.ac.in"  />
        </div>
        <div className="image-row">
          <Card pic={mukesh} name="Dr. Mukesh Kumar" phone="Physics" email="mkumar@iitrpr.ac.in"  />
          <Card pic={anupam} name="Dr. Anupam Bandyopadhyay" phone="Chemistry" email="anupamba@iitrpr.ac.in"  />
          <Card pic={Bodhisatwa} name="Dr. Bodhisatwa Das" phone="Biomedical Engineering" email="bodhisatwa.das@iitrpr.ac.in"  />
        </div>
      </div>
    </div>
  );
}

export default DFR;
