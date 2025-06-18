import Image from "next/image";

export default async function MealPage({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const { mealSlug } = await params;
  return (
    <section id="meal page" className="px-10 md:px-20 pt-8 pb-40">
      <div className="flex flex-col">
        <div className="flex flex-col max-w-6xl w-full mx-auto items-center justify-between space-y-2 md:space-y-0 md:flex-row md:items-stretch">
          <Image
            alt=""
            height={100}
            width={100}
            src={"/images/logo-light.svg"}
          ></Image>
          <button className="px-6 py-3 pb-2 rounded-full bg-customWhite">
            <span className="inline-flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M15 6L9 12L15 18" stroke="#0E1325" strokeWidth="2" />
              </svg>
              <span className="text-second-bold">Back to categories</span>
            </span>
          </button>
        </div>
        <div className="mt-14 max-w-4xl mx-auto flex flex-col items-start">
          <div className="bg-[url('/images/test-food-img.png')] bg-center bg-cover bg-no-repeat overflow-hidden h-[400px] self-stretch mb-8"></div>
          <h1 className="text-first-semibold text-customWhite mb-5">
            Battenberg Cake
          </h1>
          <p className="flex flex-col md:flex-row gap-3 mb-10">
            <button className="py-2 px-6 rounded-full bg-customGray text-customWhite">
              category: <span className="text-second-bold ">Desert</span>
            </button>
            <button className="py-2 px-6 rounded-full bg-customGray text-customWhite">
              area: <span className="text-second-bold">British</span>
            </button>
          </p>

          <p className="mb-4 flex items-center text-second-bold text-customWhite">
            <span className="inline-block h-[32px] w-[16px] bg-customOrange mr-3 rounded-full"></span>
            <span>Ingredients</span>
          </p>
          <ul className="flex flex-col gap-3 text-customWhite mb-10">
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
              <span className="text-second-bold">175g Butter</span>
            </li>
          </ul>
          <p className="mb-4 flex items-center text-second-bold text-customWhite">
            <span className="inline-block h-[32px] w-[16px] bg-customBlue mr-3 rounded-full"></span>
            <span>Instructions</span>
          </p>
          <p className="text-customWhite text-second-medium">
            {`Heat oven to 180C/160C fan/gas 4 and line the base and sides of a
            20cm square tin with baking parchment the easiest way is to cross 2
            x 20cm-long strips over the base. To make the almond sponge, put the
            butter, sugar, flour, ground almonds, baking powder, eggs, vanilla
            and almond extract in a large bowl. Beat with an electric whisk
            until the mix comes together smoothly. Scrape into the tin,
            spreading to the corners, and bake for 25-30 mins when you poke in a
            skewer, it should come out clean. Cool in the tin for 10 mins, then
            transfer to a wire rack to finish cooling while you make the second
            sponge. For the pink sponge, line the tin as above.\n Mix all the
            ingredients together as above, but dont add the almond extract. Fold
            in some pink food colouring. Then scrape it all into the tin and
            bake as before. Cool. To assemble, heat the jam in a small pan until
            runny, then sieve. Barely trim two opposite edges from the almond
            sponge, then well trim a third edge. Roughly measure the height of
            the sponge, then cutting from the well-trimmed edge, use a ruler to
            help you cut 4 slices each the same width as the sponge height. \n
            Discard or nibble leftover sponge. Repeat with pink cake. Take 2 x
            almond slices and 2 x pink slices and trim so they are all the same
            length. Roll out one marzipan block on a surface lightly dusted with
            icing sugar to just over 20cm wide, then keep rolling lengthways
            until the marzipan is roughly 0.5cm thick. Brush with apricot jam,
            then lay a pink and an almond slice side by side at one end of the \n
            marzipan, brushing jam in between to stick sponges, and leaving 4cm
            clear marzipan at the end. Brush more jam on top of the sponges,
            then sandwich remaining 2 slices on top, alternating colours to give
            a checkerboard effect. Trim the marzipan to the length of the cakes.
            Carefully lift up the marzipan and smooth over the cake with your
            hands, but leave a small marzipan fold along the bottom edge before
            you stick it to the first side. Trim opposite side to match size of
            fold, then crimp edges using fingers and thumb or, more simply,
            press with prongs of fork. If you like, mark the 10 slices using the
            prongs of a fork. Assemble second Battenberg and keep in an airtight
            box or well wrapped in cling film for up to 3 days. Can be frozen
            for up to a month.`}
          </p>
        </div>
      </div>
    </section>
  );
}
