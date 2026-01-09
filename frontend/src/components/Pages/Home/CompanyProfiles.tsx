'use client'

import Link from "next/link";
import Image from "next/image";

//imports for images
import heroImage from "../../assets/Landing Page/hero1.jpg";
import heroImageI from "../../assets/Landing Page/hero2.jpg";

//imports for Uis
import Waves from '../../Ui/Waves';
import { use } from "react";
import CardSwap, { Card } from '../../Ui/CardSwap';
import { useEffect, useRef } from "react";


export default function HomePage() {
  return (

    /* Main Section */
    <div className="relative h-[200vh] w-full bg-transparent">



            {/* Upper I div Section */}
            <div className="absolute z-50 w-full h-screen bg-transparent overflow-hidden">
                 <div className="absolute z-50 w-[75%] bottom-20 rounded-3xl left-1/2 overflow-hidden -translate-x-1/2 md:h-[40vh] border-2">
                                    <Image
                              src={heroImage}
                              alt="Hero Image"
                              className="object-cover blur-xs" />

                 </div>
            </div>

    </div>
  );
}
