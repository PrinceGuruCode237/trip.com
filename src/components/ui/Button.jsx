const Button = ({ title = "Button", className, outline = false }) => {
  return (
    <button
      className={`${
        outline
          ? "border border-neutral-gray_500 hover:bg-black hover:text-white text-black"
          : "bg-primary hover:bg-[#25450b]"
      } z-[999]  font-semibold xxs:truncate   hover:scale-105 transition-all duration-200 px-6 lg:px-7 lg:py-4 xxs:text-sm xs:text-base md:text-lg rounded-full  cursor-pointer    py-3 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
