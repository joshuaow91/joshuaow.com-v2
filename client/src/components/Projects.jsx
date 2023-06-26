import React, { useState } from "react";
import light from '../../public/lightOne.png'
import dark from '../../public/darkOne.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import tail from '../../public/tailwind.png'
import express from '../../public/express.png'
import mongo from '../../public/mongo.png'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div className="flex flex-col gap-4 mt-10 mb-10">
            <div className="pl-6">
                <h2 className="text-2xl text-zinc-300 font-semibold self-start ">Recent Work</h2>
            </div>
        
            <div className="flex justify-between  bg-zinc-800 py-8 rounded-3xl">
                <div 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="w-1/2 rounded-lg relative"
                    style={{ height: '400px' }} 
                >
                    <img 
                        src={dark} 
                        className={`absolute top-0 left-0 w-full h-full object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
                    />
                    <img 
                        src={light} 
                        className={`absolute top-0 left-0 w-full h-full object-scale-down transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                    <h2 className="text-2xl text-zinc-300 font-semibold self-start ">BattleOptions</h2>
                    <ul className="flex gap-4">
                        <li><FontAwesomeIcon icon={faReact} className="h-6 w-6 text-zinc-300" /></li>
                        <li><FontAwesomeIcon icon={faNodeJs} className="h-6 w-6 text-zinc-300" /></li>
                        <li><img src={express} className="h-6 w-6 opacity-80" /></li>
                        <li><img src={mongo} className="h-6 w-6 opacity-70" /></li>
                        <li><img src={tail} className="h-6 w-6 opacity-80" /></li>
                    </ul>
                    <span className="text-white text-opacity-50 font-light text-lg pr-8">
                    This project automated a complex, hands-on options chain contest, replacing an inefficient Excel spreadsheet with a real-time platform. The system dramatically increased efficiency, freeing company resources for core operations. A dynamic leaderboard, updating every five minutes, combined with comprehensive entry-based statistics and stock market comparisons, enhanced user engagement and created a high potential for lead generation. The addition of an all-time leaderboard incentivized consistent performance, fostering long-term user commitment. This streamlined solution not only addressed operational efficiency but also promoted user interaction and business development.
                    </span>
                    <div className="">
                        <a href="" target="_blank">View site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
