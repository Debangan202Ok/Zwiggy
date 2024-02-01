import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const Navabr = () => {
  return (
    <>
      <div className="flex px-[50px] shadow-md justify-between sticky py-4 items-center">
        <div>
          <span className="text-2xl font-bold">Zwiggy</span>
        </div>
        <div className="w-[350px] bg-sky-100  rounded overflow-hidden border-[0.5px] border-slate-900">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Restaurant"
            className="w-full p-2"
          />
        </div>
        <div className="flex items-end text-[25px]">
          <div className="flex items-end mx-5">
            <span className="mr-2 text-[15px] font-bold">Cart</span>
            <BsCart4 />
          </div>
          <div className="flex items-center">
            <div className="mr-2 font-bold leading-[15px]">
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
