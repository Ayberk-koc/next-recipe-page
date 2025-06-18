import Image from "next/image";

export default function Category() {
  return (
    <div className="w-full lg:w-[260px] relative h-[55px] overflow-hidden shrink-0 bg-customOrange rounded-xl border flex items-center px-12">
      <Image
        alt=""
        height={100}
        width={100}
        src={"/images/test-category.png"}
        className="absolute -left-13"
      ></Image>
      <h2 className="text-second-bold">Desert</h2>
    </div>
  );
}
