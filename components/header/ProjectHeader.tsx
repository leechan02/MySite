"use client";
import { Link } from "@/i18n/routing";
import Button from "../button/Button";
import { FiArrowLeft } from "react-icons/fi";

export default function ProjectHeader() {
  return (
    <div className='flex justify-start items-center p-8 sm:p-12'>
      <Link href='/'>
        <Button label='Back' icon={FiArrowLeft} />
      </Link>
    </div>
  );
}
