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
                              <div className="relative h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">
                                  <div className="flex-1 space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">Real-Time Market Analysis</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">Advanced AI algorithms analyze market trends and provide accurate predictions</p>
                                  </div>
                                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                                    <Image src={heroImage} alt="Stock Market Analysis" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent" />
                                  </div>
                                </div>
                              </div>
                            </Card>
                            <Card>
                              <div className="relative h-full bg-gradient-to-bl from-emerald-900/20 to-teal-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">
                                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-2xl">
                                    <Image src={heroImageI} alt="Predictive Insights" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/40 to-transparent" />
                                  </div>
                                  <div className="flex-1 space-y-3 transform group-hover:-translate-x-2 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">Predictive Insights</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">Get data-driven predictions to make informed investment decisions</p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                            <Card>
                              <div className="relative h-full bg-gradient-to-tr from-amber-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col h-full p-8 space-y-4">
                                  <div className="relative w-full h-48 rounded-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
                                    <Image src={heroImage} alt="Portfolio Management" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent" />
                                  </div>
                                  <div className="flex-1 space-y-3 transform group-hover:translate-y-1 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">Smart Portfolio Management</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">Optimize your investment portfolio with AI-powered recommendations</p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                            <Card>
                              <div className="relative h-full bg-gradient-to-tl from-rose-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-rose-500/30 hover:border-rose-400/60 transition-all duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-l from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col h-full p-8 space-y-4">
                                  <div className="flex-1 space-y-3 transform group-hover:-translate-y-1 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-rose-300 transition-colors duration-300">Risk Assessment</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">Evaluate market risks and protect your investments with intelligent alerts</p>
                                  </div>
                                  <div className="relative w-full h-48 rounded-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
                                    <Image src={heroImageI} alt="Risk Assessment" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-rose-900/60 via-transparent to-transparent" />
                                  </div>
                                </div>
                              </div>
                            </Card>
                            <Card>
                              <div className="relative h-full bg-gradient-to-br from-violet-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center h-full p-8 space-x-6">
                                  <div className="flex-1 space-y-3 transform group-hover:translate-x-2 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">Historical Trends</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">Access comprehensive historical data and identify profitable patterns</p>
                                  </div>
                                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                                    <Image src={heroImage} alt="Market Trends" className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-tl from-violet-600/40 to-transparent" />
                                  </div>
                                </div>
                              </div>
                            </Card>
                            <Card>
                              <div className="flex flex-col items-center justify-center p-6 space-y-4 hover:scale-105 transition-transform duration-300">
                              <div className="relative w-full h-48 rounded-lg overflow-hidden group">
                                <Image
                                src={heroImage}
                                alt="Stock Market Analysis"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <h3 className="text-2xl font-bold text-white animate-fade-in">Real-Time Market Analysis</h3>
                              <p className="text-gray-300 text-center animate-fade-in-delay">Advanced AI algorithms analyze market trends and provide accurate predictions</p>
                              </div>
                            </Card>

                            
                          </CardSwap>
                        </div>

                      </div>

                    <div className="absolute z-50 top-0  bg-orange-400 w-[50%] h-f">
                            
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

    </div>
  );
}
