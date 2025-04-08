const Button = ({ title = "Button", className, outline = false }) => {
  return (
    <button
      className={`${
        outline
          ? "border border-neutral-gray_400 text-neutral-gray_400 hover:text-black"
          : "bg-primary hover:bg-[#25450b]"
      } z-[999]  font-semibold  hover:scale-105 transition-all duration-200 px-6 lg:px-7 lg:py-4 text-base md:text-lg rounded-full text-white cursor-pointer    py-3 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
