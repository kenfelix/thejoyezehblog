import * as React from 'react';

import { ArrowRight } from "lucide-react"
 
import { Button } from "@/components/ui/button"


interface LoadmoreProps {
    label: string
}

 const Loadmore: React.FC<LoadmoreProps> = ({label}) => {
  return (
    <Button>
          {label} <ArrowRight className="mr-2 h-4 w-4" />
    </Button>
  );
}

export default Loadmore