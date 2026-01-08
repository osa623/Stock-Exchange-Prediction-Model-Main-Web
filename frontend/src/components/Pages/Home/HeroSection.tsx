import Link from "next/link";
import Image from "next/image";

//imports

import heroImage from "../../assets/hero1.jpg";
import heroImageI from "../../assets/hero2.jpg";


export default function HomePage() {
  return (
    <div className="relative h-screen w-full bg-transparent">
           <div className="relative z-50 flex overflow-hidden inset-0 h-[65vh]">
            <Image
              src={heroImageI}
              alt="Hero Image"
              className="object-cover blur-md" />

            </div>

            <div className="absolute z-50 w-[75%] bottom-40 rounded-3xl left-1/2 -translate-x-1/2 h-[30vh] bg-white">

            </div>

    </div>
  );
}
