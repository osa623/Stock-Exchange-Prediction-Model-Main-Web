'use client'

import Link from "next/link";
import Image from "next/image";

//imports for images
import heroImage from "../../assets/Landing Page/hero1.jpg";
import heroImageI from "../../assets/Landing Page/hero2.jpg";

//imports for Uis
import Waves from '../../Ui/Waves';
import { use } from "react";


export default function HomePage() {
  return (

    /* Main Section */
    <div className="relative h-auto w-full bg-transparent">

            {/* Lower div Section for 2 sections */}

          <div className="absolute flex-col flex z-40 h-auto w-full overflow-hidden">

                <div className="relative z-50 flex overflow-hidden inset-0 h-[65vh]">
                <Image
                  src={heroImageI}
                  alt="Hero Image"
                  className="object-cover blur-md" />

                </div>

                <div className="relative z-50 flex overflow-hidden inset-0 h-[135vh]">
                     {/* Wave Patterns */}
                     
                      <div className="absolute z-50 w-full h-full">
                        <Waves
                            lineColor="#fff"
                            backgroundColor="transparent"
                            waveSpeedX={0.07}
                            waveSpeedY={0.01}
                            waveAmpX={40}
                            waveAmpY={20}
                            friction={0.9}
                            tension={0.01}
                            maxCursorMove={120}
                            xGap={12}
                            yGap={36}
                          />
                      </div>
                       <div className="absolute z-50 w-full h-full">
                        <Waves
                            lineColor="#fff"
                            backgroundColor="transparent"
                            waveSpeedX={0.02}
                            waveSpeedY={0.01}
                            waveAmpX={40}
                            waveAmpY={20}
                            friction={0.9}
                            tension={0.01}
                            maxCursorMove={120}
                            xGap={12}
                            yGap={36}
                          />
                      </div>

                     {/* black background*/}
                      <div className="absolute bg-gradient-to-t from-black via-black to-transparent z-50 w-full h-full"/>
                        <div className="absolute bg-gradient-to-b from-black via-black/45 to-transparent z-50 w-full h-full"/>
 


                </div>


          </div>

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
