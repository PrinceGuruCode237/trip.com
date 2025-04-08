import Tour from "../ui/Tour";

function Tours() {
  return (
    <section className="mx-4 md:mx-14">
      <div className="py-4 border-b border-neutral-gray_300">
        <h3 className="text-lg font-medium text-neutral-black_500">
          Upcoming Tour 2023
        </h3>
      </div>

      <div className="flex flex-col gap-10">
        <Tour
          duration={"04 days 03 Nights"}
          name={"Labuan Bajo Tour"}
          description={`This 4 days 3 Nights Sumba island Trip packages is ready to go
                every day. Starting from west Subma to east Sumba. Thn it is
                recommended that book.`}
        />

        {/* Tour 2 */}
        <Tour
          bg={"bg-primary text-white"}
          duration={"Discover Raja Ampat"}
          name={"Labuan Bajo Tour"}
          description={`When you hear the word Raja Ampat, what comes to your mind? of course avery claming place where the expense of blue sea green trees.`}
        />

        {/* Tour 3 */}
        <Tour
          duration={"04 days 03 Nights"}
          name={"Journey to Philippines Island"}
          description={`Ifyou havenever visited Philippines island I suggest you go here, it will be a lifetime experience that Philippines island.`}
        />
      </div>
    </section>
  );
}

export default Tours;
