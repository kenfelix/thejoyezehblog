"use client"

import * as React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';


export interface ContactUsProps {
    route: string
}

const ContactUs: React.FC<ContactUsProps> = ({...props}) => {
    const router = useRouter()
  return (
    <div>
        <Button variant={"ghost"} onClick={() => { router.push(props.route)}}>
            Contact Us <ArrowRight className={`mr-2 h-4 w-4`} />
        </Button>
    </div>
  );
}

export default ContactUs
