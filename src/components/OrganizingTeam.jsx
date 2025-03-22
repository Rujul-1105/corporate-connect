import React from "react";

import Card from "./Card.jsx";
import "./OrganizingTeam.css"

import nikhil from "../assets/contactusimages/nikhil.jpeg"
import hardik from "../assets/contactusimages/hardik.jpeg"
import arpit from "../assets/contactusimages/arpit.jpeg"
import pulkit from "../assets/contactusimages/pulkit.jpeg"

function OrganizingTeam() {
  return (
    <div className="section">
      <div className="heading">Organizing Team</div>
      <div className="organizing-team-images">
        <div className="image-row">
          <Card pic={nikhil} name="Nikhil Garg" phone="+91 6378 010 128" email="2021csb1114@iitrpr.ac.in"  />
          <Card pic={hardik} name="Hardik Ajit" phone="+91 90043 50656" email="2022meb1312@iitrpr.ac.in"  />
        </div>
        <div className="image-row">
          <Card pic={arpit} name="Arpit Vats" phone="+91 8445008606" email="2021eeb1157@iitrpr.ac.in"  />
          <Card pic={pulkit} name="Pulkit Singh" phone="+91 76685 08579" email="2021eeb1198@iitrpr.ac.in"  />
        </div>
      </div>
    </div>
  );
}

export default OrganizingTeam;
