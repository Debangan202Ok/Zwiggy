
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function Menucard({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[300px]", className)} {...props}>
            <CardContent className="grid gap-4">
                <img src="" alt="" />
                <CardDescription>
                    <div>
                        <h1>Product Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti!</p>
                        <div className="flex justify-between">
                            <h3>10K+ Ratings</h3>
                            <h3>4.4</h3>
                        </div>
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    Explore
                </Button>
            </CardFooter>
        </Card>
    )
}
