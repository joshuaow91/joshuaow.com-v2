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
        <div className="flex flex-col">
            <div className="">
                <h2 className="text-4xl text-stone-400 font-paytone tracking-wide uppercase self-start "> <FontAwesomeIcon icon={faBriefcase} className="text-zinc-500 mr-4" />Projects</h2>
            </div>
            <div className="flex flex-col gap-8 mt-10 mb-10 border-1 border-zinc-950 bg-zinc-800 border-r-8 border-b-8 rounded-3xl">
                <div className="flex justify-between items-center gap-8 ">
                    <div className="w-2/3 flex flex-col gap-4  p-4 pl-8 py-8">
                        <h2 
                            className="text-xl text-zinc-300 font-light flex ">
                                BattleOptions (STAT Analytics) 
                                <span 
                                    className="bg-slate-600 self-center rounded-full text-xs font-light text-zinc-300 tracking-wider py-1 px-3 ml-4"
                                >
                                    Full-Stack
                                </span>
                        </h2>
                        <span className="text-white text-opacity-40 font-light text-base leading-7">
                        This project automated a complex, hands-on options chain contest, replacing an inefficient Excel spreadsheet with a real-time platform. The system dramatically increased efficiency, freeing company resources for core operations. A dynamic leaderboard, updating every five minutes, combined with comprehensive entry-based statistics and stock market comparisons, enhanced user engagement and created a high potential for lead generation. The addition of an all-time leaderboard incentivized consistent performance, fostering long-term user commitment. This streamlined solution not only addressed operational efficiency but also promoted user interaction and business development.
                        </span>
                        <div className="mt-4 flex justify-between">
                            <a 
                                href="https://contest.stratalerts.com/" 
                                target="_blank" 
                                className="bg-rose-500 hover:bg-rose-600 w-32 h-9 flex items-center justify-center rounded-full font-semibold text-sm text-zinc-800 group"
                            >
                                Visit site 
                                <FontAwesomeIcon 
                                    icon={faArrowRightLong} 
                                    className=" ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" 
                                />
                            </a>
                            <ul className="flex gap-4"> 
                            <li><FontAwesomeIcon icon={faReact} className="h-6 w-6 text-zinc-300" /></li>
                            <li><FontAwesomeIcon icon={faNodeJs} className="h-6 w-6 text-zinc-300" /></li>
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
                            src={dark} 
                            className={`absolute top-0 left-0 h-full border-2 p-1 border-zinc-800 bg-zinc-600 rounded-xl object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
                        />
                        <img 
                            src={light} 
                            className={`absolute top-0 left-0 h-full border-2 p-1 border-zinc-800 bg-zinc-200 rounded-xl object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
