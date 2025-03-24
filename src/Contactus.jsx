import React from 'react';
import './Contactus.css';

import Faculty from './components/Faculty';
import OrganizingTeam from './components/OrganizingTeam';
import DFR from './components/DFR';
import Footer from './components/Footer1.jsx';

function ContactPage() {
  return (
    <div>
      <div className='bd11'>
      <div className='contact-container'>
      <Faculty />
      <DFR />
      <OrganizingTeam />

      </div>

      <Footer/>
      </div>
      <div className="bd1">
  OPEN THE WEBSITE IN FULLSCREEN ON LAPTOP
</div>
    </div>
  );
}

export default ContactPage;