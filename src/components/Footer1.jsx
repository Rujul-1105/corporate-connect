import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logoiit from '../assets/logoiit.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className='flex flex-row gap-50'>
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={logoiit} alt="IIT Ropar Logo" className="w-64 mb-4 mt-10" />
            <h2 className="text-2xl font-bold text-white mb-2">Indian Institute of Technology Ropar</h2>
            {/* <p className="text-sm mt-2">CDPC</p> */}
            <p className="text-sm">Location : Admin, IIT ROPAR, Rupnagar,Punjab - 140001,India</p>
          </div>

          {/* Contact Information */}
          <div className='flex flex-row gap-50'>
              <div>
              <h3 className="text-lg font-bold text-white">Contact Us</h3>
              <p className="text-sm mt-2">📞 <strong>IIT ROPAR:</strong> +91 22-2576-4889, 2576-7023</p>
              <p className="text-sm">✉ Email: <a href="mailto:dean.acr.office@iitropar.org" className="text-blue-400 hover:underline">dean.acr.office@iitropar.org</a></p>
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-5 mt-10">Faculty In-Charge</h4>
                {/* <img src='./images/tharamani.jpeg' alt="Faculty In-Charge" className="w-32 h-32 rounded-full mb-2" /> */}
                <p className="text-sm">Dr. Tharamani C.N.</p>
                <p className="text-sm">📞 +91 82838 40769</p>
                <p className="text-sm">✉ <a href="mailto:tharamani@iitpr.ac.in" className="text-blue-400 hover:underline">tharamani@iitpr.ac.in</a></p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-bold text-white">Organizers</h4>
              {/* <img src="./images/hardik.jpeg" alt="Organizer" className="w-24 h-24 rounded-full mb-2 mt-6" /> */}
              <p className="text-sm"><strong>Nikhil Garg</strong> - 📞 +91 63780 10128</p>
              <p className="text-sm mb-5">✉ <a href="mailto:2021csb1114@iitrpr.ac.in" className="text-blue-400 hover:underline">2021csb1114@iitrpr.ac.in</a></p>
              {/* <img src="./images/nikhil.jpeg" alt="Organizer" className="w-24 h-24 rounded-full mb-2" /> */}
              <p className="text-sm mt-2"><strong>Hardik Ajit</strong> - 📞 +91 90043 50656</p>
              <p className="text-sm">✉ <a href="mailto:2022meb1312@iitrpr.ac.in" className="text-blue-400 hover:underline">2022meb1312@iitrpr.ac.in</a></p>
            </div>
          </div>
        </div>
      </div>

        {/* Social Media Links */}

        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-500"><FaLinkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-500"><FaTwitter size={20} /></a>
        </div>
      {/* Footer Bottom */}
      <div className="mt-6 text-center text-sm text-gray-500">© 2025 IIT ROPAR. All Rights Reserved.</div>
    </footer>
  );
}
