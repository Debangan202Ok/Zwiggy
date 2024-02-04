import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BsCart4 } from "react-icons/bs";


export function CartSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <BsCart4 />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>
                    <SheetDescription>
                        Are You Hungry? Wanna Eat Something! Go order & Add to Cart Your Favourite Food.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 text-center">
                    <span>Nothing In Your Cart</span>
                </div>
            </SheetContent>
        </Sheet>
    )
}
