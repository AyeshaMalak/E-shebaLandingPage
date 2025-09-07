import React from "react";

export default function Specialists() {
  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Consulting <span className="text-blue-600">Specialists</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow rounded-2xl text-center border hover:shadow-lg transition">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mx-auto">
            <img src="/Vector (1).png" alt="Covid-19 Test" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold text-lg mt-4">Covid-19 Test</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Card 2 (Active) */}
        <div className="p-6 bg-blue-600 text-white shadow rounded-2xl text-center border hover:shadow-lg transition">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 mx-auto">
            <img src="/Vector.png" alt="Heart Lungs" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold text-lg mt-4">Heart Lungs</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow rounded-2xl text-center border hover:shadow-lg transition">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mx-auto">
            <img src="/Vector (2).png" alt="Suppliment" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold text-lg mt-4">Supplement</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white shadow rounded-2xl text-center border hover:shadow-lg transition">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mx-auto">
            <img src="/Vector (3).png" alt="Mental Health" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold text-lg mt-4">Mental Health</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
