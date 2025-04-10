import Destinations from "./components/landing/Destinations";
import Hero from "./components/landing/Hero";
import Tours from "./components/landing/Tours";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";
import Slides from "./components/landing/Slides";

function App() {
  return (
    <main className="">
      <Hero />
      <Destinations />
      <Tours />
      <Slides />

      <section id="testimonails"></section>
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
