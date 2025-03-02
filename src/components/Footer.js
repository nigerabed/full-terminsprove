"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Gp1 from "../assets/Gp1.png";
import Gp1fill from "../assets/Gp1-fill.png";
import Gp2fill from "../assets/Gp2-fill.png";
import Gp3fill from "../assets/Gp3-fill.png";
import Gp2 from "../assets/Gp2.png";
import Gp3 from "../assets/Gp3.png";
import Link from "next/link";

export default function Footer() {
  const path = usePathname();

  
  return (
    <>
      <footer className="fixed bottom-0 h-[5em] w-full bg-white ">
        <div className="flex justify-around items-center h-full">
          <Link href={"/activitier"}>
          

            <Image src={path === "/activitier" ? Gp1fill: Gp1} alt="gp1" height={60} width={60} />
          </Link>
          <Link href={"/sogeSide"}>
            <Image src={path === "/sogeSide" ? Gp2fill: Gp2} alt="gp2" height={60} width={60} />
          </Link>
          <Link href={"/kalender"}>
            <Image src={path === "/kalender" ? Gp3fill: Gp3} alt="gp3" height={60} width={60} />
          </Link>
        </div>
      </footer>
    </>
  );
}
