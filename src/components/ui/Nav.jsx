import Button from "./Button";

const Nav = () => {
  return (
    <nav className="z-50  flex mx-6 md:mx-14 py-6 items-center   justify-between">
      <a href="#" className="z-[999]">
        <img
          src="./assets/images/Logo.png"
          width={150}
          alt=""
          className="z-[9999]"
        />
      </a>
      <div className="flex items-center z-[999]  gap-4">
        <span className="cursor-pointer  z-[999]">
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
  );
};

export default Nav;
