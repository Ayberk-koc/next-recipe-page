import { useState } from "react";

export default function SearchBar({
  onChangeSortingKey,
  onChangeSearchTerm,
  searchTerm,
  sortingKey,
}: {
  onChangeSortingKey: (value: "name" | "id") => void;
  onChangeSearchTerm: (value: string) => void;
  searchTerm: string;
  sortingKey: "name" | "id";
}) {
  const [activeDropDown, setActiveDropDown] = useState<boolean>(false);

  function handleToggleDropDown() {
    setActiveDropDown((prevState) => !prevState);
  }

  function handleChangeSortingKey(value: "name" | "id") {
    onChangeSortingKey(value);
    handleToggleDropDown();
  }

  return (
    <div className="flex justify-between self-stretch items-center gap-3 relative">
      <div className="flex shrink w-[384px] items-center gap-3 border-2 border-solid rounded-[50px] border-customGray shadow-lg pl-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="11" cy="11" r="7" stroke="#394150" strokeWidth="2" />
          <path
            d="M20 20L17 17"
            stroke="#394150"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          className="text-customWhite placeholder:text-second-regular w-full py-3 focus:outline-none"
          placeholder="Search recipes"
          value={searchTerm}
          onChange={(e) => onChangeSearchTerm(e.target.value)}
        ></input>
      </div>
      <button
        onClick={handleToggleDropDown}
        className="shrink-0 rounded-full w-[181px] h-[48px] bg-customWhite px-6 py-3 cursor-pointer hover:ring-2 ring-customOrange transition ease-in-out"
      >
        <div className="flex gap-2 items-center">
          <p className="shrink-0">
            Sort by: <span className="font-bold capitalize">{sortingKey}</span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`transform ${
              activeDropDown ? "rotate-180" : " "
            } transition ease-in-out duration-300`}
          >
            <path d="M18 9L12 15L6 9" stroke="#0E1325" strokeWidth="2" />
          </svg>
        </div>
      </button>
      <div
        className={`absolute border border-customGray bg-customWhite right-0 rounded-lg top-[53px] w-[181] z-10 ${
          activeDropDown ? "flex" : "hidden"
        } flex-col`}
      >
        <p className="text-customBlack text-second-regular px-3 py-2">
          Sort by:
        </p>
        <hr className="text-customGray/80"></hr>
        <ul className="flex flex-col py-2 px-1 space-y-1">
          <li
            onClick={() => handleChangeSortingKey("name")}
            className="px-2 hover:bg-gray-400 rounded-md cursor-pointer flex items-center space-x-2.5"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                sortingKey === "name" ? "bg-customBlack" : ""
              }`}
            ></span>
            <span className="relative bottom-[2px] font-semibold">Name</span>
          </li>
          <li
            onClick={() => handleChangeSortingKey("id")}
            className="px-2 hover:bg-gray-400 rounded-md cursor-pointer flex items-center space-x-2.5"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                sortingKey === "id" ? "bg-customBlack" : ""
              }`}
            ></span>
            <span className="relative bottom-[2px] font-semibold">Id</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
