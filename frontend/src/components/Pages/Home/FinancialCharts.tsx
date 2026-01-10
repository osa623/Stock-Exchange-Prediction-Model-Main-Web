'use client'

import Link from "next/link";
import Image from "next/image";

//imports for images

//imports for Uis
import Waves from '../../Ui/Waves';
import CardSwap, { Card } from '../../Ui/CardSwapI';
import ScrollVelocity from "@/components/Ui/ScrollVelocity";


export default function FinancialCharts() {
  return (

    /* Main Section */
    <div className="relative h-screen w-full bg-transparent">

        
        {/* Scroll-Velocity branch Section */}
          <div className="absolute z-50 w-full bg-white h-[5vh] bottom-0 top-0 overflow-hidden">
                            <div className='relative w-[100%] h-[2rem] bg-white border-b-2 border-black overflow-hidden top-0 flex items-center justify-center'>
                                <ScrollVelocity
                                     texts={['Developer  |  Designer  |  Developer  |  Designer  |  Developer  |  Designer']} 
                                      velocity={12} 
                                      className="custom-scroll-text h-full font-normal text-black font-encode text-[20px]"
                                  />
          
                             
                           </div>
             </div>

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

                     {/* white background*/}
                      <div className="absolute bg-gradient-to-t from-white via-white to-transparent z-50 w-full h-full"/>
                      <div className="absolute bg-gradient-to-b from-white via-white/15 to-transparent z-50 w-full h-full"/>
 
                        {/* Sliding Menu for the Comprehensive Card */}
                       <div className="absolute z-50 w-[50%] h-screen bg-transparent top-0 left-0 h-full">
                        <div className="" style={{ height: '600px', position: 'relative' }}>
                          <CardSwap
                        skewAmount={0}
                          >
                            <Card>
                              <div className="relative h-full border-4 bg-white backdrop-blur-sm rounded-xl overflow-hidden border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                               
                              </div>

                            </Card> 
                             <Card>
                              <div className="relative h-full bg-white border-4 backdrop-blur-sm rounded-xl overflow-hidden border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">


                               
                              </div>

                            </Card>                               
                          </CardSwap>
                        </div>
                            

                      </div>

                      {/* texting area for the Feature section */}
                     <div className="absolute z-50 flex-col top-12 left-1/2 -translate-x-1/2 border-white h-full flex items-center bg-transparent w-[50%] h-f">
                              <div className="relative flex h-auto  w-auto">
                                <h2 className="absolute flex font-bowlby top-0 md:text-[2.5rem] md:ml-12 text-black">
                                    INTERACTIVE<div className="text-amber-400">_FINANCIAL</div><div className="relative flex bg-white w-full"/>
                                </h2>
                                <h2 className="absolute font-bowlby md:text-[6rem] top-6   md:ml-12 text-black">
                                    CHARTS_&
                                </h2>
                                 <h2 className="absolute font-bowlby md:text-[7.5rem] top-26   md:ml-12 text-black">
                                    VISUALS
                                </h2>
                                                                
       
                              </div>
                     </div>


                    <div className="absolute z-50 flex-col top-40 right-0 border-white h-full flex items-center bg-transparent w-[50%] h-f">
                              <div className="relative flex md:mt-12 h-auto w-[100%]">
                                <h2 className="flex font-encode bottom-24 md:text-2xl md:mt-20 md:ml-12 text-black"
                                style={{
                                  fontWeight:'100'
                                }}>
                                  Visualize complex financial data with dynamic, interactive charts and graphs that make it easy to track performance, and make informed decisions.
                                </h2>         
                            </div>  

                   </div> 


                </div>

          </div>






    </div>
  );
}
