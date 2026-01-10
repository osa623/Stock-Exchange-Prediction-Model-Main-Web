'use client'

import Link from "next/link";
import Image from "next/image";

//imports for images
import heroImage from "../../assets/Landing Page/hero1.jpg";
import heroImageI from "../../assets/Landing Page/hero2.jpg";

//imports for Uis
import Waves from '../../Ui/Waves';
import { use } from "react";
import CardSwap, { Card } from '../../Ui/CardSwapI';
import { useEffect, useRef } from "react";



export default function FeaturesSection() {
  return (

    /* Main Section */
    <div className="relative h-screen w-full bg-transparent">

            {/* Lower div Section for 2 sections */}

          <div className="absolute flex-col flex z-40 h-auto w-full overflow-hidden">


                <div className="relative z-50 flex inset-0 h-[100vh]">
                     {/* Wave Patterns */}
                     
                      <div className="absolute z-50 w-full h-full">
                        <Waves
                            lineColor="#000"
                            backgroundColor="#fff"
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
                      <div className="absolute bg-gradient-to-b from-black via-black/15 to-transparent z-50 w-full h-full"/>
 
                        {/* Sliding Menu for the Comprehensive Card */}
                       <div className="absolute z-50 w-[50%] h-screen bg-transparent top-0 right-0 h-full">
                        <div className="" style={{ height: '600px', position: 'relative' }}>
                          <CardSwap
                        skewAmount={0}
                          >
                            <Card>
                              <div className="relative h-full border-4 bg-black backdrop-blur-sm rounded-xl overflow-hidden border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                               
                              </div>

                            </Card> 
                             <Card>
                              <div className="relative h-full bg-black border-4 backdrop-blur-sm rounded-xl overflow-hidden border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">


                               
                              </div>

                            </Card>                               
                          </CardSwap>
                        </div>
                            

                      </div>

                      {/* texting area for the Feature section */}
                     <div className="absolute z-50 flex-col top-12 right-1/2 -translate-x-1/2 border-black h-full flex items-center bg-transparent w-[50%] h-f">
                              <div className="relative flex h-auto  w-auto">
                                <h2 className="absolute text-nowrap flex font-bowlby top-0 md:text-[3rem] md:ml-12 text-white">
                                    IN-DEPTH||||||||||||||||||||||||||||||<div className="relative flex bg-black w-full"/>
                                </h2>
                                <h2 className="absolute flex font-bowlby md:text-[3.5rem] top-12 text-nowrap   md:ml-12 text-white">
                                    FINANCIAL<div className="text-amber-300">_REPORT</div>
                                </h2>
                                 <h2 className="absolute font-bowlby md:text-[7rem] top-20   md:ml-12 text-white">
                                    ANALYSIS
                                </h2>
                                                                
       
                              </div>
                     </div>


                    <div className="absolute z-50 flex-col top-40 left-0 border-black h-full flex items-center bg-transparent w-[50%] h-f">
                              <div className="relative flex md:mt-12 h-auto w-[100%]">
                                <h2 className="flex font-encode bottom-24 md:text-2xl md:mt-20 md:ml-12 text-white"
                                style={{
                                  fontWeight:'100'
                                }}>
                                  Everything you need to analyze companies, visualize data, and make smarter investment decisions.Everything you need to analyze companies, visualize data, and make smarter investment decisions.
                                </h2>         
                            </div>  

                   </div> 


                </div>

          </div>






    </div>
  );
}
