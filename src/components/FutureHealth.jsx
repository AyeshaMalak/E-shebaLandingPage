export default function FutureHealth() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* Left Side Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            The <span className="text-blue-600">Future</span> <br />
            of Quality Health
          </h2>

          <p className="text-gray-600 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum 
            volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. 
            Nibh est sit lobortis id semper.
          </p>

          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum 
            volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. 
            Nibh est sit lobortis id semper.
          </p>

          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nec risus feugiat lectus risus sed ullamcorper. sed. Nibh est sit 
            lobortis id semper.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-1">
          <img
            src="/future-health.png" // 👈 apni image ka naam yahan do
            alt="Future of Health"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
