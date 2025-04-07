const Button = ({ title = "Button", className }) => {
  return (
    <button
      className={`bg-primary z-[999] hover:bg-[#25450b] transition-colors duration-500 px-6 lg:px-7 lg:py-4 text-base md:text-lg rounded-full text-white cursor-pointer font-medium   py-3 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
