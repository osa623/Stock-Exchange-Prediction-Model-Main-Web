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
import ScrollVelocity from '@/components/Ui/ScrollVelocity'
import { useEffect, useRef, useState } from "react";

const videoSections = [
  { src: "/heroSection.mp4" },
  { src: "/heroSection.mp4" },
  { src: "/heroSection.mp4" }
];

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSections.length);
    }, 100000000);
    return () => clearInterval(interval);
  }, []);

  return (

    /* Main Section */
    <div className="relative h-[200vh] w-full bg-transparent">

            {/* Lower div Section for 2 sections */}

          <div className="absolute flex-col flex z-40 h-auto w-full overflow-hidden">
          <div className="relative z-50 flex overflow-hidden inset-0 h-[70vh]">
            <div 
            className="flex transition-transform duration-[1000ms] ease-in-out w-full h-full"
            style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
            >
            {videoSections.map((video, index) => (
              <div key={index} className="relative min-w-full overflow-hidden h-full shrink-0">
                <video
                className="absolute z-10 inset-0 w-full h-full object-cover blur-xs"
                autoPlay
                loop
                muted
                playsInline
                >
                <source src={video.src} type="video/mp4" />
                </video>

                <div className="absolute z-20 inset-0 w-full  backdrop-blur-md rotate-45 -left-96 h-[1000px] bg-black/30" />
                
                {/* Text overlay for each video section */}
              <div className="absolute z-50 inset-0 flex p-12 items-start justify-start">
                <div className="text-strat text-white px-8">
                <h2 className="lg:text-8xl font-encode font-extrabold">
                  {index === 0 && "STOCKS"}
                  {index === 1 && "ANALYZE TRENDS"}
                  {index === 2 && "MAKE DECISIONS"}
                </h2>
                  <h2 className="lg:text-8xl font-encode font-extrabold">
                  {index === 0 && "MATTER"}
                  {index === 1 && "ANALYZE TRENDS"}
                  {index === 2 && "MAKE DECISIONS"}
                </h2>
             
                </div>
              </div>
              </div>
            ))}
            </div>
          </div>


                <div className="relative z-50 flex  inset-0 h-[135vh]">
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
                       <div className="absolute z-50 w-full h-full">
                            

                        <div className="mt-24" style={{ height: '600px', position: 'relative' }}>
                          <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                          >
                            <Card>
                              <div className="relative h-full bg-white backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                                <div className="absolute z-10 flex w-auto h-[3rem] bg-blue-600 top-0 left-0">
                                  <div className="flex text-xs font-encode font-600 border-br-2 border-blue-900 items-center ml-2 px-4 text-white">
                                      Comprehensive Company Profiles
                                  </div>
                                </div>

                                <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">

                                <div className="flex flex-col">
                                  <div className="flex-1 relative space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]"/>
                                    <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                                    </h3>
                                      <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]"/>
                                  </div>
                                  <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                                </div>                                    
                                  <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                                  style={{
                                    boxShadow:'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }}>
                                    <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                                      style={{
                                    boxShadow:'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }} />
                                  </div>
                                </div>
                              </div>

                              <div className="absolute z-10 flex w-auto h-[40%] bg-blue-600 bottom-0 right-0">
                               
                              </div>

                            </Card> 
                             <Card>
                              <div className="relative h-full bg-white backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                                <div className="absolute z-10 flex w-auto h-[3rem] bg-blue-600 top-0 left-0">
                                  <div className="flex text-xs font-encode font-600 border-br-2 border-blue-900 items-center ml-2 px-4 text-white">
                                      Comprehensive Company Profiles
                                  </div>
                                </div>

                                <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">

                                <div className="flex flex-col">
                                  <div className="flex-1 relative space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]"/>
                                    <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                                    </h3>
                                      <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]"/>
                                  </div>
                                  <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                                </div>                                    
                                  <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                                  style={{
                                    boxShadow:'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }}>
                                    <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                                      style={{
                                    boxShadow:'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }} />
                                  </div>
                                </div>
                              </div>

                              <div className="absolute z-10 flex w-auto h-[40%] bg-blue-600 bottom-0 right-0">
                               
                              </div>

                            </Card>    
                            <Card>
                              <div className="relative h-full bg-white backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                                <div className="absolute z-10 flex w-auto h-[3rem] bg-blue-600 top-0 left-0">
                                  <div className="flex text-xs font-encode font-600 border-br-2 border-blue-900 items-center ml-2 px-4 text-white">
                                      Comprehensive Company Profiles
                                  </div>
                                </div>

                                <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">

                                <div className="flex flex-col">
                                  <div className="flex-1 relative space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]"/>
                                    <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                                    </h3>
                                      <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]"/>
                                  </div>
                                  <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                                </div>                                    
                                  <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                                  style={{
                                    boxShadow:'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }}>
                                    <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                                      style={{
                                    boxShadow:'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }} />
                                  </div>
                                </div>
                              </div>

                              <div className="absolute z-10 flex w-auto h-[40%] bg-blue-600 bottom-0 right-0">
                               
                              </div>

                            </Card> 
                             <Card>
                              <div className="relative h-full bg-white backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                                <div className="absolute z-10 flex w-auto h-[3rem] bg-blue-600 top-0 left-0">
                                  <div className="flex text-xs font-encode font-600 border-br-2 border-blue-900 items-center ml-2 px-4 text-white">
                                      Comprehensive Company Profiles
                                  </div>
                                </div>

                                <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">

                                <div className="flex flex-col">
                                  <div className="flex-1 relative space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]"/>
                                    <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                                    </h3>
                                      <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]"/>
                                  </div>
                                  <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                                </div>                                    
                                  <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                                  style={{
                                    boxShadow:'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }}>
                                    <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                                      style={{
                                    boxShadow:'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }} />
                                  </div>
                                </div>
                              </div>

                              <div className="absolute z-10 flex w-auto h-[40%] bg-blue-600 bottom-0 right-0">
                               
                              </div>

                            </Card>
                                                         <Card>
                              <div className="relative h-full bg-white backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                                <div className="absolute z-10 flex w-auto h-[3rem] bg-blue-600 top-0 left-0">
                                  <div className="flex text-xs font-encode font-600 border-br-2 border-blue-900 items-center ml-2 px-4 text-white">
                                      Comprehensive Company Profiles
                                  </div>
                                </div>

                                <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">

                                <div className="flex flex-col">
                                  <div className="flex-1 relative space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]"/>
                                    <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                                       <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                                    </h3>
                                      <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]"/>
                                  </div>
                                  <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                                </div>                                    
                                  <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                                  style={{
                                    boxShadow:'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }}>
                                    <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                                      style={{
                                    boxShadow:'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                                  }} />
                                  </div>
                                </div>
                              </div>

                              <div className="absolute z-10 flex w-auto h-[40%] bg-blue-600 bottom-0 right-0">
                               
                              </div>

                            </Card>         
                          
                                                      
       

                            
                          </CardSwap>
                        </div>

                      </div>

                      {/* texting area for the Feature section */}
                    <div className="absolute z-50 top-0 border-white h-full flex items-center bg-transparent w-[50%] h-f">
                              <div className="relative flex h-auto w-auto">
                                <h2 className="absolute flex font-bowlby bottom-24 md:text-[3rem] md:ml-12 font-white">
                                    OUR||||||||||||||||||||||||||||||||||||<div className="relative flex bg-white w-full"/>
                                </h2>
                                  <h2 className="absolute font-bowlby md:text-[6rem] bottom-0   md:ml-12 font-white">
                                    FEATURES
                                </h2>
                              </div>
                                
                              <div className="relative flex md:mt-12 h-auto w-[80%]">
                                <h2 className="flex font-encode bottom-24 md:text-2xl md:mt-20 md:ml-12 font-white"
                                style={{
                                  fontWeight:'100'
                                }}>
                                  Everything you need to analyze companies, visualize data, and make smarter investment decisions.Everything you need to analyze companies, visualize data, and make smarter investment decisions.
                                </h2>         
                            </div>  

                    </div>

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

            {/* Scroll-Velocity branch Section */}
            <div className="absolute z-50 w-full bg-black h-[5vh] bottom-0 right-0 overflow-hidden">
                  <div className='relative w-[100%] h-[2rem] bg-transparent border-t-2 overflow-hidden top-0 flex items-center justify-center'>
                      <ScrollVelocity
                           texts={['Developer  |  Designer  |  Developer  |  Designer  |  Developer  |  Designer']} 
                            velocity={12} 
                            className="custom-scroll-text h-full text-white font-thin font-encode text-[20px]"
                        />

                   
                 </div>
            </div>

    </div>
  );
}
