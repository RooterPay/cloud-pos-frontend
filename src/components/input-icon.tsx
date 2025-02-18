import { Input } from '@/components/ui/input';
import { LucideIcon } from 'lucide-react';

export default function InputWithIcon({
  id,
  className,
  type,
  placeholder,
  CustomIcon,
}: {
  id: string;
  className: string;
  type: string;
  placeholder: string;
  CustomIcon: LucideIcon;
}) {
  return (
    <div className={className}>
      <div className='relative'>
        <Input
          id={id}
          className='peer ps-9'
          placeholder={placeholder}
          type={type}
          required
        />
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50'>
          <CustomIcon size={16} strokeWidth={2} aria-hidden='true' />
        </div>
      </div>
    </div>
  );
}
