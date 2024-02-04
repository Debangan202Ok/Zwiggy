import { Menucard } from "./sub_components/Menucard"

export const Menus = () => {
    return (
        <div className="w-full px-16 border-b-[0.5px] py-2">
            <div className="flex justify-between">
                <Menucard/>
                <Menucard />
                <Menucard />
                <Menucard />
            </div>
        </div>
    )
}