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
import SplitText from "../../Ui/SplitText";

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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (

    /* Main Section */
    <div className="relative h-[200vh] w-full bg-transparent">

      {/* Lower div Section for 2 sections */}

      <div className="absolute flex-col flex z-40 h-auto w-full overflow-hidden">
        <div className="group relative z-50 flex overflow-hidden inset-0 h-[70vh]">
            <div
              className="flex transition-transform duration-1000 ease-in-out w-full h-full"
              style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
            >
              {videoSections.map((video, index) => (
                <div key={index} className="relative min-w-full overflow-hidden h-full shrink-0">
                  <video
                    className="absolute z-10 inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  {/* Dynamic indicator dots */}
                  <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {videoSections.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentVideoIndex(idx)}
                        className={`transition-all duration-500 rounded-full ${
                          idx === currentVideoIndex 
                            ? 'w-12 h-3 bg-[#B28D41]' 
                            : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Animated particles overlay */}
                  <div className="absolute z-20 inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#E9D37E] rounded-full animate-pulse"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random() * 3}s`,
                          opacity: 0.3 + Math.random() * 0.4
                        }}
                      />
                    ))}
                  </div>
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute z-20 inset-0 bg-gradient-to-br backdrop-blur-xs from-[#0D1325]/90 via-[#182847]/80 to-[#306B99]/90" />

                  {/* Accent geometric shapes */}
                  <div 
                    className={`absolute z-30 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
                      index === 0 ? 'bg-[#B28D41]/20 -top-20 -right-20' : 
                      index === 1 ? 'bg-[#E9D37E]/20 -bottom-20 -left-20' : 
                      'bg-[#306B99]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    }`} 
                  />

                  {/* Content positioning */}
                  <div className={`absolute z-50 inset-0 flex-col flex p-12 transition-all duration-1000 ${
                    index === 0 ? 'items-start justify-start' :
                    index === 1 ? 'items-start justify-center' :
                    'items-center justify-center'
                  }`}>

                    {/* 1st Content positioning - Text/heading Section */}
                    <div className={`max-w-4xl z-40 ${index === 2 ? 'text-center' : 'text-start'}`}>
                      {/* Main headline */}
                      <div className="">
                        <h2 className={`lg:text-9xl md:text-5xl text-4xl font-fugaz font-normal  ${
                          index === 0 ? 'text-[#e6c029]' : 
                          index === 1 ? 'text-[#B28D41]' : 
                          'text-[#E3E4E6]'
                        }`}>
                          {index === 0 && "COMPLETE"}
                          {index === 1 && "ANALYZE"}
                          {index === 2 && "MAKE SMART"}
                        </h2>
                      </div>

                      {/* Sub headline with accent line */}
                      <div className="flex items-center gap-4 mb-3">
                        <div className="h-1 w-12 bg-[#B28D41]" />
                        <h3 className="lg:text-4xl md:text-3xl flex text-2xl bg-[#0D1325] rounded-2xl p-2 px-4 border-2 font-bowlby text-[#BBC0C7]">
                          {index === 0 && "MARKET"}
                          {index === 1 && "TRENDS"}
                          {index === 2 && "DECISIONS"}
                        </h3> <h2 className="lg:text-6xl md:text-4xl text-3xl font-fugaz font-bold text-[#E3E4E6] font-normal">
                        {index === 0 && "INTELLIGENCE"}
                        {index === 1 && "& INSIGHTS"}
                        {index === 2 && "WITH DATA"}
                      </h2>
                      </div>

                      {/* Secondary headline */}


                      {/* Description text */}
                      <div className={`${index === 2 ? 'flex justify-center' : ''}`}>
                        <p className={`lg:text-lg md:text-base text-sm font-encode font-light text-[#ffffff] leading-relaxed ${
                          index === 2 ? 'max-w-2xl' : 'max-w-xl'
                        } border-l-2 border-[#306B99] pl-4`}>
                          {index === 0 && "Don&apos;t rely on guesswork. Access professional-grade fundamental data and advanced technical indicators in one place."}
                          {index === 1 && "Identify market opportunities with comprehensive analysis tools. Track trends and make informed investment decisions."}
                          {index === 2 && "Validate your investment ideas before execution. Leverage real-time data and expert insights for better outcomes."}
                        </p>
                      </div>

                    </div>
                    {/* 2nd Content positioning - Image Collection Section */}
                    <div className={`absolute z-40 inset-0 flex-col flex p-6 px-12 transition-all duration-1000 ${
                      index === 0 ? 'items-end justify-start' :
                      index === 1 ? 'items-end justify-end' :
                      'items-end justify-end'
                    }`}>
                      <div className="max-w-md w-full">
                      {/* Gallery Container with glassmorphism */}
                      <div className="relative bg-[#0D1325]/40 backdrop-blur-md rounded-2xl p-6 border border-[#B28D41]/30 shadow-2xl">
                        
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#E9D37E] rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#E9D37E] rounded-br-2xl" />
                        
                        {/* Gallery Title */}
                        {/* Feature highlight strip */}
                        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#B28D41]/20 via-[#306B99]/20 to-[#E9D37E]/20 p-4 border border-[#E9D37E]/30 pointer-events-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#E9D37E] rounded-full animate-pulse pointer-events-none" />
                          <span className="text-xs font-encode z-50 cursor-pointer hover:scale-105 transition-transform duration-300 font-medium text-[#BBC0C7] pointer-events-auto">
                            Real-time market data visualization
                          </span>
                          </div>
                          <svg className="w-5 h-5 text-[#B28D41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        </div>

                        {/* Image Grid with staggered animation */}
                        <div className="grid grid-cols-2 lg:mt-2 gap-4 mb-4">
                        {[heroImage, heroImageI].map((img, idx) => (
                          <div 
                          key={idx}
                          className="group relative aspect-square overflow-hidden rounded-xl border-2 border-[#306B99]/50 hover:border-[#B28D41] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(178,141,65,0.3)]"
                          >
                          <Image 
                            src={img} 
                            alt={`Gallery ${idx + 1}`}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1325]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E9D37E]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          
                          {/* Index badge */}
                          <div className="absolute top-2 right-2 w-8 h-8 bg-[#B28D41]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bowlby text-xs border border-[#E9D37E]/50">
                            {idx + 1}
                          </div>
                          </div>
                        ))}
                        </div>


                      </div>
                      </div>
                    </div>

               </div>
                </div>
              ))}
            </div>
        </div>


        <div className="relative z-40 flex  inset-0 h-[135vh]">
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
          <div className="absolute bg-gradient-to-t from-black via-black to-transparent z-50 w-full h-full" />
          <div className="absolute bg-gradient-to-b from-black via-black/45 to-transparent z-50 w-full h-full" />

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
                          <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]" />
                          <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]" />
                        </div>
                        <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                      </div>
                      <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                        }}>
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                          style={{
                            boxShadow: 'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
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
                          <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]" />
                          <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]" />
                        </div>
                        <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                      </div>
                      <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                        }}>
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                          style={{
                            boxShadow: 'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
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
                          <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]" />
                          <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]" />
                        </div>
                        <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                      </div>
                      <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                        }}>
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                          style={{
                            boxShadow: 'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
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
                          <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]" />
                          <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]" />
                        </div>
                        <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                      </div>
                      <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                        }}>
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                          style={{
                            boxShadow: 'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
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
                          <div className="absolute bg-amber-600 -top-4 rounded-full w-[40%] h-[1rem]" />
                          <h3 className="text-3xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPREHENSIVE
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">COMPANY</h3>
                            <h3 className="text-5xl flex flex-col font-normal font-bowlby text-black group-hover:text-gray-800 transition-colors duration-300">PROFILES</h3>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-12 rounded-full w-[50%] h-[1rem]" />
                        </div>
                        <p className="text-black text-sm font-encode font-extrathin md:mt-3 md:w-[80%]">Everything you need to analyze companies, visualize data analyze companies.</p>
                      </div>
                      <div className="relative w-64 h-[80%] rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
                        }}>
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 h-full"
                          style={{
                            boxShadow: 'inset 0 10px 20px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.38)'
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
                OUR||||||||||||||||||||||||||||||||||||<div className="relative flex bg-white w-full" />
              </h2>
              <h2 className="absolute font-bowlby md:text-[6rem] bottom-0   md:ml-12 font-white">
                FEATURES
              </h2>
            </div>

            <div className="relative flex md:mt-12 h-auto w-[80%]">
              <h2 className="flex font-encode bottom-24 md:text-2xl md:mt-20 md:ml-12 font-white"
                style={{
                  fontWeight: '100'
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
