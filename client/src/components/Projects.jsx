import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import light from '/testlight.avif';
import dark from '/testdark.avif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import tail from '/tailwind.png';
import express from '/express.png';
import mongo from '/mongo.png';
import { faArrowRightLong, faFolder, faLightbulb, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const [isLightMode, setLightMode] = useState(true);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            setLightMode(true);
        }
    }, [isInView]);

    const imageVariants = {
        hidden: { opacity: 0, rotate: 0, scale: 0 },
        visible: { opacity: 1, rotate: 360, scale: 1 },
    };

    return (
        <motion.div
            className="flex flex-col w-full gap-10 md:p-8 md:pl-12"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-center md:justify-start mx-4 md:mx-0 border-b pb-8 border-cyan-700">
                <h2 className="text-4xl text-white text-opacity-75 font-paytone tracking-wide uppercase self-start ">
                    <FontAwesomeIcon icon={faFolder} className="mr-2 text-cyan-500" /> Work
                </h2>
            </div>

            <div className="flex flex-col-reverse lg:flex-row-reverse  items-center gap-4 lg:ml-6 ">
                <div className="lg:w-1/2 flex flex-col gap-4 p-4 pl-8 py-8">
                    <h2 className="text-2xl text-zinc-300 font-light flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 xl:gap-0">
                        BattleOptions (STAT Analytics)
                        <span className="bg-pink-300 self-start sm:self-center lg:self-start xl:self-center border-r-4 border-b-4 border-pink-700 select-none rounded-full text-xs font-semibold text-zinc-900 tracking-wider py-1 px-3 sm:ml-4 lg:ml-0 xl:ml-4">
                            Full-Stack
                        </span>
                    </h2>
                    <ul className="flex gap-4 items-center">
                        <li className="text-zinc-300 text-opacity-50 uppercase tracking-wide text-sm">Tech Stack:</li>
                        <li>
                            <FontAwesomeIcon icon={faReact} className="h-6 w-6 text-sky-500" />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faNodeJs} className="h-6 w-6 text-green-500" />
                        </li>
                        <li>
                            <img src={express} className="h-6 w-6 opacity-80" alt="Express" />
                        </li>
                        <li>
                            <img src={mongo} className="h-6 w-6 opacity-70" alt="MongoDB" />
                        </li>
                        <li>
                            <img src={tail} className="h-6 w-6 opacity-80" alt="Tailwind CSS" />
                        </li>
                    </ul>
                    <span className="text-white text-opacity-60 font-light text-lg md:pr-10 leading-8">
                        This project automated a complex, hands-on options chain contest, replacing an inefficient Excel spreadsheet with a real-time platform. The system dramatically increased efficiency, freeing company resources for core operations. A dynamic leaderboard, which updates every five minutes, enhances user engagement and creates a high potential for lead generation. Additionally, the inclusion of an all-time leaderboard incentivizes consistent performance, fostering long-term user commitment. This streamlined solution not only addresses operational efficiency but also promotes user interaction and business development.
                    </span>
                    <div className="mt-4 flex justify-between">
                        <a href="https://contest.stratalerts.com/" target="_blank" rel="noopener noreferrer" className="rounded-full uppercase bg-green-300 w-40 h-12 text-zinc-800 text-sm font-semibold flex items-center justify-center group border-1 border-green-700 border-r-4 border-b-4">
                            Visit site
                            <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                        </a>
                    </div>
                </div>

                <div className="w-11/12 md:w-1/2 lg:w-1/2 h-full flex justify-center">
                    <div className=" flex flex-col  bg-zinc-500 rounded-3xl border-r-8 flex-shrink-0 border-b-8 border-zinc-700 w-[385px] h-[435px] sm:w-[586px] sm:h-[575px] lg:w-[456px] lg:h-[445px] xl:w-[540px] xl:h-[575px]" >
                        <motion.div
                            key={isLightMode ? "light" : "dark"}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={imageVariants}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="h-full flex items-center p-4 px-4 rounded-xl "
                        >
                            <motion.img 
                                src={isLightMode ? light : dark} 
                                alt={isLightMode ? "Light mode project image" : "Dark mode project image"} 
                                className="w-[385px] h-[345px] sm:w-[586px] sm:h-[485px] lg:w-[456px] lg:h-[355px] xl:w-[500px] xl:h-[480px] object-scale-down " 
                            />
                        </motion.div>
                    
                        <div className="flex justify-center gap-4 items-center w-full mb-4">
                            <button
                                className={`w-32 h-9 flex justify-center items-center text-black font-bold uppercase text-opacity-75 text-sm focus:outline-none ${
                                    isLightMode ? 'bg-blue-300 border-r-4 border-b-4 rounded-full border-blue-800' : 'bg-gray-300 border-r-4 border-b-4 rounded-full border-gray-600'
                                }`}
                                onClick={() => setLightMode(true)}
                            >
                                <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-amber-100" /> Light
                            </button>
                            <button
                                className={`w-32 h-9 flex justify-center items-center text-black font-bold uppercase text-opacity-75 text-sm focus:outline-none ${
                                    !isLightMode ? 'bg-blue-300 border-r-4 border-b-4 rounded-full border-blue-800' : 'bg-gray-300 border-r-4 border-b-4 rounded-full border-gray-600'
                                }`}
                                onClick={() => setLightMode(false)}
                            >
                                <FontAwesomeIcon icon={faMoon} className="mr-2 text-yellow-100" /> Dark
                            </button>
                        </div>
                    </div>    
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
