'use client';
import { blurDataImage } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='flex justify-between gap-8 pb-5'>
      <div>
        <header className='flex gap-2 pb-2 text-2xl'>
          <span className='font-bold'>{"Hello, I'm Aung Pyae Phyo"}</span>
          <span className='inline-block origin-[70%_70%] animate-wave'>👋🏼</span>
        </header>

        <div className='grid gap-4 opacity-80'>
          <p className='sm:max-w-md '>
            {"I'm a web developer based in Mandalay, Myanmar. I"}{' '}
            <a
              target={'_blank'}
              rel={'noreferrer'}
              aria-label={'link'}
              className='underline'
              href='https://github.com/aungpyaephyo1412'
            >
              {' '}
              code{' '}
            </a>
            ,{' '}
            <Link className='underline' href={'/blog'}>
              {' '}
              write
            </Link>{' '}
            and build stuff on internet.
          </p>

          <p className='sm:max-w-md'>
            I love working in-between product, engineering and developer
            experience.
          </p>
        </div>
      </div>
      <Image
        alt='Aung Pyae Phyo'
        src={'/avatar.png'}
        placeholder='blur'
        blurDataURL={blurDataImage}
        className='hidden h-44 w-44 transform-gpu rounded object-cover object-top  sm:block bg-neutral-300 dark:bg-neutral-800 scale-x-[-1]'
        width={180}
        height={180}
      />
    </div>
  );
};

export default Hero;
