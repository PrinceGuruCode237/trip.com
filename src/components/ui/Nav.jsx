import { Link } from "react-scroll";
import Button from "./Button";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="z-50   flex  mx-4 xs:mx-6 md:mx-14 py-6 items-center   justify-between">
        <a href="#" className="z-[999]">
          <img
            src="./assets/images/Logo.png"
            alt=""
            className="z-[9999] w-[100px] md:w-[150px]"
          />
        </a>
        <ul className="text-white z-[9999] text-lg  items-center gap-8 font-medium hidden md:flex">
          <li className="px-4 py-2 hover:text-primary">
            <a href="#">Home</a>
          </li>

          <li className="px-4 py-2 hover:text-primary">
            <a href="">About</a>
          </li>

          <Link
            className="px-4 py-2 hover:text-primary cursor-pointer"
            to="tours"
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <p>Tours</p>
          </Link>

          <li className="px-4 py-2 hover:text-primary">
            <a href="">Services</a>
          </li>

          <li className="px-4 py-2 hover:text-primary">
            <a href="">Blog</a>
          </li>
        </ul>
        <div className="flex items-center z-[999]  gap-4">
          <span
            className="cursor-pointer  md:hidden  z-[999]"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.9246 2L26 2M25.9994 12.5L2 12.5M26 23L15.4578 23"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div className=" z-[9909]">
            <Button title="Register" />
          </div>
        </div>
      </nav>
      <div
        className={`backdrop w-1/2 h-screen transition-all top-0 left-0 absolute bg-[#00000050] z-[100000] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={`absolute bg-white w-1/2 duration-300  right-0 h-screen top-0 z-[9999] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transitionProperty: "transform",
          transitionTimingFunction: "ease-in-out",
          transformOrigin: "right",
        }}
      >
        <div
          className="absolute top-8 right-8 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 1.95449L1.04551 24M23.0455 23.9544L1 2"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <ul className="flex flex-col w-full h-full justify-center items-center gap-6">
          <li className="px-4 py-2 hover:text-primary">
            <a href="#">Home</a>
          </li>

          <li className="px-4 py-2 hover:text-primary">
            <a href="">About</a>
          </li>

          <Link
            className="px-4 py-2 hover:text-primary cursor-pointer"
            to="tours"
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <p>Tours</p>
          </Link>

          <li className="px-4 py-2 hover:text-primary">
            <a href="">Services</a>
          </li>

          <li className="px-4 py-2 hover:text-primary">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
