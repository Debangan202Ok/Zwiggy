import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import SearchBar from "./subcomponents/SearchBar.jsx";

const Navabr = () => {
  return (
    <>
      <div className="flex px-[50px] shadow-md justify-between sticky py-4 items-center cursor-pointer">
        <div>
          <span className="text-2xl font-bold">Zwiggy</span>
        </div>
        <SearchBar rs={"md"} vis={"hidden"} />
        <div className="flex items-end text-[25px]">
          <div className="flex mx-5 md:mx-5">
            <p className="mr-2 text-[15px] self-end font-bold hidden md:block ">
              Cart
            </p>
            <BsCart4 className="text-[25px]" />
          </div>
          <div className="flex items-center">
            <div className="mr-2 font-bold leading-[15px] hidden md:block">
              <p className="text-[10px]">Hello,</p>
              <p className="text-[15px]">Debangan</p>
            </div>
            <FaRegUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navabr;
