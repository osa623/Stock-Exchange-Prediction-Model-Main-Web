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

            {/* Lower div Section for 2 sections */}

          <div className="absolute flex-col flex z-40 h-auto w-full overflow-hidden">


                <div className="relative z-50 flex inset-0 h-[135vh]">
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
 
                        {/* Sliding Menu for the Services */}
                       <div className="absolute z-50 w-[50%] h-screen bg-amber-200 top-0 left-0 h-full">
                            

                      </div>

                      {/* texting area for the Feature section */}
                     <div className="absolute flex-col z-50 top-12 right-1/2 translate-x-1/2 border-white h-full flex items-center bg-transparent w-[50%]">
                              <div className="relative flex h-auto w-auto">
                                <h2 className="absolute flex font-bowlby top-0 md:text-[3rem] md:ml-12 font-white">
                                    COMPREHENSIVE||||||<div className="relative flex bg-white w-full"/>
                                </h2>
                                <h2 className="absolute font-bowlby md:text-[6rem] top-6   md:ml-12 font-white">
                                    COMPANY
                                </h2>
                                 <h2 className="absolute font-bowlby md:text-[7.5rem] top-24   md:ml-12 font-white">
                                    PROFILE
                                </h2>
                                                                
       
                              </div>


                     </div>


                </div>

          </div>



    </div>
  );
}
