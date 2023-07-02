import { motion, useInView } from 'framer-motion';
import { faCss3, faGitAlt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import tail from '/tailwind.png';
import express from '/express.png';
import mongo from '/mongo.png';
import { faCode, faCogs, faDatabase, faGear, faLaptopCode, faLightbulb, faMobileScreen, faServer, faShieldAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const SkillsTwo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const spring = {
        type: 'spring',
        stiffness: 500,
        damping: 100
    };

    const fadeIn = {
        duration: 1 
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
            transition={{ y: spring, opacity: fadeIn }}
        >
        <div className='flex flex-col-reverse items-center w-full justify-center p-4  sm:p-8  '>

            <div className='flex flex-col-reverse lg:flex-col-reverse justify-between items-center gap-10 w-full xl:gap-20'>
                <div className='lg:w-full flex flex-col md:flex-row items-center gap-8 px-4 sm:pl-8 py-6 bg-zinc-600 rounded-3xl border-r-8 border-b-8 border-zinc-800 border-opacity-80'>
                    <div className='flex flex-col md:w-1/2 gap-6'>
                    <h2 className=' text-3xl sm:text-4xl text-white text-opacity-75 tracking-wide self-center sm:self-start font-paytone uppercase'> <FontAwesomeIcon icon={faLightbulb} className='mr-2 text-amber-400' /> Proficiencies </h2> 
                    <span className='text-base sm:text-lg  font-light text-white text-opacity-60  leading-7'>
                    As a skilled full stack developer, I bring expertise in frontend and backend development, API integration, database management, server-side implementation, security practices, and optimization techniques. With a deep understanding of programming languages and frameworks, I deliver end-to-end solutions that are reliable, secure, and optimized for enhanced user experience.                    
                    </span>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-9 font-light rounded-3xl   '>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faReact} className='w-8 h-8 text-sky-400 group-hover:animate-ping'/> React</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faJs} className='w-8 h-8 text-yellow-400 group-hover:animate-ping'/> Javascript (ES6+)</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faNodeJs} className='w-8 h-8 text-green-400 group-hover:animate-ping'/>Node.js</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={express} className='w-8 h-8 group-hover:animate-ping'/>Express JS</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={mongo} className='w-8 h-8 group-hover:animate-ping '/>MongoDB</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={tail} className='w-8 h-8 group-hover:animate-ping '/>Tailwind CSS</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faHtml5} className='w-8 h-8 text-red-500 group-hover:animate-ping'/>HTML 5</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faCss3} className='w-8 h-8 text-blue-500 group-hover:animate-ping'/>CSS 3</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faGitAlt} className='w-8 h-8 text-amber-400 group-hover:animate-ping'/>Git & GitHub</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faGear} className='w-7 h-7 text-pink-400 group-hover:animate-ping'/>RESTful APIs</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faMobileScreen} className='w-8 h-6 text-indigo-400 group-hover:animate-ping'/>Responsive Design</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faLaptopCode} className='w-8 h-8 text-sky-400 group-hover:animate-ping'/>UI/UX Design</span>
                </div>
                </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-12 lg:gap-6 w-full'>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, y: -50, rotate: 180 }} 
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={spring}
                        >
                        <span className='flex items-end pb-4 gap-2 text-zinc-700 text-xs uppercase font-semibold bg-sky-200 h-40 justify-center rounded-3xl border-1 border-cyan-700 border-r-8 border-b-8 hover:skew-y-2'>
                            <span className='flex flex-col items-center gap-5'>
                                <FontAwesomeIcon icon={faCode} className='w-16 h-16 text-sky-400 flex'/> 
                                Web Develolpment
                            </span>                  
                        </span>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, y: -50, rotate: 180 }} 
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={spring}
                        >
                        <span className='flex items-end pb-4 gap-2 text-zinc-700 text-xs font-semibold uppercase  bg-green-200 h-40  justify-center rounded-3xl border-1 border-green-700 border-r-8 border-b-8 hover:-skew-y-2'>
                            <span className='flex flex-col items-center gap-5'>
                                <FontAwesomeIcon icon={faDatabase} className='w-16 h-16 text-green-400 flex'/> 
                                Database Design
                            </span>   
                        </span>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, y: -50, rotate: 180 }} 
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={spring}
                        >
                        <span className='flex items-end pb-4 gap-2 text-zinc-700 text-xs font-semibold uppercase  bg-red-200 h-40  justify-center rounded-3xl border-1 border-red-700 border-r-8 border-b-8 hover:skew-y-2'>
                            <span className='flex flex-col items-center gap-5'>
                                <FontAwesomeIcon icon={faCogs} className='w-16 h-16 text-red-400 flex'/> 
                                API Development
                            </span>   
                        </span>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, y: -50, rotate: 180 }} 
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={spring}
                        >
                        <span className='flex items-end pb-4 gap-2 text-zinc-700 text-xs font-semibold uppercase  bg-pink-200 h-40  justify-center rounded-3xl border-1 border-pink-700 border-r-8 border-b-8 hover:-skew-y-2'>
                            <span className='flex flex-col items-center gap-5'>
                                <FontAwesomeIcon icon={faServer} className='w-16 h-16 text-pink-400 flex'/> 
                                Server Config
                            </span>  
                        </span>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, y: -50, rotate: 180 }} 
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={spring}
                        >
                        <span className='flex items-end pb-4 gap-2 text-zinc-700 text-xs font-semibold uppercase  bg-indigo-200 h-40  justify-center rounded-3xl border-1 border-indigo-600 border-r-8 border-b-8 hover:skew-y-2'>
                            <span className='flex flex-col items-center gap-5'>
                                <FontAwesomeIcon icon={faTachometerAlt} className='w-16 h-16 text-indigo-400 flex'/> 
                                Performace Opt.
                            </span>  
                        </span>
                        </motion.div>
                        <motion.div 
                            ref={ref}
                            initial={{ opacity: 0, y: -50, rotate: 180 }} 
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={spring}
                        >
                        <span className='flex items-end pb-4 gap-2 text-zinc-700 text-xs font-semibold uppercase  bg-amber-200 h-40  justify-center rounded-3xl border-1 border-amber-700 border-r-8 border-b-8 hover:-skew-y-2'>
                            <span className='flex flex-col items-center gap-5'>
                                <FontAwesomeIcon icon={faShieldAlt} className='w-16 h-16 text-amber-400 flex'/> 
                                Security Imp.
                            </span>  
                        </span>
                        </motion.div>
                    </div>  
                </div>

                {/* <div className='grid w-1/3 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 gap-x-9 font-light border-1 border-zinc-800 border-opacity-80 rounded-3xl p-4 px-6 border-r-8 border-b-8 bg-zinc-600'>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faReact} className='w-8 h-8 text-sky-400 group-hover:animate-ping'/> React</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faJs} className='w-8 h-8 text-yellow-400 group-hover:animate-ping'/> Javascript (ES6+)</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faNodeJs} className='w-8 h-8 text-green-400 group-hover:animate-ping'/>Node.js</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faHtml5} className='w-8 h-8 text-red-500 group-hover:animate-ping'/>HTML 5</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faCss3} className='w-8 h-8 text-blue-500 group-hover:animate-ping'/>CSS 3</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={tail} className='w-8 h-8 group-hover:animate-ping opacity-90'/>Tailwind CSS</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faGitAlt} className='w-8 h-8 text-amber-400 group-hover:animate-ping'/>Git & GitHub</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={mongo} className='w-8 h-8 group-hover:animate-ping opacity-80'/>MongoDB</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faGear} className='w-7 h-7 text-pink-400 group-hover:animate-ping'/>RESTful APIs</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faMobileScreen} className='w-8 h-6 text-indigo-400 group-hover:animate-ping'/>Responsive Design</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={express} className='w-8 h-8 group-hover:animate-ping'/>Express JS</span>
                    <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faLaptopCode} className='w-8 h-8 text-sky-400 group-hover:animate-ping'/>UI/UX Design</span>
                </div> */}

        </div>
        </motion.div>
    );
};

export default SkillsTwo;