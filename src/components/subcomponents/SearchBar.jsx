import { IoSearch } from "react-icons/io5";

const SearchBar = ({rs,vis}) => {
  return (
    <div className={`${vis} ${rs+":block"} w-[350px]  rounded overflow-hidden border-[0.5px] border-slate-900 relative`}>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search Restaurant"
        className="w-full p-2"
      />
      <IoSearch className="text-[20px] absolute top-[10px] right-2" />
    </div>
  );
};

export default SearchBar;
