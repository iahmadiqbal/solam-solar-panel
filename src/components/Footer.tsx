import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#F6A235] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg md:text-xl font-semibold text-center md:text-left">
            Smartest Way to Generate Electricity.
          </p>
          <button className="bg-black text-white font-semibold px-6 py-2 ml-4 hover:bg-gray-800 transition">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1A1819] text-white px-6 py-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-y-10 gap-x-8">
          {/* Column 1: Logo + Info */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <span className="text-2xl font-bold leading-none">Solam</span>
            </div>
            <p className="text-sm mb-3">
              We Offer a Wide Range of Quality Solar Panel Installation
              Services.
            </p>
            <p className="text-sm">needhelp@company.com</p>
            <p className="text-sm">(123) 456-7890</p>
          </div>

          {/* Column 2: Explore */}
          <nav className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/ourteam" className="hover:underline">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Services */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Solar Technology</li>
              <li>Solar Installation</li>
              <li>Battery Materials</li>
              <li>Solar Equipment</li>
              <li>Charge Controllers</li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <address className="not-italic flex-1 min-w-[250px]">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm leading-relaxed mb-2">
              60 Brooklyn Golden Street
              <br />
              New York 8800 United States
            </p>
            <div className="flex gap-4 mt-4 text-xl text-white/70">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </address>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} All Rights Reserved by YourCompany.com
        </div>
      </footer>
    </>
  );
};

export default Footer;
