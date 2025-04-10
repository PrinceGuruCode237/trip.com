function Header({ heading, subheading, className }) {
  return (
    <div className={`flex  flex-col gap-4 w-1/2 md:w-[40%] mb-14 ${className}`}>
      <h1 className="text-3xl md:text-4xl font-bold w-full">{heading}</h1>
      <p
        className={`text-lg  ${
          className ? "text-gray-300" : "text-neutral-gray_400"
        }`}
      >
        {subheading}
      </p>
    </div>
  );
}

export default Header;
