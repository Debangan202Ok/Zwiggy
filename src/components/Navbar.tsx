import { Input } from "@/components/ui/input"
import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AccCard } from "./AccHover";


const Navbar = () => {
    return (
        <div className="flex justify-between px-12  items-center py-5 cursor-pointer border-b-[0.5px]">
            <div><span className="font-bold text-xl">Zwiggy</span></div>
            <div className="relative">
                <Input type="search" placeholder="Search Resturant Name" className="w-[250px]" />
                <CiSearch className="absolute top-[10px] right-2 " />
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="text-3xl mr-4 " ><BsCart4 /></li>
                    <li>
                        <AccCard />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;