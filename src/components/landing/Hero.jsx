import { useState } from "react";
import Button from "../ui/Button";
import Nav from "../ui/Nav";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="hero mb-32 relative lg:min-h-[150vh] min-h-[120vh] w-screen   overflow-hidden">
        <div className="overlay -z-0 pointer-events-none  absolute h-full w-full"></div>
        <div className="overlay--2 -z-1 absolute  w-full"></div>
        <div className="filters flex justify-between  md:px-0  md:w-[80%] z-[9999]  bg-white absolute bottom-0">
          <div
            className="z-[9999]  md:hidden w-[150px]  py-4 flex items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <h3
              className="font-medium  py-2 px-4  border-b-neutral-gray_400"
              style={{ borderBottom: "2px solid #656565" }}
            >
              See more
            </h3>
            <span className=" py-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 9L12 14L7 9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {/* Filters */}
          <div
            className={`form w-[90%] justify-center items-center hidden  md:flex py-4 flex-row overflow-hidden  transition-alls   duration-300`}
            style={{ transitionTimingFunction: "ease-in-out" }}
          >
            <form action="" className="px-4 flex flex-row gap-6">
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor=""
                  className="text-medium text-lg text-neutral-gray_400"
                >
                  Destination
                </label>
                <select
                  name=""
                  id=""
                  className="py-4 px-2 border-b outline-primary border-primary font-bold text-lg"
                >
                  <option value="default" className="text-lg font-normal">
                    All Destination
                  </option>
                  <option value="" className="text-lg font-normal">
                    Lofoten
                  </option>
                  <option value="" className="text-lg font-normal">
                    Lofoten
                  </option>
                  <option value="" className="text-lg font-normal">
                    Lofoten
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor=""
                  className="text-medium text-lg text-neutral-gray_400"
                >
                  Travellers
                </label>
                <select
                  name=""
                  id=""
                  className="py-4 px-2 border-b outline-primary border-primary font-bold text-lg"
                >
                  <option value="default" className="text-lg font-normal">
                    Number of Travellers
                  </option>
                  <option value="" className="text-lg font-normal">
                    1
                  </option>
                  <option value="" className="text-lg font-normal">
                    2
                  </option>
                  <option value="" className="text-lg font-normal">
                    3
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor=""
                  className="text-medium text-lg text-neutral-gray_400"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="font-bold text-lg px-2 py-4 outline-primary  border-b border-primary"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor=""
                  className="text-medium text-lg text-neutral-gray_400"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="font-bold text-lg px-2 py-4 border-b outline-primary border-primary"
                />
              </div>
            </form>
          </div>

          {/* Button */}
          <div className="bg-primary  md:w-[10%] w-[100px] flex flex-col justify-center items-center">
            <span className="relative cursor-pointer">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.2072 14.219C38.7578 8.04951 33.9386 3.23355 27.7681 1.78834C23.3119 0.744621 18.6746 0.746176 14.219 1.79288C8.04955 3.24223 3.23359 8.06142 1.78837 14.2319C0.74466 18.6881 0.746214 23.3254 1.79292 27.781C3.24227 33.9505 8.06145 38.7665 14.2319 40.2117C18.6882 41.2554 23.3255 41.2538 27.781 40.2071C33.9505 38.7578 38.7665 33.9386 40.2117 27.7681C41.2554 23.3119 41.2539 18.6746 40.2072 14.219Z"
                  stroke="white"
                  strokeWidth="1.57242"
                />
              </svg>
              <span className="absolute rotate-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.2247 6.99705L16.775 7.00226M16.775 7.00226L11.2232 1.44671M16.775 7.00226L11.2195 12.5541"
                    stroke="white"
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
        <Nav />
        <div className="mx-6 pb-10    md:mx-14 flex justify-center items-center flex-row  w-full  h-full">
          <div className="flex md:w-[100%] flex-col z-[999]  h-full justify-center gap-4 md:gap-6 text-white">
            <h1 className="text-4xl  z-auto md:text-6xl lg:w-full   font-bold text-white w-full">
              Journey Lofoten island
            </h1>
            <p className="text-gray-100 text-base ">
              Travel is only glamorous in retrospect
            </p>
            <Button className={"w-fit"} title="Book now" />
          </div>

          <div className="flex gap-4 md:w-[20%]  md:items lg:py-10  h-full z-[999]   before:w-[1px] after:w-[1px] after:h-[25%] after:bg-gray-400 before:h-[25%] before:bg-gray-400 flex-col items-center w-1/2">
            <a
              href="#"
              className="p-2 group-hover rounded-full hover:bg-[white] transition-colors duration-300 z-[9999] cursor-pointer bg-[#00000060]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1835 7.29249C10.4211 7.29249 7.3863 10.3273 7.3863 14.0897C7.3863 17.8521 10.4211 20.8869 14.1835 20.8869C17.9459 20.8869 20.9807 17.8521 20.9807 14.0897C20.9807 10.3273 17.9459 7.29249 14.1835 7.29249ZM14.1835 18.5087C11.7521 18.5087 9.76442 16.527 9.76442 14.0897C9.76442 11.6524 11.7462 9.67062 14.1835 9.67062C16.6208 9.67062 18.6025 11.6524 18.6025 14.0897C18.6025 16.527 16.6148 18.5087 14.1835 18.5087ZM22.8441 7.01445C22.8441 7.8959 22.1342 8.59987 21.2587 8.59987C20.3773 8.59987 19.6733 7.88998 19.6733 7.01445C19.6733 6.13892 20.3832 5.42903 21.2587 5.42903C22.1342 5.42903 22.8441 6.13892 22.8441 7.01445ZM27.346 8.62353C27.2454 6.49978 26.7603 4.61858 25.2045 3.06865C23.6546 1.51873 21.7734 1.03364 19.6496 0.927157C17.4608 0.802927 10.9002 0.802927 8.71142 0.927157C6.59359 1.02772 4.71238 1.51282 3.15654 3.06274C1.60071 4.61266 1.12153 6.49387 1.01505 8.61762C0.890817 10.8064 0.890817 17.367 1.01505 19.5558C1.11562 21.6796 1.60071 23.5608 3.15654 25.1107C4.71238 26.6606 6.58767 27.1457 8.71142 27.2522C10.9002 27.3764 17.4608 27.3764 19.6496 27.2522C21.7734 27.1516 23.6546 26.6665 25.2045 25.1107C26.7544 23.5608 27.2395 21.6796 27.346 19.5558C27.4702 17.367 27.4702 10.8124 27.346 8.62353ZM24.5183 21.9044C24.0568 23.0639 23.1636 23.9571 21.9982 24.4245C20.253 25.1166 16.112 24.9569 14.1835 24.9569C12.255 24.9569 8.10802 25.1107 6.36879 24.4245C5.20931 23.963 4.31603 23.0698 3.84869 21.9044C3.15654 20.1592 3.31627 16.0182 3.31627 14.0897C3.31627 12.1611 3.16246 8.01421 3.84869 6.27498C4.31011 5.1155 5.20339 4.22222 6.36879 3.75488C8.11393 3.06274 12.255 3.22246 14.1835 3.22246C16.112 3.22246 20.2589 3.06865 21.9982 3.75488C23.1577 4.21631 24.0509 5.10958 24.5183 6.27498C25.2104 8.02013 25.0507 12.1611 25.0507 14.0897C25.0507 16.0182 25.2104 20.1651 24.5183 21.9044Z"
                  className="hover:fill-black fill-white"
                />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 rounded-full z-[9999] cursor-pointer  bg-[#00000060]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.7757 15.1808C29.7757 7.07624 23.2092 0.509766 15.1046 0.509766C7.00006 0.509766 0.433594 7.07624 0.433594 15.1808C0.433594 22.5033 5.79858 28.5728 12.8123 29.6744V19.4218H9.08536V15.1808H12.8123V11.9484C12.8123 8.27181 15.0011 6.24093 18.3535 6.24093C19.9591 6.24093 21.638 6.52726 21.638 6.52726V10.1359H19.7875C17.9655 10.1359 17.397 11.2669 17.397 12.427V15.1808H21.4658L20.8151 19.4218H17.397V29.6744C24.4107 28.5728 29.7757 22.5033 29.7757 15.1808Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 rounded-full z-[9999] cursor-pointer bg-[#00000060]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.542 8.35311C15.5227 8.65061 15.5031 8.94848 15.485 9.24634C15.4571 9.69912 15.4237 10.1497 15.3094 10.5923C15.0554 11.5694 14.48 12.2173 13.4616 12.3922C13.0593 12.4615 12.6457 12.4764 12.2364 12.4902C10.9002 12.5355 9.56331 12.6088 8.2271 12.599C6.57706 12.5849 4.92739 12.5047 3.27845 12.4361C2.78503 12.4154 2.30359 12.307 1.87766 12.0283C1.35776 11.6884 1.08747 11.1866 0.93836 10.6025C0.754418 9.8798 0.751878 9.13859 0.728659 8.40209C0.681857 6.94398 0.678954 5.48514 0.824075 4.03211C0.882487 3.448 1.03124 2.87912 1.40456 2.40385C1.77172 1.93619 2.25897 1.63869 2.84961 1.58101C3.62239 1.50591 4.39915 1.4533 5.17519 1.43843C6.73525 1.40831 8.29313 1.38945 9.85174 1.40614C10.9561 1.41775 12.0609 1.48269 13.1638 1.54799C13.8752 1.59008 14.4782 1.88214 14.9118 2.46661C15.1657 2.81092 15.3047 3.2129 15.3602 3.63013C15.4328 4.18377 15.4643 4.74321 15.5133 5.29903C15.5238 5.41875 15.5325 5.53848 15.5423 5.65784L15.542 8.35311ZM8.44696 2.22172C7.081 2.25474 6.04302 2.27251 5.00576 2.30734C4.37412 2.32838 3.74175 2.35922 3.11228 2.41618C2.50567 2.4706 2.06886 2.76919 1.86061 3.37254C1.71222 3.80318 1.66433 4.24581 1.63857 4.69459C1.54678 6.22769 1.54824 7.76494 1.64293 9.29786C1.67248 9.69149 1.72885 10.0827 1.81163 10.4686C1.86315 10.7226 1.96945 10.962 2.16827 11.1507C2.42695 11.3967 2.74404 11.5019 3.08471 11.5349C3.59264 11.5842 4.10383 11.6271 4.61466 11.6477C6.95039 11.741 9.28613 11.7631 11.6219 11.6525C12.1809 11.626 12.7415 11.6006 13.2966 11.5353C13.8074 11.475 14.1673 11.1917 14.3596 10.6939C14.541 10.2223 14.5856 9.72959 14.6135 9.23291C14.6892 7.91662 14.6975 6.5973 14.6382 5.28016C14.6121 4.68843 14.6161 4.09125 14.4438 3.51476C14.3531 3.21109 14.2348 2.92846 13.9678 2.72529C13.6517 2.48512 13.2871 2.40784 12.9084 2.39224C11.3131 2.3273 9.71641 2.2707 8.44696 2.22317V2.22172Z"
                  fill="white"
                />
                <path
                  d="M6.24078 6.81705C6.24078 6.25688 6.24078 5.69671 6.24078 5.13654C6.24078 4.57637 6.70227 4.29774 7.19315 4.56513C8.2431 5.13727 9.29052 5.71485 10.3408 6.287C10.5712 6.41253 10.7192 6.59103 10.7171 6.85841C10.7149 7.1258 10.5614 7.30103 10.3314 7.42439C9.28507 7.98383 8.23984 8.54497 7.19568 9.1078C6.70118 9.37265 6.2426 9.09982 6.24115 8.5411C6.23933 7.96642 6.24078 7.39174 6.24078 6.81705ZM9.55899 6.85079L7.12058 5.51604V8.16233L9.55899 6.85079Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div
        className={`form md:hidden ${
          isOpen ? "max-h-[500px] py-10" : "max-h-0 py-0"
        } overflow-hidden z-[9999]  absolute left-0 top-[120vh] transition-alls   duration-300  w-2/3 bg-white shadow-sm`}
        style={{ transitionTimingFunction: "ease-in-out" }}
      >
        <form action="" className="px-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor=""
              className="text-medium text-lg text-neutral-gray_400"
            >
              Destination
            </label>
            <select
              name=""
              id=""
              className="py-4 px-2 border-b outline-primary border-primary font-bold text-lg"
            >
              <option value="default" className="text-lg font-normal">
                All Destination
              </option>
              <option value="" className="text-lg font-normal">
                Lofoten
              </option>
              <option value="" className="text-lg font-normal">
                Lofoten
              </option>
              <option value="" className="text-lg font-normal">
                Lofoten
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2 ">
            <label
              htmlFor=""
              className="text-medium text-lg text-neutral-gray_400"
            >
              Travellers
            </label>
            <select
              name=""
              id=""
              className="py-4 px-2 border-b outline-primary border-primary font-bold text-lg"
            >
              <option value="default" className="text-lg font-normal">
                Number of Travellers
              </option>
              <option value="" className="text-lg font-normal">
                1
              </option>
              <option value="" className="text-lg font-normal">
                2
              </option>
              <option value="" className="text-lg font-normal">
                3
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2 ">
            <label
              htmlFor=""
              className="text-medium text-lg text-neutral-gray_400"
            >
              Start Date
            </label>
            <input
              type="date"
              name=""
              id=""
              className="font-bold text-lg px-2 py-4 outline-primary  border-b border-primary"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor=""
              className="text-medium text-lg text-neutral-gray_400"
            >
              End Date
            </label>
            <input
              type="date"
              name=""
              id=""
              className="font-bold text-lg px-2 py-4 border-b outline-primary border-primary"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Hero;
