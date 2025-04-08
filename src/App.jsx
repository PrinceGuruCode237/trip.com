import { useState } from "react";
import Destinations from "./components/landing/Destinations";
import Hero from "./components/landing/Hero";
import Tours from "./components/landing/Tours";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <main className="">
      <Hero />
      <Destinations />
      <Tours />

      <section className="px-6 md:px-14 py-24 min-h-[200vh] bg-secondary">
        <div className="flex items-start">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex flex-col gap-2">
              <p className={`text-base text-gray-100`}>04 days 03 Nights</p>
              <h1 className="text-4xl md:text-5xl font-bold w-1/2 text-white">
                Journey to Padar Island
              </h1>
            </div>
            <p className={`text-base md:text-base text-gray-300`}>
              If you have never visited Padar island I suggest you go here, it
              will be a life time experience that Padar island, Then it is
              recommended that you book.
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <div
              className={`relative w-10 ${
                activeIndex > 0 ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              // onClick={goToPrevSlide}
            >
              <span>
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.2072 14.219C38.7578 8.04951 33.9386 3.23355 27.7681 1.78834C23.3119 0.744621 18.6746 0.746176 14.219 1.79288C8.04955 3.24223 3.23359 8.06142 1.78837 14.2319C0.74466 18.6881 0.746214 23.3254 1.79292 27.781C3.24227 33.9505 8.06145 38.7665 14.2319 40.2117C18.6882 41.2554 23.3255 41.2538 27.781 40.2071C33.9505 38.7578 38.7665 33.9386 40.2117 27.7681C41.2554 23.3119 41.2539 18.6746 40.2072 14.219Z"
                    className="stroke-white"
                    strokeWidth="1.57242"
                  />
                </svg>
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2   ">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M1.2247 6.99705L16.775 7.00226M16.775 7.00226L11.2232 1.44671M16.775 7.00226L11.2195 12.5541"
                    className={`stroke-white`}
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div
              className={` relative w-10`}
              // onClick={goToNextSlide}
            >
              <span>
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.2072 14.219C38.7578 8.04951 33.9386 3.23355 27.7681 1.78834C23.3119 0.744621 18.6746 0.746176 14.219 1.79288C8.04955 3.24223 3.23359 8.06142 1.78837 14.2319C0.74466 18.6881 0.746214 23.3254 1.79292 27.781C3.24227 33.9505 8.06145 38.7665 14.2319 40.2117C18.6882 41.2554 23.3255 41.2538 27.781 40.2071C33.9505 38.7578 38.7665 33.9386 40.2117 27.7681C41.2554 23.3119 41.2539 18.6746 40.2072 14.219Z"
                    className={`stroke-primary`}
                    strokeWidth="1.57242"
                  />
                </svg>
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2   ">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.2247 6.99705L16.775 7.00226M16.775 7.00226L11.2232 1.44671M16.775 7.00226L11.2195 12.5541"
                    className={` stroke-primary`}
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

export default App;
