import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[url('/images/hero-image-sm.jpg')] relative w-full h-[420px] bg-cover bg-[position:45%] bg-no-repeat rounded-lg">
      <Image
        alt=""
        height={200}
        width={280}
        src={"/images/hero-text.png"}
        className="absolute right-8 top-14 md:2-[385px] md:h-[299px] md:right-32 md:top-20 lg:right-72 xl:right-[380px]"
      ></Image>
    </div>
  );
}
