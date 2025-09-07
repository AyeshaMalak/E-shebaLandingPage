import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialists from "./components/Specialists";
import WhyChooseUs from "./components/WhyChooseUs";
import FutureHealth from "./components/FutureHealth";
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specialists />
      <WhyChooseUs/>
      <FutureHealth />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
