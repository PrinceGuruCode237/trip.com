import Button from "./Button";

function Tour({ duration, name, description, bg }) {
  return (
    <div
      className={`w-full flex flex-col gap-6 md:flex-row md:justify-between py-24 px-8 md:py-24 ${bg}`}
    >
      <div className="flex flex-col gap-4 justify-center md:w-1/2">
        <div className="flex flex-col gap-2">
          <p className={`text-base  ${bg ? "text-gray-100" : "text-gray-500"}`}>
            {duration}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold w-1/2">{name}</h1>
        </div>
      </div>
      <div className="md:w-1/2">
        <p
          className={`text-base md:text-base  ${
            bg ? "text-gray-100" : "text-neutral-black_500"
          } md:w-[80%]`}
        >
          {description}
        </p>
        <div className="flex gap-4 my-6">
          <Button
            title="Book now!"
            className={`${
              bg ? "bg-white  text-black hover:bg-white" : "text-white"
            }`}
          />
          <Button
            title="Read more"
            outline={true}
            className={`${bg && "border-white text-white"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Tour;
