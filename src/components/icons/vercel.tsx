import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';
const Vercel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 256 222'
    width='1em'
    height='1em'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    {...props}
    className={cn('fill-black dark:fill-white', props.className)}
  >
    <path d='m128 0 128 221.705H0z' />
  </svg>
);
export default Vercel;
