export default function SearchBar() {
  return (
    <div className="flex justify-between self-stretch items-center gap-3">
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
        ></input>
      </div>
      <button className="shrink-0 rounded-full w-[181px] h-[48px] bg-customWhite px-6 py-3 cursor-pointer hover:ring-2 ring-customOrange transition ease-in-out">
        <div className="flex gap-2 items-center">
          <p className="shrink-0">
            Sort by: <span className="font-bold">Name</span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M18 9L12 15L6 9" stroke="#0E1325" strokeWidth="2" />
          </svg>
        </div>
      </button>
    </div>
  );
}
