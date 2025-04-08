import Button from "./Button";

function Destination({
  src = "./assets/images/feature_1.png",
  title,
  description,
  className,
  position,
}) {
  return (
    <div
      className={`flex flex-col md:gap-24 gap-4  md:flex-row md:justify-center items-center md:h-[500px] ${className}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 w-fit">
          <h1 className="text-3xl md:text-4xl font-semibold ">{title}</h1>
          <p className="text-base font-normal w-2/3 inline md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex gap-4 my-6">
          <Button title="Book now" />
          <Button title="Read more" outline={true} />
        </div>
      </div>
      <div className="w-full md:w-[100%] h-[500px]">
        <img
          src={src}
          alt=""
          className="object-cover h-full w-full aspect-[16/9]"
        />
      </div>
    </div>
  );
}

export default Destination;
