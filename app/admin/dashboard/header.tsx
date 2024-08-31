import { Button } from "@/components/ui/button";
import { ArrowUpRight, Bell, Mail, Plus } from "lucide-react";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



interface AdminHeaderProps {

}


const AdminHeader: FC<AdminHeaderProps> = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3"> 
                <Button variant={"subtle"} className="rounded-full">
                    View Website <ArrowUpRight className="ml-2 h-4 w-4 text-blue-700" />
                </Button>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Button variant="outline" className="w-10 rounded-full p-0 scale-125 bg-slate-700 hover:bg-slate-950">
                            <Plus className="h-4 w-4 text-white" />
                            <span className="sr-only">New Post</span>
                        </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>Create Post</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div> 
            <div className="flex flex-row gap-1">
                <Button variant="ghost" className="w-10 rounded-full p-0">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Message</span>
                </Button>
                <Button variant="ghost" className="w-10 rounded-full p-0">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Message</span>
                </Button>
                <Avatar className="ml-6">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default AdminHeader