export default function FoodCart() {
  return (
    <div className="flex flex-col p-2 gap-2.5 flex-1 bg-customGray border border-solid rounded-xl">
      <div className="h-[180px] self-stretch rounded-lg bg-[url('/images/test-food-img.png')] bg-cover bg-no-repeat bg-center"></div>
      <h2 className="text-customWhite text-second-medium self-stretch">
        Banana Pancakes
      </h2>
    </div>
  );
}
