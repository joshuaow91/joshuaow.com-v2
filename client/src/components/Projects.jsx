import React, { useState } from "react";
import light from '../../public/lightOne.png'
import dark from '../../public/darkOne.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import tail from '../../public/tailwind.png'
import express from '../../public/express.png'
import mongo from '../../public/mongo.png'
import { faArrowRightLong, faFolder } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div className="flex flex-col  w-full gap-10 p-8 pl-12 ">
            <div className="flex justify-center border-b pb-5 border-zinc-800">
                <h2 className="text-4xl text-white text-opacity-75 font-paytone tracking-wide uppercase self-start "> <FontAwesomeIcon icon={faFolder} className="mr-2 text-cyan-500" /> Projects</h2>
            </div>
 
                
                <div className="flex flex-row-reverse justify-between items-center gap-4 ">

                    <div className="w-2/3 flex flex-col gap-4  p-4 pl-8 py-8">
                        <h2 
                            className="text-2xl text-zinc-300 font-light flex ">
                                BattleOptions (STAT Analytics) 
                                <span 
                                    className="bg-pink-300 self-center border-r-4 border-b-4 border-pink-700 rounded-full text-xs font-semibold text-zinc-900 tracking-wider py-1 px-3 ml-4"
                                >
                                    Full-Stack
                                </span>
                        </h2>
                        <ul className="flex gap-4 items-center">
                            <li className="text-zinc-300 text-opacity-50 uppercase tracking-wide text-sm">Tech Stack:</li>
                            <li><FontAwesomeIcon icon={faReact} className="h-6 w-6 text-sky-500" /></li>
                            <li><FontAwesomeIcon icon={faNodeJs} className="h-6 w-6 text-green-500" /></li>
                            <li><img src={express} className="h-6 w-6 opacity-80" /></li>
                            <li><img src={mongo} className="h-6 w-6 opacity-70" /></li>
                            <li><img src={tail} className="h-6 w-6 opacity-80" /></li>
                        </ul>
                        <span className="text-white text-opacity-60 font-light text-lg leading-7">
                        This project automated a complex, hands-on options chain contest, replacing an inefficient Excel spreadsheet with a real-time platform. The system dramatically increased efficiency, freeing company resources for core operations. A dynamic leaderboard, updating every five minutes, combined with comprehensive entry-based statistics and stock market comparisons, enhanced user engagement and created a high potential for lead generation. The addition of an all-time leaderboard incentivized consistent performance, fostering long-term user commitment. This streamlined solution not only addressed operational efficiency but also promoted user interaction and business development.
                        </span>
                        <div className="mt-4 flex  justify-between">
                            <a 
                                href="https://contest.stratalerts.com/" 
                                target="_blank" 
                                className="rounded-full uppercase bg-green-300 w-40 h-12 text-zinc-800 text-sm font-semibold flex items-center justify-center group border-1 border-green-700 border-r-4 border-b-4"
                            >
                                Visit site 
                                <FontAwesomeIcon 
                                    icon={faArrowRightLong} 
                                    className=" ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" 
                                />
                            </a>

                        
                        </div>
                    </div>
                    <div 
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="w-1/3 relative bg-zinc-500 rounded-3xl border-r-8 border-b-8 border-zinc-700"
                            style={{ height: '400px' }} 
                        >
                            <img 
                                src={dark} 
                                className={`absolute top-0 left-0 h-full p-1 px-4 rounded-xl object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
                            />
                            <img 
                                src={light} 
                                className={`absolute top-0 left-0 h-full p-1 px-4 rounded-xl object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                            />
                    </div>
         
            </div>
        </div>
    );
}

export default Projects;
