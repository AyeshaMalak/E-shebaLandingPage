import React from "react";
import { Search, User, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-blue-50 relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 pt-8 md:pt-12 relative z-20">
        
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left relative z-20 md:pr-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Find & Search Your <span className="text-blue-600">Favourite</span> Doctor
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sem velit viverra amet faucibus.
          </p>

          {/* Search Bar */}
          <div className="mt-5 w-full max-w-md mx-auto md:mx-0">
            <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-xl overflow-hidden">
              
              {/* Input 1 */}
              <div className="flex items-center px-3 border-b sm:border-b-0 sm:border-r">
                <User className="text-gray-400 w-4 h-4 mr-2" />
                <input
                  type="text"
                  placeholder="Doctor's Name"
                  className="py-2 w-full outline-none text-gray-600 text-sm sm:text-base"
                />
              </div>

              {/* Input 2 */}
              <div className="flex items-center px-3">
                <MapPin className="text-gray-400 w-4 h-4 mr-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="py-2 w-full outline-none text-gray-600 text-sm sm:text-base"
                />
              </div>

              {/* Button */}
              <button className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition w-full sm:w-auto">
                <Search size={18} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
          {/* Ellipse Background - Desktop only */}
          <img
            src="/ellipse.png"
            alt="Ellipse Background"
            className="hidden md:block absolute bottom-0 right-0 w-[500px] h-auto -z-10"
          />

          {/* Doctor Image */}
          <img
            src="/doctor.png"
            alt="Doctor"
            className="w-64 sm:w-80 md:w-auto max-h-[650px] h-auto relative z-20 mb-0 md:-mb-10"
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-8 sm:gap-24 bg-blue-600 text-white py-4 px-6 relative z-10">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">24/7</h2>
          <p className="text-xs sm:text-sm md:text-base">Online Support</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">100+</h2>
          <p className="text-xs sm:text-sm md:text-base">Doctors</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">1M+</h2>
          <p className="text-xs sm:text-sm md:text-base">Active Patients</p>
        </div>
      </div>
    </section>
  );
}
