"use client"


import { FC, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type FilterType = {
    value: string;
    label: string;
}[]

interface FilterProps {
    filters: FilterType
}


const Filter: FC<FilterProps> = ({filters}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="ghost"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
                >
                {value
                    ? filters.find((filter) => filter.value === value)?.label
                    : "Select filter..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                <CommandInput placeholder="Search filter..." />
                <CommandEmpty>No filter found.</CommandEmpty>
                <CommandGroup className="bg-white">
                    {filters.map((filter) => (
                        <CommandItem
                            
                        key={filter.value}
                        onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                        }}
                    >
                        <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            value === filter.value ? "opacity-100" : "opacity-0"
                        )}
                        />
                        {filter.label}
                    </CommandItem>
                    ))}
                </CommandGroup>
                </Command>
            </PopoverContent>
    </Popover>
    )
}

export default Filter