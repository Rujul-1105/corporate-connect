import React from 'react';
import './Contactus.css';

import Faculty from './components/Faculty';
import OrganizingTeam from './components/OrganizingTeam';
import DFR from './components/DFR';

function ContactPage() {
  return (
    <div className="contact-container">
      <Faculty />
      <OrganizingTeam />
      <DFR />
    </div>
  );
}

export default ContactPage;