"use client";

import Categorys from "@/components/Categorys";
import Hero from "@/components/Hero";
import Meals from "@/components/Meals";

export default function Home() {
  return (
    <>
      <section id="hero" className="p-3">
        <Hero></Hero>
      </section>
      <section
        id="main"
        className="px-3 md:px-10 lg:px-18 flex flex-col lg:flex-row gap-8 mt-5 pb-20"
      >
        <Categorys></Categorys>
        <Meals></Meals>
      </section>
    </>
  );
}
