import FoodCart from "./UI/FoodCart";
import SearchBar from "./UI/SearchBar";

export default function Meals() {
  return (
    <div className="flex flex-col space-y-10 flex-1">
      <SearchBar></SearchBar>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FoodCart></FoodCart>
        <FoodCart></FoodCart>
        <FoodCart></FoodCart>
        <FoodCart></FoodCart>
        <FoodCart></FoodCart>
        <FoodCart></FoodCart>
      </div>
    </div>
  );
}
