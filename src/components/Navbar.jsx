import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-50 shadow-md relative">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold">
        <span className="text-black">E</span>
        <span className="text-blue-600">-sheba</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
        <li className="hover:text-blue-600 cursor-pointer transition">About</li>
        <li className="hover:text-blue-600 cursor-pointer transition">Application</li>
        <li className="hover:text-blue-600 cursor-pointer transition">History</li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-blue-100 transition">
          Log in
        </button>
        <button className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
          Sign up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-50 shadow-md md:hidden flex flex-col items-center py-6 gap-6 z-50 animate-slideDown">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-600 cursor-pointer transition">About</li>
            <li className="hover:text-blue-600 cursor-pointer transition">Application</li>
            <li className="hover:text-blue-600 cursor-pointer transition">History</li>
          </ul>
          <div className="flex flex-col gap-3 w-3/4">
            <button className="px-5 py-2 rounded-full border border-gray-300 hover:bg-blue-100 transition">
              Log in
            </button>
            <button className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
