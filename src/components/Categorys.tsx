import Category from "./UI/Category";

export default function Categorys() {
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-first-semibold text-customWhite">Cagegories</h1>
      <div className="flex flex-col space-y-3">
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
      </div>
    </div>
  );
}
