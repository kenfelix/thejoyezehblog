import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TimelineProps {
    
}
 
const Timeline: FC<TimelineProps> = () => {
    return ( 
        <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        
      </TabsContent>
      <TabsContent value="password">
        
      </TabsContent>
    </Tabs>
    );
}
 
export default Timeline;