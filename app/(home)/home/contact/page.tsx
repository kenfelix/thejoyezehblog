import { FC } from "react";

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import BreadCrums from "@/components/ui/breadcrums";

interface ContactProps {
    
}
 
const Contact: FC<ContactProps> = () => {
    return ( 
        <><BreadCrums />
            <div className="flex flex-col items-center p-[20px] gap-10">
            <div className="max-w-2xl p-5 sm:ring-1 sm:rounded-lg sm:ring-slate-300 flex flex-col items-center gap-10">
                <div className="grid w-full max-w-xl">
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                        Get In Touch With Us
                    </h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        If you have a story to share with us click or you would like to Advertise or for other requests,
                        please fill this contact form below and we would get back to you as soon as possible.
                    </p>
                </div>
                <div className="grid w-full max-w-xl gap-1.5">
                    <Label htmlFor="name">Your Name</Label>
                    <Input type="name" id="name" placeholder="name" />
                </div>
                <div className="grid w-full max-w-xl gap-1.5">
                    <Label htmlFor="email">Your Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-xl gap-10">
                    <Textarea className="h-[200px]" id="name" placeholder="Type your message here." />
                    <Button>Send message</Button>
                </div>
            </div>
        </div></>
     );
}
 
export default Contact;