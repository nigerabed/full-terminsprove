import Image from "next/image";
import logo from "../assets/Logo.png";
import Button from "@/components/Button";
import Link from "next/link";

import { Roboto } from 'next/font/google'

import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative
     overflow-y-hidden overflow-x-hidden ${roboto.className}`}>
      <Image
        src={logo}
        alt="logo"
        height={150}
        className="absolute bottom-[22em]"
      />
      <div className="absolute bottom-[5em] left-[4em]">
        <Link href="/activitier">
          <Button text={"Kom i gang"} />
        </Link>
      </div>
    </div>
  );
}
