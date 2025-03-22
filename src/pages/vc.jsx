import React from "react";
import Timeline from "../components/timeline";
import Carousel from "../components/carousel";
import MajorEvents from "../components/majorEvents";
import Footer from "../components/Footer1";
import Slideshow from "../components/CarouselCompany";
import Vct from "../components/vct";
import { Link } from "react-router-dom";

const ConferenceWebsite = () => {
  return (
    <div className="font-sans">
      <div className="grid grid-cols-3 gap-40 w-[60vw] m-auto mt-10 mb-10">
        <Link to="/visiting-profile1">
          <Vct />
        </Link>
        <Link to="/visiting-profile2">
          <Vct />
        </Link>
        <Link to="/visiting-profile3">
          <Vct />
        </Link>
        <Link to="/visiting-profile4">
          <Vct />
        </Link>
        <Link to="/visiting-profile5">
          <Vct />
        </Link>
        <Link to="/visiting-profile6">
          <Vct />
        </Link>
        <Link to="/visiting-profile7">
          <Vct />
        </Link>
        <Link to="/visiting-profile8">
          <Vct />
        </Link>
        <Link to="/visiting-profile9">
          <Vct />
        </Link>
        <Link to="/visiting-profile10">
          <Vct />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ConferenceWebsite;
