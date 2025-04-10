import { Link } from "react-scroll";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="z-50   flex mx-6 md:mx-14 py-6 items-center   justify-between">
      <a href="#" className="z-[999]">
        <img
          src="./assets/images/Logo.png"
          width={150}
          alt=""
          className="z-[9999]"
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
        <span className="cursor-pointer md:hidden  z-[999]">
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

      <div className="mobile--nav md:hidden z-[1000] right-0 absolute  bg-white w-[70%] h-screen">
        <ul className="text-neutral-black_500 z-[1002]  text-lg  items-center">
          <li className="px-4 py-2 hover:text-primary">
            <a href="#" className="text-neutral-black_500">
              Home
            </a>
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
    </nav>
  );
};

export default Nav;
