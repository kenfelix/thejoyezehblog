"use client"


import { FC } from "react";
import Image from "next/image";
import { LayoutDashboard, Edit2, Mail, LogOut, Heart, UserCog } from "lucide-react";
import logo from "../public/logo.png"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAmp } from "next/amp";



interface SideBarProps {

}


const SideBar: FC<SideBarProps> = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col h-full items-center justify-between">
            <div className="">
                <Image src={logo} alt={"Logo"} className="h-full w-full rounded-full"/>
            </div>
            <div className="flex flex-col gap-7">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger onClick={() => {router.push("/admin/dashboard")}}>
                            <Button variant="ghost" className="w-10 rounded-full p-0 hover:bg-blue-700 hover:text-white">
                                <LayoutDashboard className="h-5 w-5" />
                                <span className="sr-only">Dashboard</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                        <p>Dashboard</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger onClick={() => { router.push("/admin/dashboard/post") }}>
                            <Button variant="ghost" className="w-10 rounded-full p-0 hover:bg-blue-700 hover:text-white">
                                <Edit2 className="h-5 w-5" />
                                <span className="sr-only">Blog Posts</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                        <p>Blog Posts</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger onClick={() => { router.push("/admin/dashboard/card-posts") }}>
                            <Button variant="ghost" className="w-10 rounded-full p-0 hover:bg-blue-700 hover:text-white">
                                <Heart className="h-5 w-5" />
                                <span className="sr-only">Cards</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                        <p>Cards</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger onClick={() => { router.push("/admin/dashboard/messages") }}>
                            <Button variant="ghost" className="w-10 rounded-full p-0 hover:bg-blue-700 hover:text-white">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Message</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                        <p>Messages</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost" className="w-10 rounded-full p-0 hover:bg-blue-700 hover:text-white">
                                <UserCog className="h-5 w-5" />
                                <span className="sr-only">Profile Settings</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                        <p>Profile Settings</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="flex flex-col gap-10">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger onClick={() => { router.push("/admin/login") }}>
                            <Button variant="ghost" className="w-10 rounded-full p-0 hover:bg-blue-700 hover:text-white">
                                <LogOut className="h-5 w-5" />
                                <span className="sr-only">Logout</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white">
                        <p>Logout</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>

    )
}

export default SideBar