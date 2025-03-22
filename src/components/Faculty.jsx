import React from 'react';

import tharavi from "../assets/contactusimages/tharamani.jpeg"
import Sarang from "../assets/contactusimages/Sarang.jpg"

import "./Faculty.css"
import Card from "./Card.jsx"

function Faculty() {
  return (
    <div className="section">
      {/* <div className='heading'>Faculty</div> */}
      <div className="faculty-images">
        <Card pic={Sarang} designation="Dean CEOA" name="Dr. Sarang Gumfekar" phone="+91 76200 63191" email="deanceoa@iitrpr.ac.in" />
        <Card pic={tharavi} designation="Faculty Incharge" name="Dr. Tharamani C.N." phone="+91 82838 40769" email="chair.cdp@iitrpr.ac.in" />
      </div>
    </div>
  );
}

export default Faculty;
