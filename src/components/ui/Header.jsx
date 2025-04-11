function Header({ heading, subheading, className }) {
  return (
    <div
      className={`flex  flex-col gap-4 xxs:w-full xs:w-full md:w-1/2 mb-14 ${className}`}
    >
      <h1 className="text-3xl md:text-4xl font-bold md:w-full  ">{heading}</h1>
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
