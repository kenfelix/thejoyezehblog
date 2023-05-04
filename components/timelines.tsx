"use client"

import { FC } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { latests } from "@/constants";
import { useRouter } from "next/navigation";

interface TimelineProps {
    
}
 
const Timeline: FC<TimelineProps> = () => {

  const router = useRouter()
  return ( 
      <Tabs defaultValue="latest" className="w-full">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="latest">Latest</TabsTrigger>
      <TabsTrigger value="most viewed">Most viewed</TabsTrigger>
    </TabsList>
    <TabsContent value="latest">
      <Card>
        <CardContent className="space-y-2 p-3">
          {latests.map((latest, index) => (
          <div
            key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 cursor-pointer"
              onClick={() => {router.push(`/home/articles/${latest.title}`)}}
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {latest.title}
              </p>
            </div>
          </div>
        ))}
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="most viewed">
      <Card>
        <CardContent className="space-y-2 p-3">
          {latests.map((latest, index) => (
          <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 cursor-pointer"
              onClick={() => { router.push(`/home/articles/${latest.title}`) }}
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {latest.title}
              </p>
            </div>
          </div>
        ))}
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>

  );
}
 
export default Timeline;