import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaTwitter } from "react-icons/fa";
import cdpc from '../assets/logocdpc.png';
import logoiit from '../assets/logoiit.png';
// import css
// import "../Footer1.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 px-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="footerBox max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-140 pl-0 md:pl-20">
          <div>
            <img src={cdpc} alt="IIT Ropar Logo" className="w-40 md:w-52 mb-4 mt-5" />
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">CDPC, IIT Ropar</h2>
            <p className="text-sm">Location: Admin Block, IIT ROPAR, Rupnagar, Punjab - 140001, India</p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mt-5">Contact Us</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Dean CEOA</h4>
                <p className="text-sm">Dr. Sarang P. Gumfekar</p>
                <p className="text-sm">📞 +91 76200 63191</p>
                <p className="text-sm">
                  ✉ <a href="mailto:tharamani@iitpr.ac.in" className="text-blue-400 hover:underline">deanceoa@iitrpr.ac.in</a>
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Faculty In-Charge</h4>
                <p className="text-sm">Dr. Tharamani C.N.</p>
                <p className="text-sm">📞 +91 82838 40769</p>
                <p className="text-sm">
                  ✉ <a href="mailto:tharamani@iitpr.ac.in" className="text-blue-400 hover:underline">chair.cdp@iitpr.ac.in</a>
                </p>
              </div>
            </div>

            <h4 className="text-lg text-white mt-10">Organizers</h4>
            <div className="mt-2 flex flex-col md:flex-row gap-5">
              <div>
                <p className="text-sm mt-1">Nikhil Garg</p>
                <p className="text-sm">📞 +91 63780 10128</p>
                <p className="text-sm mb-5">
                  ✉ <a href="mailto:2021csb1114@iitrpr.ac.in" className="text-blue-400 hover:underline">ug.placement@iitrpr.ac.in</a>
                </p>
              </div>
              <div>
                <p className="text-sm mt-1">Hardik Jain</p>
                <p className="text-sm">📞 +91 90043 50656</p>
                <p className="text-sm">
                  ✉ <a href="mailto:2022meb1312@iitrpr.ac.in" className="text-blue-400 hover:underline">cdpc.outreach@iitrpr.ac.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://in.linkedin.com/school/placementcelliitropar/" className="text-gray-400 hover:text-blue-500">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:ug.placement@iitrpr.ac.in" className="text-gray-400 hover:text-blue-500">
          <FaMailBulk size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500">
          <FaInstagram size={20} />
        </a>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        © 2025 IIT ROPAR. All Rights Reserved.
      </div>
    </footer>
  );
}
