import * as React from 'react';

import { ArrowRight } from "lucide-react"
 
import { Button, buttonVariants } from "@/components/ui/button"
import { VariantProps } from 'class-variance-authority';


interface LoadmoreProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string
  variant: any
}

 const Loadmore: React.FC<LoadmoreProps> = ({label, variant='default', ...onclick}) => {
  return (
    <Button variant={variant} {...onclick}>
          {label} <ArrowRight className={`mr-2 h-4 w-4`} />
    </Button>
  );
}

export default Loadmore