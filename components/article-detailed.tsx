"use client"

import { FC, useEffect } from "react";
import { useRef } from 'react';
import { Badge } from "@/components/ui/badge"
import { StaticImageData } from "next/image";
import { UserIcon, Clock, MessageCircle, Share2, Facebook, Twitter, Instagram, User, Reply, ThumbsUp} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Typhography } from "@/constants/typography";
import { Articles } from "@/constants";



export type ArticleDetailedType = {
  id: number
  slug: string
  date: string
  title: string
  image: StaticImageData
  description: string
}

interface ArticleDetailedProps {
    article: ArticleDetailedType
}
 
const ArticleDetailed: FC<ArticleDetailedProps> = ({ article }) => {
    const myRef = useRef<HTMLDivElement>(null);

    const scrollToMyRef = () => {
        if (myRef.current !== null) {
            const topOffset = myRef.current.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo(0, topOffset);
        }
    };


    return ( 
        <div className="flex lg:flex-row p-[20px] sm:p-[60px] gap-4">
            {/* main */}
            <div className="flex flex-col gap-[20px] w-full lg:w-[70%]">
                <div className="flex flex-col gap-[20px] w-full p-[20px] bg-slate-50 ring-[1px] rounded-lg ring-slate-200 dark:bg-slate-900">
                <Badge className="bg-slate-400 w-fit">Badge</Badge>
                <h3 className="text-[20px] sm:text-[30px] font-bold">{article.title}</h3>
                <div className="flex text-[12px] sm:text-[14px] gap-3">
                    <p className="flex items-center gap-1">
                        <span><UserIcon  className="w-[14px]"/></span>Joy Ezeh
                    </p>
                    <p className="flex items-center gap-1">
                        <span><Clock  className="w-[14px]"/></span>1 week agao
                    </p>
                    <p className="flex items-center gap-1 cursor-pointer">
                            <span><MessageCircle className="w-[14px]" onClick={scrollToMyRef} /></span>0
                    </p>
                </div>
                <div className="w-full h-[200px] sm:w-[400px] sm:h-[300px]">
                    <Image src={article.image} alt={""} className="w-full h-full object-cover"/>
                </div>
                <div className="text-[16px] sm:text-[20px]">
                    {article.description}
                </div>
                <div className="block mb-[50px]">
                    <Popover>
                        <PopoverTrigger>
                            <Button className="flex text-[16px] sm:text-[20px] items-center gap-1">
                                Share this post <span><Share2  className="w-[20px] ml-1"/></span>
                                    </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className=" flex flex-col bg-white gap-3">
                            <p className="flex text-[12px] sm:text-[14px] items-center gap-1 cursor-pointer">
                                <span><Facebook  className="w-[12px]"/></span> Facebook
                            </p>
                            <p className="flex text-[12px] sm:text-[14px] items-center gap-1 cursor-pointer">
                                <span><Twitter  className="w-[12px]"/></span> Twitter
                            </p>
                            <p className="flex text-[12px] sm:text-[14px] items-center gap-1 cursor-pointer">
                                <span><Instagram  className="w-[12px]"/></span> Instagram
                            </p>
                         </PopoverContent>
                    </Popover>
                </div>
                
                <Card className="border-none sm:border">
                    <CardHeader className="px-0 sm:p-6">
                        <CardTitle className="text-[25px] sm:text-[35px]">Comments</CardTitle>
                        <CardDescription className="text-[18px]">Your email address will not be published. Required field are marked *</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 sm:p-6">
                        <div className="flex flex-col gap-6" id="comments" ref={myRef}>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message">Your reply</Label>
                                <Textarea placeholder="Type your message here." id="message" className="h-[200px] bg-white"/>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="name" id="name" placeholder="Enter Name" className="bg-white"/>
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" placeholder="Enter Email Address" className="bg-white"/>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="px-0 sm:p-6">
                        <Button>POST COMMENT</Button>
                    </CardFooter>
                
                <div className="flex lg:hidden w-full h-[200px] bg-slate-50 items-center justify-center">
                    Ads
                </div>
                        
                </Card>
                    {/* comments */}
                    <React.Fragment >
                        <div className="flex gap-1">
                            <div className="bg-slate-400 h-fit">
                                <User className="text-white h-10 w-10"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className={Typhography.subtle}><span className="font-bold"> kenfelix </span>1 hour ago </p>
                                <p className="text-lg sm:text-xl">wondeful article. it really help me understand the topic better</p>
                                <div className="flex flex-row mt-5 gap-5 items-center">
                                    <div className="flex flex-row gap-1 items-center">
                                        <Reply color="gray" />
                                        <p>Reply</p>
                                    </div>
                                    <div className="flex bg-white rounded-full gap-1 p-2 items-center">
                                        <ThumbsUp color="blue"/>  
                                        <p>1</p>
                                    </div>
                                </div>

                                {/* replies */}
                                <div className="flex gap-1">
                                    <div className="bg-slate-400 h-fit">
                                        <User className="text-white h-10 w-10"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className={Typhography.subtle}><span className="font-bold"> kenfelix </span>1 hour ago </p>
                                        <p className="text-lg sm:text-xl">wondeful article. it really help me understand the topic better</p>
                                    </div>
                                </div> 
                                <Separator className="my-2" />
                            </div>                        
                        </div>
                        <Separator className="my-2" />
                    </React.Fragment>
                </div>

                <div className="flex lg:hidden w-full h-[200px] bg-slate-50 items-center justify-center">
                    Ads
                </div>
                {/* related stories */}

                <Card className="bg-slate-50">
                    <CardHeader>
                        <CardTitle className="text-[25px] sm:text-[35px]">Related Posts</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        {Articles.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-2 py-[8px]">
                                <div className="w-full sm:w-[300px] h-[130px]">
                                    <Image src={item.image} alt={""} className="w-full h-full object-cover"/>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-bold">{item.title}</h3>
                                    <div className="flex gap-3">
                                        <p className="flex text-[14px] items-center gap-1">
                                            <span><UserIcon  className="w-[14px]"/></span>Joy Ezeh
                                        </p>
                                        <p className="flex text-[14px] items-center gap-1">
                                            <span><Clock  className="w-[14px]"/></span>1 week agao
                                        </p>
                                        <p className="flex text-[14px] items-center gap-1">
                                            <span><MessageCircle  className="w-[14px]"/></span>0
                                        </p>
                                    </div>
                                </div>
                        </div>
                        ))}
                    </CardContent>
                </Card>

            </div>
            <div className="hidden bg-slate-50 w-[30%] lg:grid grid-col-1 items-center justify-center">
                <p>ads</p>
                <p>ads</p>
                <p>ads</p>
            </div>
        </div>
     );
}
 
export default ArticleDetailed;