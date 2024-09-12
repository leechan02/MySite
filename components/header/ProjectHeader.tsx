import Link from "next/link";
import Button from "../button/Button";
import { FiArrowLeft } from "react-icons/fi";

export default function ProjectHeader() {
  return (
    <Link className='flex justify-start items-center p-12' href='/'>
      <Button label='Back' icon={FiArrowLeft} />
    </Link>
  );
}
