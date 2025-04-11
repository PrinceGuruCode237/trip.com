import Button from "../ui/Button";

function CTA() {
  return (
    <section className="w-full relative bg-primary h-[80vh] md:h-[80vh]">
      <div className="w-4/5  md:w-1/2 z-[999] mx-auto h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 pb-6  justify-center items-center">
          <h1 className="sm:text-4xl xxs:text-2xl text-center z-[999] md:text-5xl font-bold  text-white">
            Journey to Padar Island
          </h1>
          <p
            className={`xxs:text-sm sm:text-base z-[999] text-center md:text-lg text-gray-200`}
          >
            If you have never visited Padar island I suggest you go here, it
            will be a life time experience that Padar island, Then it is
            recommended that you book.
          </p>
        </div>

        <div className="flex gap-4 my-6">
          <Button title="Book now!" className={`bg-white text-black`} />
          <Button
            title="Read more"
            outline={true}
            className={`border-white text-white`}
          />
        </div>
      </div>

      <div className="absolute w-64 md:w-[500px]  h-80 top-0 z-0">
        <img src="./assets/images/bg_shape_left.png" className="z-0" alt="" />
      </div>
      <div className="absolute w-64 h-80 md:w-[500px] top-0 right-0">
        <img src="./assets/images/bg_shape_right.png" alt="" />
      </div>
    </section>
  );
}

export default CTA;
