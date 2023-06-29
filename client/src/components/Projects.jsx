import React, { useState } from "react";
import light from '../../public/lightOne.png'
import dark from '../../public/darkOne.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import tail from '../../public/tailwind.png'
import express from '../../public/express.png'
import mongo from '../../public/mongo.png'
import { faArrowRightLong, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div className="flex flex-col w-full gap-10 p-8 ">
            <div className="">
                <h2 className="text-4xl text-white text-opacity-75 font-paytone tracking-wide uppercase self-start "> Projects</h2>
            </div>
 
                
                <div className="flex justify-between items-center gap-12 ">

                    <div className="w-2/3 flex flex-col gap-4  p-4 pl-8 py-8">
                        <h2 
                            className="text-xl text-zinc-300 font-light flex ">
                                BattleOptions (STAT Analytics) 
                                <span 
                                    className="bg-pink-600 self-center border-r-4 border-b-4 border-zinc-950 rounded-full text-xs font-light text-zinc-900 tracking-wider py-1 px-3 ml-4"
                                >
                                    Full-Stack
                                </span>
                        </h2>
                        <span className="text-white text-opacity-50 font-light text-base leading-6">
                        This project automated a complex, hands-on options chain contest, replacing an inefficient Excel spreadsheet with a real-time platform. The system dramatically increased efficiency, freeing company resources for core operations. A dynamic leaderboard, updating every five minutes, combined with comprehensive entry-based statistics and stock market comparisons, enhanced user engagement and created a high potential for lead generation. The addition of an all-time leaderboard incentivized consistent performance, fostering long-term user commitment. This streamlined solution not only addressed operational efficiency but also promoted user interaction and business development.
                        </span>
                        <div className="mt-4 flex  justify-between">
                            <a 
                                href="https://contest.stratalerts.com/" 
                                target="_blank" 
                                className="rounded-full uppercase bg-green-500 w-40 h-12 text-zinc-800 text-sm font-semibold hover:bg-green-600 flex items-center justify-center group border-1 border-zinc-950 border-r-4 border-b-4"
                            >
                                Visit site 
                                <FontAwesomeIcon 
                                    icon={faArrowRightLong} 
                                    className=" ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" 
                                />
                            </a>
                            <ul className="flex gap-4 items-center"> 
                            <li><FontAwesomeIcon icon={faReact} className="h-6 w-6 text-sky-500" /></li>
                            <li><FontAwesomeIcon icon={faNodeJs} className="h-6 w-6 text-green-500" /></li>
                            <li><img src={express} className="h-6 w-6 opacity-80" /></li>
                            <li><img src={mongo} className="h-6 w-6 opacity-70" /></li>
                            <li><img src={tail} className="h-6 w-6 opacity-80" /></li>
                        </ul>
                        
                        </div>
                    </div>
                    <div 
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="w-1/2  relative"
                            style={{ height: '400px' }} 
                        >
                            <img 
                                src={light} 
                                className={`absolute top-0 left-0 h-full brightness-75  p-1 border-zinc-800 rounded-xl object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
                            />
                            <img 
                                src={dark} 
                                className={`absolute top-0 left-0 h-full p-1 border-zinc-800  rounded-xl object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                            />
                    </div>
         
            </div>
        </div>
    );
}

export default Projects;
