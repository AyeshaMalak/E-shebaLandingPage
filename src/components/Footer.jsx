import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* E-sheba Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">E-sheba</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc risus feugiat lectus risus sed ullamcorper.
          </p>
          <p className="text-sm mt-2">
            Volutpat integer vel. In rhoncus elementum nunc, malesuada mi nec. Nibh erat ut lobortis id semper.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Address</h3>
          <img
            src="/map.png"  
            alt="Map"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-blue-400 pt-4 text-center text-sm">
        © 2022 All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
