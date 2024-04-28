'use client';
import Link from 'next/link';
import Image from 'next/image';
import { blurDataImage } from '@/lib/utils';
const Hero = () => {
  return (
    <div className="flex justify-between gap-8 pb-5">
      <div>
        <h1 className="flex gap-2 pb-4 text-2xl">
          <span className="font-bold">{"Hey, I'm Aung Pyae Phyo"}</span>
          <span className="inline-block origin-[70%_70%] animate-wave">👋🏼</span>
        </h1>

        <div className="grid gap-4 opacity-80">
          <p className="sm:max-w-md ">
            {"I'm a Experienced Front-End Developer based in Mandalay, Myanmar. I"}{' '}
            <Link className="underline" href="https://github.com/aungpyaephyo1412">
              {' '}
              code{' '}
            </Link>
            ,{' '}
            <Link className="underline" href={'/blog'}>
              {' '}
              write
            </Link>{' '}
            and build stuff on internet.
          </p>

          <p className="sm:max-w-md">
            I love working in-between product, engineering and developer experience, currently at{' '}
            <Link className="underline" href="https://walmal.vercel.app">
              walmal
            </Link>
            .
          </p>
        </div>
      </div>
      <Image
        alt="Carlos Cuesta"
        src="/02.JPG"
        placeholder="blur"
        blurDataURL={blurDataImage}
        className="hidden h-44 w-44 transform-gpu rounded object-cover object-bottom sm:block"
        width={176}
        height={176}
      />
    </div>
  );
};

export default Hero;
