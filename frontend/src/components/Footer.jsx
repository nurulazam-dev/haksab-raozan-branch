import {
  FaFacebook,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import brandlogo from "../assets/images/logo/HAKSAB_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Organization Info */}
        <div>
          <div className="flex items-center justify-between gap-4">
            {" "}
            <img src={brandlogo} alt="HAKSAB Logo" className="w-16 h-16" />
            <h2 className="text-2xl font-bold text-white">
              HAKSAB – Raozan Branch
            </h2>
          </div>
          <h1 className="mt-3 text-sm leading-6 text-yellow-600">
            Hazrat Abul Khair Sultanpury (RH.) Association Bangladesh (HAKSAB) –
            Raozan Branch.
          </h1>
          <p>Non-political and religious social welfare organization.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a href="/members" className="hover:text-white">
                Members
              </a>
            </li>
            <li>
              <a href="/finance" className="hover:text-white">
                Finance
              </a>
            </li>
            <li>
              <a href="/notices" className="hover:text-white">
                Notices
              </a>
            </li>
            <li>
              <a href="/reports" className="hover:text-white">
                Reports
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Raozan, Chattogram, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" />
              <span>haksab.raozanbranch@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" />
              <span>info@haksab.org</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 bg-yellow-700 transition"
            >
              <TfiFacebook size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 bg-blue-600 transition"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 bg-red-600 transition"
            >
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HAKSAB – Raozan Branch. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
