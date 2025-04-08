import Destination from "../ui/Destination";
import Header from "../ui/Header";

function Destinations() {
  return (
    <section className="mx-6 md:px-14 mb-32 md:mb-44">
      <Header
        heading={"Where do you want to go"}
        subheading={
          "Explore destinations, places, and unforgettable experiences"
        }
      />

      <div className="flex flex-col gap-24">
        <Destination
          title={"Bali and Lebongan"}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            perferendis. Quibusdam nemo tenetur in repudiandae quia minima modi
            consectetur.`}
        />
        <Destination
          src="./assets/images/feature_2.png"
          title={"Journey to Padar Island"}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            perferendis. Quibusdam nemo tenetur in repudiandae quia minima modi
            consectetur.`}
          className={"md:flex-row-reverse justify-between"}
        />
      </div>
    </section>
  );
}

export default Destinations;
