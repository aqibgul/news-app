"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="  fixed shadow-lg z-50 left-0 top-0 w-full bg-gray-800 p-4">
      <div className="container mx-auto flex sm:flex-row flex-col sm:justify-between items-center">
        <div className="flex items-center justify-center gap-1">
          <div>
            <Image src="/news-log.png" width={80} height={80} alt="logo" />{" "}
          </div>
          <div className="text-amber-600 text-[12px] md:text-[20px] lg:text-[24px] font-bold">
            The WORLD
          </div>
        </div>
        <ul className=" text-amber-600  flex space-x-2 sm:space-x-4">
          <li>
            <Link
              href="/"
              className=" text-[10px] sm:text-[12px] md:text-[20px]  lg:text-[24px]
               hover:border-b-2  translate-x-3 duration-300 ease-in-out focus:border-b-2 focus:border-amber-600"
            >
              Headlines
            </Link>
          </li>
          <li>
            <Link
              href="/business"
              className=" text-[10px]  sm:text-[12px] md:text-[20px] lg:text-[24px] 
              hover:border-b-2  translate-x-3 duration-300 ease-in-out focus:border-b-2 focus:border-amber-600 "
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              href="/entertainment"
              className="text-[10px] sm:text-[12px] md:text-[20px] lg:text-[24px] 
              hover:border-b-2  translate-x-3 duration-300 ease-in-out focus:border-b-2 focus:border-amber-600 "
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link
              href="/health"
              className=" text-[10px] sm:text-[12px] md:text-[20px] lg:text-[24px] 
              hover:border-b-2  translate-x-3 duration-300 ease-in-out focus:border-b-2 focus:border-amber-600"
            >
              Health
            </Link>
          </li>
          <li>
            <Link
              href="/sports"
              className=" text-[10px] sm:text-[12px] md:text-[20px] lg:text-[24px]
              hover:border-b-2  translate-x-3 duration-300 ease-in-out focus:border-b-2 focus:border-amber-600"
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              href="/technology"
              className=" text-[10px] sm:text-[12px]  md:text-[20px] lg:text-[24px]
              hover:border-b-2  translate-x-3 duration-300 ease-in-out focus:border-b-2 focus:border-amber-600"
            >
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
