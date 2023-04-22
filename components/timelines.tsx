import { FC } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { latests } from "@/constants";

interface TimelineProps {
    
}
 
const Timeline: FC<TimelineProps> = () => {
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
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
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
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
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