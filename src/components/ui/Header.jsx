function Header({ heading, subheading }) {
  return (
    <div className="flex  flex-col gap-4 w-1/2 md:w-[40%] mb-14">
      <h1 className="text-3xl md:text-4xl font-bold w-full">{heading}</h1>
      <p className="text-lg text-neutral-gray_400">{subheading}</p>
    </div>
  );
}

export default Header;
