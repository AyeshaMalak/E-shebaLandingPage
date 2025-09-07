import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="bg-blue-600 text-white rounded-xl max-w-4xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Subscribe To Our Newsletter</h2>
        <form className="flex items-center justify-center bg-white rounded-full overflow-hidden p-1 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 text-gray-700 focus:outline-none rounded-full"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-200"
          >
            ➤
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
