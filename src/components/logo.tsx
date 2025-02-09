import { Stoke } from 'next/font/google';

const stoke = Stoke({
  weight: '300',
  subsets: ['latin'],
});

export const Logo = () => {
  return (
    <span className={`${stoke.className}`}>
      R<span className='relative inline-block'>o</span>
      <span className='relative -ml-[11%] inline-block'>o</span>
      ter
    </span>
  );
};
