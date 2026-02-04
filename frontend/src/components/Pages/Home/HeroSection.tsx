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
import ScrollVelocity from '@/components/Ui/ScrollVelocity';
import { useEffect, useRef, useState } from "react";




//data sets
const serviceDetails = [

  {
    tag: "In-Depth Financial Report Analysis",
    desc: "Unlock the full potential of corporate filings with our sophisticated analysis engine. We go beyond surface-level numbers to dissect complex balance sheets, income statements, and cash flow reports. By identifying underlying trends and accounting nuances, we provide investors with a crystal-clear understanding of a company's operational efficiency and long-term financial health.",
    features: [
      "Complex Statement Dissection",
      "Trend Identification",
      "Accounting Nuance Detection",
      "Operational Efficiency Metrics"
    ]
  },
  {
    tag: "Interactive Financial Charts & Visuals",
    desc: "Transform raw data into actionable insights through our suite of high-performance interactive visualizations. Our charting tools allow you to overlay multiple technical indicators, compare historical price movements, and visualize volume patterns with precision. Whether you are performing trend analysis or volatility checks, these dynamic visuals make complex market movements intuitive and easy.",
    features: [
      "Multi-Indicator Overlays",
      "Historical Price Comparison",
      "Volume Pattern Visualization",
      "Dynamic Trend Analysis"
    ]
  },
  {
    tag: "100+ Automated Financial Calculations",
    desc: "Eliminate the risk of manual entry errors and drastically reduce your research time with our comprehensive calculation suite. We automatically process over one hundred critical financial metrics, including specialized margin analysis and growth rates. This automation ensures that you spend less time on spreadsheets and more time making high-level strategic investment decisions.",
    features: [
      "Critical Metric Processing",
      "Margin & Growth Analysis",
      "Risk Verification Automation",
      "Strategic Decision Support"
    ]
  },
  {
    tag: "Intrinsic Company Valuations",
    desc: "Determine the true worth of any asset using our institutional-grade valuation models. By utilizing Advanced Discounted Cash Flow (DCF) analysis and Multi-Stage Growth models, we calculate the intrinsic value of a business based on its future earning potential. This helps you identify undervalued opportunities and maintain a strict margin of safety in your portfolio.",
    features: [
      "Advanced DCF Models",
      "Multi-Stage Growth Analysis",
      "Earning Potential Calculation",
      "Undervalued Opportunity Scanner"
    ]
  },
  {
    tag: "Advanced Ratio Analysis",
    desc: "Gain a competitive edge by deep-diving into the core ratios that drive market performance. Our platform calculates advanced profitability, liquidity, solvency, and efficiency ratios in real-time. By comparing these figures against industry benchmarks and historical averages, you can pinpoint a company's competitive advantages or uncover hidden red flags before they impact the market.",
    features: [
      "Profitability & Liquidity Checks",
      "Solvency & Efficiency Ratios",
      "Industry Benchmark Comparison",
      "Red Flag Detection"
    ]
  }, {
    tag: "Comprehensive Company Profiles",
    desc: "Access a centralized intelligence hub for every company in your watch list. Our profiles aggregate everything from executive leadership data and ownership structures to historical performance and sector positioning. This holistic view provides the context necessary to understand not just where a company is today, but where it is strategically headed in the future.",
    features: [
      "Executive Leadership & Ownership",
      "Historical Performance Data",
      "Sector & Industry Positioning",
      "Strategic Direction Insights"
    ]
  }
];




const videoSections = [
  { src: "/heroSection.mp4" },
  { src: "/heroSection.mp4" },
  { src: "/heroSection.mp4" },
  { src: "/heroSection.mp4" }
];

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create an extended array with the first slide duplicated at the end for the loop effect
  const extendedVideoSections = [...videoSections, videoSections[0]];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceDetails.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Handle the infinite loop reset
  useEffect(() => {
    if (currentVideoIndex === videoSections.length) {
      // We are on the cloned last slide (visually the first slide)
      // Wait for the transition to complete, then snap back to the true first slide
      const timer = setTimeout(() => {
        setIsTransitioning(false); // Disable transition
        setCurrentVideoIndex(0); // Snap to index 0

        // Re-enable transition after a brief delay to allow the snap to render
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 1000); // 1000ms matches the duration-1000 class

      return () => clearTimeout(timer);
    }
  }, [currentVideoIndex]);

  return (

    /* Main Section */
    <div className="relative h-screen sm:h-[130vh] md:h-[200vh] lg:h-[200vh] w-full bg-transparent">

      {/* Lower div Section for 2 sections */}

      <div className="absolute flex-col flex z-40 h-auto w-full overflow-hidden">
        <div className="group relative  flex overflow-hidden inset-0 h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh]">
          <div
            className={`flex w-full h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
          >
            {extendedVideoSections.map((video, index) => {
              // Determine the logical index for content (mod the original length so the clone maps to 0)
              const logicalIndex = index % videoSections.length;

              return (
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
                  <div className="absolute z-30 bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                    {videoSections.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setIsTransitioning(true);
                          setCurrentVideoIndex(idx);
                        }}
                        className={`transition-all duration-500 rounded-full ${idx === (currentVideoIndex % videoSections.length)
                          ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-[#B28D41]'
                          : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/40 hover:bg-white/60'
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Animated particles overlay */}
                  <div className="absolute z-40 inset-0 pointer-events-none">
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
                    className={`absolute z-30 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full blur-2xl sm:blur-3xl transition-all duration-1000 ${logicalIndex === 0 ? 'bg-[#B28D41]/20 -top-10 sm:-top-16 md:-top-20 -right-10 sm:-right-16 md:-right-20' :
                      logicalIndex === 1 ? 'bg-[#E9D37E]/20 -bottom-10 sm:-bottom-16 md:-bottom-20 -left-10 sm:-left-16 md:-left-20' :
                        'bg-[#306B99]/20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
                      }`}
                  />

                  {/* Content positioning */}
                  <div className={`absolute z-50 inset-0 flex-col flex p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-1000 ${logicalIndex === 0 ? 'items-start justify-start' :
                    logicalIndex === 1 ? 'items-end justify-start' :
                      logicalIndex === 2 ? 'items-center justify-start' :
                        'items-center justify-center'
                    }`}>

                    {/* 1st Content positioning - Text/heading Section */}
                    <div className={`max-w-5xl z-40 ${logicalIndex === 2 ? 'text-center' : 'text-start'}`}>
                      {/* Main headline */}
                      <div className="">
                        <h2 className={`text-3xl sm:text-5xl ${logicalIndex === 0 ? 'md:text-6xl lg:text-9xl' : logicalIndex === 1 ? 'md:text-5xl lg:text-9xl' : logicalIndex === 2 ? 'md:text-5xl lg:text-9xl' : 'md:text-5xl lg:text-9xl'} font-fugaz font-normal  ${logicalIndex === 0 ? 'text-[#e6c029]' :
                          logicalIndex === 1 ? 'text-[#B28D41]' :
                            logicalIndex === 2 ? 'text-[#e6c029]' :
                              'text-[#E3E4E6]'
                          }`}>
                          {logicalIndex === 0 && "COMPLETE"}
                          {logicalIndex === 1 && "MASTER"}
                          {logicalIndex === 2 && "TIMING"}
                          {logicalIndex === 3 && "MASTER"}

                        </h2>
                      </div>

                      {/* Sub headline with accent line */}
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                        <div className="h-0.5 sm:h-1 w-6 sm:w-8 md:w-12 bg-[#B28D41]" />
                        <h3 className={`flex text-sm sm:text-lg ${logicalIndex === 0 ? 'md:text-3xl lg:text-4xl' : logicalIndex === 1 ? 'md:text-2xl lg:text-4xl' : logicalIndex === 2 ? 'md:text-2xl lg:text-4xl' : 'md:text-2xl lg:text-4xl'} bg-[#0D1325] rounded-lg sm:rounded-xl md:rounded-2xl p-1 px-2 sm:p-2 sm:px-3 md:px-4 border sm:border-2 font-bowlby text-[#BBC0C7]`}>
                          {logicalIndex === 0 && "MARKET"}
                          {logicalIndex === 1 && "THE"}
                          {logicalIndex === 2 && "IS"}
                          {logicalIndex === 3 && "THE"}
                        </h3> <h2 className={`text-lg sm:text-2xl ${logicalIndex === 0 ? 'md:text-4xl lg:text-6xl' : logicalIndex === 1 ? 'md:text-3xl lg:text-6xl' : logicalIndex === 2 ? 'md:text-3xl lg:text-6xl' : 'md:text-3xl lg:text-6xl'} font-fugaz font-bold text-[#E3E4E6] font-normal`}>
                          {logicalIndex === 0 && "INTELLIGENCE"}
                          {logicalIndex === 1 && "FUNDAMENTALS"}
                          {logicalIndex === 2 && "EVERYTHING"}
                          {logicalIndex === 3 && "FUNDAMENTALS"}
                        </h2>
                      </div>

                      {/* Secondary headline */}


                      {/* Description text */}
                      <div className={`${logicalIndex === 2 ? 'flex justify-center' : ''}`}>
                        <p className={`text-xs sm:text-sm md:text-base lg:text-lg font-encode font-light text-[#ffffff] leading-relaxed ${logicalIndex === 2 ? 'max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl' : 'max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl'
                          } border-l sm:border-l-2 border-[#306B99] pl-2 sm:pl-3 md:pl-4`}>
                          {logicalIndex === 0 && "Don't rely on guesswork. Access professional-grade fundamental data and advanced technical indicators in one place."}
                          {logicalIndex === 1 && "See the true picture behind the ticker. Instantly visualize balance sheets, cash flow, and intrinsic value to determine if a company is truly a healthy business."}
                          {logicalIndex === 2 && "Know exactly when to look. Our proprietary Buy & Sell Sensors analyze momentum and technical patterns to highlight potential entry and exit points on the chart."}
                          {logicalIndex === 3 && "See the true picture behind the ticker. Instantly visualize balance sheets, cash flow, and intrinsic value to determine if a company is truly a healthy business."}

                        </p>
                      </div>

                    </div>
                    {/* 2nd Content positioning - Image Collection Section */}
                    <div className={`absolute z-40 inset-0 flex-col ${logicalIndex === 2 ? 'hidden' : 'hidden md:flex'} flex p-4 px-6 sm:p-6 sm:px-8 md:px-12 transition-all duration-1000 ${logicalIndex === 0 ? 'items-end justify-start' :
                      logicalIndex === 1 ? 'items-start justify-start' :
                        'items-end justify-end'
                      }`}>
                      <div className="max-w-xs sm:max-w-sm md:max-w-md w-full">
                        {/* Gallery Container with glassmorphism */}
                        <div className="relative bg-[#0D1325]/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-[#B28D41]/30 shadow-2xl">

                          {/* Decorative corner accents */}
                          <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t sm:border-t-2 border-l sm:border-l-2 border-[#E9D37E] rounded-tl-xl sm:rounded-tl-2xl" />
                          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b sm:border-b-2 border-r sm:border-r-2 border-[#E9D37E] rounded-br-xl sm:rounded-br-2xl" />

                          {/* Gallery Title */}
                          {/* Feature highlight strip */}
                          <div className="relative overflow-hidden rounded-md sm:rounded-lg bg-gradient-to-r from-[#B28D41]/20 via-[#306B99]/20 to-[#E9D37E]/20 p-2 sm:p-3 md:p-4 border border-[#E9D37E]/30 pointer-events-auto">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E9D37E] rounded-full animate-pulse pointer-events-none" />
                                <span className="text-[10px] sm:text-xs font-encode z-50 cursor-pointer hover:scale-105 transition-transform duration-300 font-medium text-[#BBC0C7] pointer-events-auto">
                                  Real-time market data visualization
                                </span>
                              </div>
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#B28D41]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>

                          {/* Image Grid with staggered animation */}
                          <div className="grid grid-cols-2 mt-2 sm:mt-2 lg:mt-2 gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                            {[heroImage, heroImageI].map((img, idx) => (
                              <div
                                key={idx}
                                className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl border sm:border-2 border-[#306B99]/50 hover:border-[#B28D41] transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(178,141,65,0.3)]"
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
                                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#B28D41]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bowlby text-[10px] sm:text-xs border border-[#E9D37E]/50">
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
              )
            }
            )}
          </div>
        </div>


        <div className="relative z-40 flex inset-0 h-[50vh] sm:h-[70vh] md:h-[130vh]">
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
          <div className="absolute bg-gradient-to-t py-20 from-[#0b1534] via-[#0D1425] to-transparent z-50 w-full h-full" />
          <div className="absolute bg-gradient-to-b from-black via-black/45 to-transparent z-50 w-full h-full" />

          {/* Sliding Menu for the Services */}
          <div className="hidden md:block absolute z-50 w-full h-full">
            <div className=" sm:mt-32 md:mt-40 lg:mt-96" style={{ height: '400px', position: 'relative' }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <div className="relative h-full bg-[#121C33] backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                    <div className="absolute z-10 flex w-auto h-12 bg-blue-600 top-0 left-0">
                      <div className="flex text-xs font-encode font-semibold items-center ml-2 px-4 text-white">
                        BUYZONLABS - Features
                      </div>
                    </div>

                    <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-center justify-between h-full p-8 space-x-6">

                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex-1 relative space-y-1 sm:space-y-2 md:space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          <div className="absolute bg-amber-600 -top-2 sm:-top-3 md:-top-4 rounded-full w-[40%] h-2 sm:h-3 md:h-2" />
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl flex flex-col font-normal font-fugaz text-white group-hover:text-blue-300 transition-colors duration-300">COMPREHENSIVE
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">COMPANY</span>
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">PROFILES</span>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-6 sm:right-8 md:right-12 rounded-full w-[50%] h-2 sm:h-3 md:h-2" />
                        </div>
                      </div>
                      <div className="relative sm:w-40 md:w-52 lg:w-[40%]  sm:h-40 md:h-52 lg:h-[80%] rounded-xl sm:rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-900/50">
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border-2 border-blue-400/50 h-full" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="relative h-full bg-[#121C33] backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                    <div className="absolute z-10 flex w-auto h-8 sm:h-10 md:h-12 bg-blue-600 top-0 left-0">
                      <div className="flex text-[10px] sm:text-xs font-encode font-semibold items-center ml-1 sm:ml-2 px-2 sm:px-3 md:px-4 text-white">
                        BUYZONLABS - Features
                      </div>
                    </div>

                    <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">

                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex-1 relative space-y-1 sm:space-y-2 md:space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          <div className="absolute bg-amber-600 -top-2 sm:-top-3 md:-top-4 rounded-full w-[40%] h-2 sm:h-3 md:h-2" />
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl flex flex-col font-normal font-fugaz text-white group-hover:text-blue-300 transition-colors duration-300">IN-DEPTH
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">FINANCIAL</span>
                            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-blue-300 transition-colors duration-300">REPORT_ANALYSIS</span>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-6 sm:right-8 md:right-12 rounded-full w-[50%] h-2 sm:h-3 md:h-2" />
                        </div>
                      </div>
                      <div className="relative lg:w-[40%] sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 lg:h-[80%] rounded-xl sm:rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-900/50">
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border sm:border-2 border-blue-400/50 h-full" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="relative h-full bg-[#121C33] backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                    <div className="absolute z-10 flex w-auto h-8 sm:h-10 md:h-12 bg-blue-600 top-0 left-0">
                      <div className="flex text-[10px] sm:text-xs font-encode font-semibold items-center ml-1 sm:ml-2 px-2 sm:px-3 md:px-4 text-white">
                        BUYZONLABS - Features
                      </div>
                    </div>

                    <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">

                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex-1 relative space-y-1 sm:space-y-2 md:space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          <div className="absolute bg-amber-600 -top-2 sm:-top-3 md:-top-4 rounded-full w-[40%] h-2 sm:h-3 md:h-2" />
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl flex flex-col font-normal font-fugaz text-white group-hover:text-blue-300 transition-colors duration-300">INTERACTIVE
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">FINANCIAL</span>
                            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-blue-300 transition-colors duration-300">CHARTS_VISUALS</span>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-6 sm:right-8 md:right-12 rounded-full w-[50%] h-2 sm:h-3 md:h-2" />
                        </div>
                      </div>
                      <div className="relative  sm:w-40 md:w-52 lg:w-[40%] h-32 sm:h-40 md:h-52 lg:h-[80%] rounded-xl sm:rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-900/50">
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border sm:border-2 border-blue-400/50 h-full" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="relative h-full bg-[#121C33] backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                    <div className="absolute z-10 flex w-auto h-8 sm:h-10 md:h-12 bg-blue-600 top-0 left-0">
                      <div className="flex text-[10px] sm:text-xs font-encode font-semibold items-center ml-1 sm:ml-2 px-2 sm:px-3 md:px-4 text-white">
                        BUYZONLABS - Features
                      </div>
                    </div>

                    <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">

                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex-1 relative space-y-1 sm:space-y-2 md:space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          <div className="absolute bg-amber-600 -top-2 sm:-top-3 md:-top-4 rounded-full w-[40%] h-2 sm:h-3 md:h-2" />
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl flex flex-col font-normal font-fugaz text-white group-hover:text-blue-300 transition-colors duration-300">100+_AUTOMATED
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">FINANCIAL</span>
                            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-blue-300 transition-colors duration-300">CALCULATIONS</span>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-6 sm:right-8 md:right-12 rounded-full w-[50%] h-2 sm:h-3 md:h-2" />
                        </div>
                      </div>
                      <div className="relative sm:w-40 md:w-52 lg:w-[40%] h-32 sm:h-40 md:h-52 lg:h-[80%] rounded-xl sm:rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-900/50">
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border sm:border-2 border-blue-400/50 h-full" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="relative h-full bg-[#121C33] backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                    <div className="absolute z-10 flex w-auto h-8 sm:h-10 md:h-12 bg-blue-600 top-0 left-0">
                      <div className="flex text-[10px] sm:text-xs font-encode font-semibold items-center ml-1 sm:ml-2 px-2 sm:px-3 md:px-4 text-white">
                        BUYZONLABS - Features
                      </div>
                    </div>

                    <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">

                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex-1 relative space-y-1 sm:space-y-2 md:space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          <div className="absolute bg-amber-600 -top-2 sm:-top-3 md:-top-4 rounded-full w-[40%] h-2 sm:h-3 md:h-2" />
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl flex flex-col font-normal font-fugaz text-white group-hover:text-blue-300 transition-colors duration-300">INTRINSIC
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">COMPANY</span>
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">VALUATIONS</span>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-6 sm:right-8 md:right-12 rounded-full w-[50%] h-2 sm:h-3 md:h-2" />
                        </div>
                      </div>
                      <div className="relative  sm:w-40 md:w-52 lg:w-[40%] h-32 sm:h-40 md:h-52 lg:h-[80%] rounded-xl sm:rounded-2xl overflow-hidden transform group-hover:scale-100 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-900/50">
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border sm:border-2 border-blue-400/50 h-full" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="relative h-full bg-[#121C33] backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">

                    <div className="absolute z-10 flex w-auto h-8 sm:h-10 md:h-12 bg-blue-600 top-0 left-0">
                      <div className="flex text-[10px] sm:text-xs font-encode font-semibold items-center ml-1 sm:ml-2 px-2 sm:px-3 md:px-4 text-white">
                        BUYZONLABS - Features
                      </div>
                    </div>

                    <div className="absolute z-40 inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">

                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex-1 relative space-y-1 sm:space-y-2 md:space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                          <div className="absolute bg-amber-600 -top-2 sm:-top-3 md:-top-4 rounded-full w-[40%] h-2 sm:h-3 md:h-2" />
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl flex flex-col font-normal font-fugaz text-white group-hover:text-blue-300 transition-colors duration-300">ADVANCED
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">RATIOS</span>
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-blue-200 transition-colors duration-300">ANALYSIS</span>
                          </h3>
                          <div className="absolute bg-amber-600 -bottom-1 right-6 sm:right-8 md:right-12 rounded-full w-[50%] h-2 sm:h-3 md:h-2" />
                        </div>
                      </div>
                      <div className="relative  sm:w-40 md:w-52 lg:w-[40%] h-32 sm:h-40 md:h-52 lg:h-[80%] rounded-xl sm:rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-blue-900/50">
                        <Image src={heroImage} alt="Stock Market Analysis" className="object-cover border sm:border-2 border-blue-400/50 h-full" />
                      </div>
                    </div>
                  </div>
                </Card>

              </CardSwap>
            </div>

          </div>

          {/* texting area for the Feature section */}
          <div className="absolute z-50 lg:-top-12 border-white h-full hidden md:flex items-center bg-transparent w-full md:w-[50%] lg:w-[50%] h-f">

            <div className="relative flex h-auto w-auto">
              <div className="absolute">
                <h2 className="absolute flex font-bowlby bottom-16 sm:bottom-20 md:bottom-24 text-xl sm:text-2xl md:text-[2rem] lg:text-[3rem] ml-6 sm:ml-8 md:ml-12 font-white">
                  OUR||||||||||||||||||||||||||||||||||||<div className="relative flex bg-white w-full" />
                </h2>
              </div>
              <h2 className="absolute font-bowlby text-3xl sm:text-4xl md:text-[4rem] lg:text-[6rem] bottom-0 ml-6 sm:ml-8 md:ml-12 font-white">
                FEATURES
              </h2>
            </div>

            <div className="relative flex mt-8 sm:mt-10 md:mt-20 h-auto w-[85%] sm:w-[82%] md:w-[80%]">
              <h2 className="flex font-encode bottom-16 sm:bottom-20 md:bottom-24 text-sm sm:text-base md:text-lg lg:text-2xl mt-12 sm:mt-16 md:mt-20 ml-6 sm:ml-8 md:ml-12 font-white"
                style={{
                  fontWeight: '100'
                }}>
                Everything you need to analyze companies, visualize data, and make smarter investment decisions.Everything you need to analyze companies, visualize data, and make smarter investment decisions.
              </h2>
            </div>




          </div>



          {/* detail preview section */}

          <div className="absolute z-50 bottom-0 left-12 h-full md:p-0 hidden md:flex justify-center items-start bg-transparent md:w-[50%] lg:w-[50%] lg:h-[50vh]">
            <div
              className="relative backdrop-blur-sm flex flex-col h-full w-full p-8 transition-all duration-500"
              style={{ boxShadow: 'inset 0px 10px 20px rgba(0,0,0,0.0)' }}
            >

              {/* Dynamic Content Container */}
              <div
                key={activeIndex}
                className="relative h-full animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
              >

                {/* 1. The Decorative Line (The border) 
            Changed generic border to a glowing blue accent bar */}
                <div className="absolute left-0 top-2 bottom-1/3 w-[3px] bg-gradient-to-b from-blue-500 via-blue-400/50 to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

                {/* 2. The Tag 
            Added glassmorphism, a subtle border, and a glow effect */}
                <div className="absolute left-6 -top-1">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-400/30 backdrop-blur-md text-white font-normal font-fugaz text-[10px] tracking-[0.2em] uppercase shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
                    {serviceDetails[activeIndex].tag}
                  </span>
                </div>


                <div className="pl-6 pt-12 lg:pt-12">
                  <p className="font-encode font-light text-sm text-blue-50/90 leading-relaxed tracking-wide drop-shadow-sm text-pretty mb-6">
                    {serviceDetails[activeIndex].desc}
                  </p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {serviceDetails[activeIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 group">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-400/80 group-hover:bg-amber-400 transition-colors duration-300 shadow-[0_0_5px_rgba(96,165,250,0.6)]" />
                        <span className="text-[11px] sm:text-xs font-encode text-blue-200/80 group-hover:text-blue-100 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>


                  <div className="mt-6 w-12 h-0.5 bg-blue-500/30 rounded-full" />
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Upper I div Section */}
      <div className="absolute z-40 w-full h-screen bg-transparent overflow-hidden">
        <div className="absolute z-40 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] bg-black bottom-8 sm:bottom-16 md:bottom-8 rounded-xl sm:rounded-3xl left-1/2 overflow-hidden -translate-x-1/2 h-[40vh] sm:h-[35vh] md:h-[40vh] border sm:border-2 shadow-[inset_0px_19px_20px_rgba(255,255,255,0.4)]">


        </div>
      </div>


      {/* Below Line Section */}
      <div className="absolute z-40  bottom-0 w-full h-2 bg-gradient-to-l from-blue-500 via-blue-400/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.9)]" />



    </div>
  );
}
