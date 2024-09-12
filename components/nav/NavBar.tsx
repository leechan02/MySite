"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setNavItem } from "@/lib/redux/navSlice";

interface NavItemProps {
  text: string;
  link: string;
}

const NavItem = ({ text, link }: NavItemProps) => (
  <Link href={link}>
    <div
      className={`w-[80px] py-2 rounded-full justify-center items-center flex cursor-pointer text-foreground`}
    >
      <div className='text-center text-sm font-bold font-mono'>{text}</div>
    </div>
  </Link>
);

export default function NavBar() {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.nav.selectedItem);
  const pathname = usePathname();

  useEffect(() => {
    // Update selected item based on current path
    if (pathname === "/") {
      dispatch(setNavItem("Work"));
    } else if (pathname === "/info") {
      dispatch(setNavItem("Info"));
    }
  }, [pathname, dispatch]);

  return (
    <div className='p-1 bg-foreground/5 rounded-full shadow border-2 border-foreground/10 backdrop-blur-[15px] justify-start items-center gap-1 inline-flex relative'>
      <motion.div
        className='absolute w-[80px] h-[36px] bg-foreground opacity-5 rounded-full'
        initial={false}
        animate={{
          x: selected === "Work" ? 0 : 84,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
      <NavItem text='Work' link='/' />
      <NavItem text='Info' link='/info' />
    </div>
  );
}
