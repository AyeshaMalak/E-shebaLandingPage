import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-blue-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What <span className="text-blue-600">Our Member’s</span><br />
            Saying About Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
          </p>
          <div className="flex items-center mt-6">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="Ellipse 12.png" alt="avatar1" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="Ellipse 11.png" alt="avatar2" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="Ellipse 7.png" alt="avatar3" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="Ellipse 9.png" alt="avatar4" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="Ellipse 8.png" alt="avatar5" />
            </div>
            <span className="ml-4 text-sm text-gray-600">100+ Reviews</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 rounded-full mr-3" src="Ellipse 10.png" alt="Jane Cooper" />
            <div>
              <p className="font-semibold text-gray-900">Jane Cooper</p>
              <p className="text-sm text-gray-500">12/4/21</p>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <span className="text-yellow-400 text-xl">★★★★★</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
