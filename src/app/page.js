// import Image from "next/image";
// import logo from "../assets/Logo.png";
// import Button from "@/components/Button";
// import Link from "next/link";

// import { Roboto } from 'next/font/google'

// import "./globals.css";

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

// export default function Home() {
//   return (
//     <div className={`bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative
//      overflow-y-hidden overflow-x-hidden ${roboto.className}`}>
//       <Image
//         src={logo}
//         alt="logo"
//         height={150}
//         className="absolute bottom-[22em]"
//       />
//       <div className="absolute bottom-[5em] left-[4em]">
//         <Link href="/activitier">
//           <Button text={"Kom i gang"} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// "use client";


//  import logo from "../assets/Logo.png";
//  import Button from "@/components/Button";


//  import { Roboto } from 'next/font/google'

//  import "./globals.css";

//  const roboto = Roboto({
//    weight: '400',
//    subsets: ['latin'],
//  })

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowButton(true);
//     }, 1500);

//     return () => clearTimeout(timer); // Cleanup in case the component unmounts
//   }, []);

//   return (
//     <div className={`bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative
//       overflow-y-hidden overflow-x-hidden ${roboto.className}`}>
//        <Image
//          src={logo}
//          alt="logo"
//          height={150}
//          className="absolute bottom-[22em]"
//        />
//       {showButton && (
//         <div className="absolute bottom-[5em] left-[4em] animate-fade-in transition duration-700 ease-in-out">
//             <Link href="/activitier">
// //           <Button text={"Kom i gang"} />
// //         </Link>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/Logo.png";
import Button from "@/components/Button";

import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div
      className={`bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat relative
      overflow-y-hidden overflow-x-hidden ${roboto.className}`}
    >
      <Image src={logo} alt="logo" height={150} className="absolute bottom-[22em]" />

      {/* Button with Slide-in Animation */}
      <div className="absolute bottom-[5em] left-[4em]">
        <Link href="/activitier">
          <div
            className={`transition-transform duration-700 ease-in-out ${
              showButton ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <Button text={"Kom i gang"} />
          </div>
        </Link>
      </div>
    </div>
  );
}


