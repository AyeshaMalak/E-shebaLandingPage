export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* Left Side Image */}
        <div className="flex-1">
          <img
            src="/whychooseus.png" // apni image ka path yahan daalo
            alt="Why Choose Us"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-gray-600 mt-4">
            We provide trusted healthcare services with expert doctors and modern facilities.
          </p>

          {/* Points */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✔</span>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
