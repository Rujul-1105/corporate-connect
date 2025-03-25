import React from 'react';
import logocc from '../assets/logocc.png';
import logoiit from '../assets/logoiit.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <Link to="/">
          <div className="flex items-center">
            <img className="logoccimg" src={logocc} alt="logocc" />
            <img className="logoiitimg topLogo block sm:hidden w-auto" src={logoiit} alt="logoiit" />
          </div>
        </Link>
        <div className='flex flex-row gap-10'>
          <div className="links flex flex-row gap-4">
            <div><Link to="/vc">Visiting companies</Link></div>
            <div><Link to="https://drive.google.com/file/d/1kPFeXRsWo8vE6p54lo-_8Vs3GAVJ95-B/view?usp=drivesdk">Download Brochure</Link></div>
            <div><Link to="/contactus">Contact Us</Link></div>
          </div>
          <Link to="/"><img className='logoiitimg bottomLogo' src={logoiit} alt="logoiit" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
