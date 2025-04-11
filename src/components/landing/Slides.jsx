import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../ui/Header";

function Slides() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();
  return (
    <section className="xxs:px-4 xs:px-6  md:px-14 py-24 min-h-[200vh] bg-secondary">
      <div className="flex items-start w-full">
        <div className="flex flex-col gap-4 justify-center w-full">
          <div className="flex flex-col gap-2 w-full">
            <p className={`text-base text-gray-100`}>04 days 03 Nights</p>
            <h1 className="xs:text-4xl xxs:text-2xl md:text-5xl font-bold xxs:w-full md:w-1/2 text-white">
              Journey to Padar Island
            </h1>
          </div>
          <div className={`text-base block md:text-lg w-full  text-gray-300`}>
            If you have never visited Padar island I suggest you go here, it
            will be a life time experience that Padar island, Then it is
            recommended that you book.
          </div>
        </div>

        <div className="gap-4 items-center hidden sm:flex">
          <div
            className={`prev relative w-10 cursor-pointer`}
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
                  className="stroke-primary"
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
                  className={`stroke-primary`}
                  strokeWidth="1.57242"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div
            className={`next relative w-10 cursor-pointer`}
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

      {/* Swiper */}
      <div className="swiper">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={width > 780 ? 3 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={{ el: "pagination", clickable: true }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-slide shadow-none place-items-center my-10 flex justify-center items-center"
        >
          {/* Slider 1 */}
          <SwiperSlide className=" place-items-center shadow-none">
            {({ isActive }) => (
              <div
                className={`h-[350px] w-[550px] md:w-[700px] md:h-[450px]  overflow-hidden relative bg-secondary after:absolute after:w-full after:h-[80%] after:bg-gradient-to-t ${
                  !isActive && "after:hidden"
                }  after:from-[#000] after:to-[#00000020] after:blur  after:-bottom-5`}
              >
                {isActive && (
                  <img
                    src="https://images.unsplash.com/photo-1645045454110-11c78c8d6efd?q=80&w=1609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
                {!isActive && (
                  <div className="absolute top-4 left-4 h-16 w-16 flex justify-center items-center border-2 border-gray-300 rounded-full">
                    <p className="text-4xl text-gray-300 font-medium">01</p>
                  </div>
                )}
                <div className="absolute w-[270px] md:w-full bottom-8 gap-2 flex justify-between left-[25%]  mx-auto  xxs:flex-col md:flex-row md:left-8  z-[999]">
                  <div className="">
                    <p className="text-base bg-primary w-fit px-2 py-1 rounded-full  font-normal text-gray-100 mb-2">
                      Day 03
                    </p>
                    <h1 className="text-white mb-2  w-full text-2xl font-bold">
                      Pacuan Kuda
                    </h1>
                    <p className="text-lg font-normal text-gray-100">
                      2023 Padar island
                    </p>
                  </div>
                  <div className="">
                    <p className="text-gray-300 text-base xxs:text-sm font-medium">
                      Pacuan Kuda is a horse racing event that takes place in
                      Indonesia. It is a popular sport in the country,
                      attracting many spectators and participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className=" place-items-center shadow-none">
            {({ isActive }) => (
              <div
                className={`h-[350px] w-[500px] md:w-[700px] md:h-[450px]  overflow-hidden relative bg-secondary after:absolute after:w-full after:h-[80%] after:bg-gradient-to-t ${
                  !isActive && "after:hidden"
                }  after:from-[#000] after:to-[#00000020] after:blur  after:-bottom-5`}
              >
                {isActive && (
                  <img
                    src="https://images.unsplash.com/photo-1720553751739-36b6b8cb8c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpY3ljbGUlMjB0b3VyfGVufDB8fDB8fHww"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
                {!isActive && (
                  <div className="absolute top-4 left-4 h-16 w-16 flex justify-center items-center border-2 border-gray-300 rounded-full">
                    <p className="text-4xl text-gray-300 font-medium">02</p>
                  </div>
                )}
                <div className="absolute bottom-8 gap-2 flex justify-between left-8  z-[999]">
                  <div className="w-full">
                    <p className="text-base bg-primary w-fit px-2 py-1 rounded-full  font-normal text-gray-100 mb-2">
                      Day 03
                    </p>
                    <h1 className="text-white mb-2  w-full text-2xl font-bold">
                      Pacuan Kuda
                    </h1>
                    <p className="text-lg font-normal text-gray-100">
                      2023 Padar island
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-300 text-base font-medium">
                      Pacuan Kuda is a horse racing event that takes place in
                      Indonesia. It is a popular sport in the country,
                      attracting many spectators and participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className=" place-items-center shadow-none">
            {({ isActive }) => (
              <div
                className={`h-[350px] w-[500px] md:w-[700px] md:h-[450px]  overflow-hidden relative bg-secondary after:absolute after:w-full after:h-[80%] after:bg-gradient-to-t ${
                  !isActive && "after:hidden"
                }  after:from-[#000] after:to-[#00000020] after:blur  after:-bottom-5`}
              >
                {isActive && (
                  <img
                    src="https://images.unsplash.com/photo-1688977431265-681bd2e0615c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpY3ljbGUlMjB0b3VyfGVufDB8fDB8fHww"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
                {!isActive && (
                  <div className="absolute top-4 left-4 h-16 w-16 flex justify-center items-center border-2 border-gray-300 rounded-full">
                    <p className="text-4xl text-gray-300 font-medium">03</p>
                  </div>
                )}
                <div className="absolute bottom-8 gap-2 flex justify-between left-8  z-[999]">
                  <div className="w-full">
                    <p className="text-base bg-primary w-fit px-2 py-1 rounded-full  font-normal text-gray-100 mb-2">
                      Day 03
                    </p>
                    <h1 className="text-white mb-2  w-full text-2xl font-bold">
                      Pacuan Kuda
                    </h1>
                    <p className="text-lg font-normal text-gray-100">
                      2023 Padar island
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-300 text-base font-medium">
                      Pacuan Kuda is a horse racing event that takes place in
                      Indonesia. It is a popular sport in the country,
                      attracting many spectators and participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className=" place-items-center shadow-none">
            {({ isActive }) => (
              <div
                className={`h-[350px] w-[500px] md:w-[700px] md:h-[450px]  overflow-hidden relative bg-secondary after:absolute after:w-full after:h-[80%] after:bg-gradient-to-t ${
                  !isActive && "after:hidden"
                }  after:from-[#000] after:to-[#00000020] after:blur  after:-bottom-5`}
              >
                {isActive && (
                  <img
                    src="https://media.istockphoto.com/id/1133672137/photo/group-of-athletes-mountain-biking-on-forest-trail.webp?a=1&b=1&s=612x612&w=0&k=20&c=3_TNwDpG303J29rdVprwt-3mnQU-MYxUpK-cKQz-dP4="
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
                {!isActive && (
                  <div className="absolute top-4 left-4 h-16 w-16 flex justify-center items-center border-2 border-gray-300 rounded-full">
                    <p className="text-4xl text-gray-300 font-medium">04</p>
                  </div>
                )}
                <div className="absolute bottom-8 gap-2 flex justify-between left-8  z-[999]">
                  <div className="w-full">
                    <p className="text-base bg-primary w-fit px-2 py-1 rounded-full  font-normal text-gray-100 mb-2">
                      Day 03
                    </p>
                    <h1 className="text-white mb-2  w-full text-2xl font-bold">
                      Pacuan Kuda
                    </h1>
                    <p className="text-lg font-normal text-gray-100">
                      2023 Padar island
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-300 text-base font-medium">
                      Pacuan Kuda is a horse racing event that takes place in
                      Indonesia. It is a popular sport in the country,
                      attracting many spectators and participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className=" place-items-center shadow-none">
            {({ isActive }) => (
              <div
                className={`h-[350px] w-[500px] md:w-[700px] md:h-[450px]  overflow-hidden relative bg-secondary after:absolute after:w-full after:h-[80%] after:bg-gradient-to-t ${
                  !isActive && "after:hidden"
                }  after:from-[#000] after:to-[#00000020] after:blur  after:-bottom-5`}
              >
                {isActive && (
                  <img
                    src="https://media.istockphoto.com/id/470167712/photo/hes-enjoying-the-ride.webp?a=1&b=1&s=612x612&w=0&k=20&c=lWUUNEO-IcQYt8kbLhTtW7-b7_FWFaDv1QN6XFbioqI="
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
                {!isActive && (
                  <div className="absolute top-4 left-4 h-16 w-16 flex justify-center items-center border-2 border-gray-300 rounded-full">
                    <p className="text-4xl text-gray-300 font-medium">05</p>
                  </div>
                )}
                <div className="absolute bottom-8 gap-2 flex justify-between left-8  z-[999]">
                  <div className="w-full">
                    <p className="text-base bg-primary w-fit px-2 py-1 rounded-full  font-normal text-gray-100 mb-2">
                      Day 03
                    </p>
                    <h1 className="text-white mb-2  w-full text-2xl font-bold">
                      Pacuan Kuda
                    </h1>
                    <p className="text-lg font-normal text-gray-100">
                      2023 Padar island
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-300 text-base font-medium">
                      Pacuan Kuda is a horse racing event that takes place in
                      Indonesia. It is a popular sport in the country,
                      attracting many spectators and participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className=" place-items-center shadow-none">
            {({ isActive }) => (
              <div
                className={`h-[350px] w-[500px] md:w-[700px] md:h-[450px]  overflow-hidden relative bg-secondary after:absolute after:w-full after:h-[80%] after:bg-gradient-to-t ${
                  !isActive && "after:hidden"
                }  after:from-[#000] after:to-[#00000020] after:blur  after:-bottom-5`}
              >
                {isActive && (
                  <img
                    src="https://media.istockphoto.com/id/102285244/photo/racing-cyclists-on-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=SeTBqUtRS7_yDHHg0yT8x0TjGyESNmpF4K24bDYM7qI="
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
                {!isActive && (
                  <div className="absolute top-4 left-4 h-16 w-16 flex justify-center items-center border-2 border-gray-300 rounded-full">
                    <p className="text-4xl text-gray-300 font-medium">06</p>
                  </div>
                )}
                <div className="absolute bottom-8 gap-2 flex justify-between left-8  z-[999]">
                  <div className="w-full">
                    <p className="text-base bg-primary w-fit px-2 py-1 rounded-full  font-normal text-gray-100 mb-2">
                      Day 03
                    </p>
                    <h1 className="text-white mb-2  w-full text-2xl font-bold">
                      Pacuan Kuda
                    </h1>
                    <p className="text-lg font-normal text-gray-100">
                      2023 Padar island
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-300 text-base font-medium">
                      Pacuan Kuda is a horse racing event that takes place in
                      Indonesia. It is a popular sport in the country,
                      attracting many spectators and participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className=" place-items-center shadow-none">
            {({ isActive }) => (
              <div
                className={`h-[350px] w-[500px] md:w-[700px] md:h-[450px]  overflow-hidden relative bg-secondary after:absolute after:w-full after:h-[80%] after:bg-gradient-to-t ${
                  !isActive && "after:hidden"
                }  after:from-[#000] after:to-[#00000020] after:blur  after:-bottom-5`}
              >
                {isActive && (
                  <img
                    src="https://media.istockphoto.com/id/1135508703/photo/cycling-race.jpg?s=612x612&w=0&k=20&c=DiKukVOyvLGwLAzbVtl_yFsAP_ANfikclENIv24u3n8="
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
                {!isActive && (
                  <div className="absolute top-4 left-4 h-16 w-16 flex justify-center items-center border-2 border-gray-300 rounded-full">
                    <p className="text-4xl text-gray-300 font-medium">07</p>
                  </div>
                )}
                <div className="absolute bottom-8 gap-2 flex justify-between left-8  z-[999]">
                  <div className="w-full">
                    <p className="text-base bg-primary w-fit px-2 py-1 rounded-full  font-normal text-gray-100 mb-2">
                      Day 03
                    </p>
                    <h1 className="text-white mb-2  w-full text-2xl font-bold">
                      Pacuan Kuda
                    </h1>
                    <p className="text-lg font-normal text-gray-100">
                      2023 Padar island
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-gray-300 text-base font-medium">
                      Pacuan Kuda is a horse racing event that takes place in
                      Indonesia. It is a popular sport in the country,
                      attracting many spectators and participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="testimonials my-24">
        <Header
          className={"text-white w-full md:w-[50%]"}
          heading={"What Our Customers Say About Tripy.com?"}
          subheading={`If you don't trust us enough, take a look at the reviews from some of our users below. We hope it can help you in making your decision.`}
        />
        <Swiper
          grabCursor={true}
          // spaceBetween={
          //   width < 780 ? 200 : width > 1024 ? -150 : width < 640 ? 200 : 200
          // }
          spaceBetween={width < 640 ? 150 : -150}
          slidesPerView={width > 780 ? 2.5 : 1.5}
          loop={true}
          className="mr-24"
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div className="bg-secondary_80 w-[450px] py-10 px-4 shadow-lg flex text-white flex-col gap-6">
              <h4 className="text-lg  px-2 py-4 border-b border-neutral-gray_500">
                Tripy.com is very to use the customer service is friendly and
                very responsive when there are questions and complaints from
                customers. I am very satisfied using tripy.com to book my dream
                island.
              </h4>
              <p className="text-gray-300">Michelle James</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary_80 w-[450px] py-10 px-4 shadow-lg flex text-white flex-col gap-6">
              <h4 className="text-lg  px-2 py-4 border-b border-neutral-gray_500">
                Tripy.com is very to use the customer service is friendly and
                very responsive when there are questions and complaints from
                customers. I am very satisfied using tripy.com to book my dream
                island.
              </h4>
              <p className="text-gray-300">Michelle James</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary_80 w-[450px] py-10 px-4 shadow-lg flex text-white flex-col gap-6">
              <h4 className="text-lg  px-2 py-4 border-b border-neutral-gray_500">
                Tripy.com is very to use the customer service is friendly and
                very responsive when there are questions and complaints from
                customers. I am very satisfied using tripy.com to book my dream
                island.
              </h4>
              <p className="text-gray-300">Michelle James</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary_80 w-[450px] py-10 px-4 shadow-lg flex text-white flex-col gap-6">
              <h4 className="text-lg  px-2 py-4 border-b border-neutral-gray_500">
                Tripy.com is very to use the customer service is friendly and
                very responsive when there are questions and complaints from
                customers. I am very satisfied using tripy.com to book my dream
                island.
              </h4>
              <p className="text-gray-300">Michelle James</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-secondary_80 w-[450px] py-10 px-4 shadow-lg flex text-white flex-col gap-6">
              <h4 className="text-lg  px-2 py-4 border-b border-neutral-gray_500">
                Tripy.com is very to use the customer service is friendly and
                very responsive when there are questions and complaints from
                customers. I am very satisfied using tripy.com to book my dream
                island.
              </h4>
              <p className="text-gray-300">Michelle James</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="gap-4 my-10 hidden md:flex  items-end justify-end">
          <div
            className={`prev-slide relative w-10 cursor-pointer`}
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
                  className="stroke-primary"
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
                  className={`stroke-primary`}
                  strokeWidth="1.57242"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div
            className={`next-slide relative w-10 cursor-pointer`}
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
  );
}

export default Slides;
