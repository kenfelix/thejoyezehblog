import { FC } from "react";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Post from "@/components/post";
import { Articles, filters } from "@/constants";
import Filter from "@/components/filter";



interface DashboardProps {

}


const Dashboard: FC<DashboardProps> = () => {
    return (
        <Command className="w-full h-full flex flex-col gap-10">
            <div className="flex flex-row items-center justify-between w-full">
                <CommandInput placeholder="Search" className="w-full"/>
                <Filter filters={filters}/>
            </div>
            <CommandList className="max-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-rounded-full">
                <CommandEmpty>No results found.</CommandEmpty>
                <div className="grid grid-cols-2 gap-1 h-full">
                    {Articles.map((item, index) => (
                        <CommandItem key={index} className="w-full"><Post image={item.image} title={item.title} description={item.description}/></CommandItem>
                    ))}
                    {Articles.map((item, index) => (
                        <CommandItem key={index} className="w-full"><Post image={item.image} title={item.title} description={item.description}/></CommandItem>
                    ))}
                </div>
            </CommandList>
        </Command>
    )
}

export default Dashboard