import { CalendarIcon } from "@radix-ui/react-icons"
import { IoSettingsOutline } from "react-icons/io5";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Button } from "@/components/ui/button"

export function AccCard() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>DP</AvatarFallback>
                </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 mt-3">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Debangan Paul Chowdhury</h4>
                        <p className="text-sm">
                            Hunger is all about craving. just try to feed your self with some crazy food.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                                Joined Februray 2022
                            </span>
                        </div>
                        <div className="pt-2">
                            <Button variant="destructive" className="mr-2 hover:bg-red-400">Logout</Button>
                            <Button className="bg-green-600 hover:bg-green-500">
                                <IoSettingsOutline />
                            </Button>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
