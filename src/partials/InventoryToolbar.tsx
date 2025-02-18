import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TriggerButton } from '@/modals/CreateProduct';

const InventoryToolbar = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2 p-4 bg-background shadow rounded-lg'>
      <div className='flex items-center space-x-2 w-full sm:w-auto'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <Filter className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Most Recent</DropdownMenuItem>
            <DropdownMenuItem>Alphabetical</DropdownMenuItem>
            <DropdownMenuItem>By Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className='relative w-full sm:w-64'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input type='search' placeholder='Search...' className='pl-8' />
        </div>
      </div>
      <TriggerButton />
    </div>
  );
};

export { InventoryToolbar };
