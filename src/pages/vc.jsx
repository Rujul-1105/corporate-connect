import React from "react";
import Timeline from "../components/timeline";
import Carousel from "../components/carousel";
import MajorEvents from "../components/majorEvents";
import Footer from "../components/Footer1";
import Slideshow from "../components/CarouselCompany";
import Vct from "../components/vct";
import { Link } from "react-router-dom";
import i1 from "../assets/vc-images/PallaviSaha.jpg"
import i2 from "../assets/vc-images/mehul-gupta.jpg"
import i3 from "../assets/vc-images/mitali.jpg"
import i4 from "../assets/vc-images/Yadav.jpg"
import i5 from  "../../public/images/backdrop_c1.png"
import i6 from "../../public/images/backdrop_c1.png"
import i7 from "../../public/images/backdrop_c1.png"
import i8 from "../../public/images/backdrop_c1.png"
import i9 from "../../public/images/backdrop_c1.png"
import i10 from "../../public/images/backdrop_c1.png"


const ConferenceWebsite = () => {
  return (
    <div className="font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        <Link to="/visiting-profile1">
          <Vct pic={i1} c_name="RigBetel Labs" desig="Co-Founder and CEO" desc="RigBetel Labs is a leading robotics and automation company based in Pune, India." />
        </Link>
        <Link to="/visiting-profile2">
          <Vct pic={i2} c_name="PwC India" desig="Director" desc="PwC India is a professional services firm offering services in assurance, advisory and tax to clients..." />
        </Link>
        <Link to="/visiting-profile3">
          <Vct pic={i3} c_name="Commonwealth Bank" desig="Assistant Vice President - Data Science" desc="Commonwealth Bank is a major financial institution providing a wide range of financial services." />
        </Link>
        <Link to="/visiting-profile4">
          <Vct pic={i4} c_name="NXP Semiconductors" desig="Head of the India Innovation Ecosystem" desc="NXP Semiconductors is a global leader in secure connectivity solutions for embedded applications." />
        </Link>
        <Link to="/visiting-profile5">
          <Vct pic={i5} c_name="will be updated soon" desig="" desc=""/>
        </Link>
        <Link to="/visiting-profile6">
          <Vct pic={i6} c_name="will be updated soon" desig="" desc=""/>
        </Link>
        <Link to="/visiting-profile7">
          <Vct pic={i7} c_name="will be updated soon" desig="" desc=""/>
        </Link>
        <Link to="/visiting-profile8">
          <Vct pic={i8} c_name="will be updated soon" desig="" desc=""/>
        </Link>
        <Link to="/visiting-profile9">
          <Vct pic={i9} c_name="will be updated soon" desig="" desc=""/>
        </Link>
        <Link to="/visiting-profile10">
          <Vct pic={i10} c_name="will be updated soon" desig="" desc=""/>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ConferenceWebsite;
