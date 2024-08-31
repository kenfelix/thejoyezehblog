import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image";



interface PostProps {
    image: StaticImageData
    title: string
    description: string

}


const Post: FC<PostProps> = ({image, title, description}) => {
    return (
        <Card className="border-none shadow-md w-full p-3 flex flex-row ">
            <div className="w-[30%] h-[90px] rounded-lg">
                <Image src={image} alt={""} className="h-full w-full object-cover rounded-lg"/>
            </div>
            <CardHeader className="py-2 gap-1 w-[70%] pr-0">
                <CardTitle className="text-sm">{title}</CardTitle>
                <CardDescription className="truncate w-[100px] p-0 m-0 inline-block text-xs text-gray-500">{ description }</CardDescription>
            </CardHeader>
        </Card>

    )
}

export default Post