import { faCss3, faDigitalOcean, faGit, faGitAlt, faHtml5, faJs, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import tail from '../../public/tailwind.png'
import express from '../../public/express.png'
import mongo from '../../public/mongo.png'
import { faGear, faLaptopCode, faMobileScreen, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {

    return (
        <div className='flex flex-col-reverse items-center w-full justify-center p-8 gap-20 '>

            <div className=' flex flex-col items-center gap-8 w-1/3'>
                <h2 className='text-4xl text-stone-300 tracking-wide self-start font-paytone uppercase'> <FontAwesomeIcon icon={faScrewdriverWrench} className="text-zinc-400 mr-3" /> Skills & Tools </h2> 
                <span className='text-base font-light text-white text-opacity-60  leading-6'>
                    I'm committed to lifelong learning, continually refining my expertise and embracing new programming languages with enthusiasm.                
                </span>
                {/* <span className='text-sm font-light text-white text-opacity-40 self-start'> Here are some of the skills and tools I employ in building my projects <FontAwesomeIcon icon={faLongArrowRight} className='ml-2' /></span> */}

            </div>

            <div className='grid grid-cols-1 gap-3 gap-x-10 font-light border-1 border-zinc-950 border-opacity-80 rounded-3xl p-4 px-6 border-r-8 border-b-8 bg-zinc-800 bg-opacity-60'>
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
            </div>

             {/* <div className='grid grid-cols-3 gap-4 bg-zinc-100 p-4'>
                    <span className='flex items-center gap-2 text-zinc-700 text-xs font-light uppercase group bg-stone-300 h-10 w-36 justify-center rounded-3xl border-1 border-sky-400 border-r-4 border-b-4 hover:skew-y-2'>
                        <FontAwesomeIcon icon={faReact} className='w-5 h-5 text-sky-500 group-hover:animate-ping'/> React
                    </span>
                    <span className='flex items-center gap-2 text-zinc-700 text-xs font-light uppercase group bg-stone-300 h-10 w-36 justify-center rounded-3xl border-1 border-green-500 border-r-4 border-b-4 '>
                        <FontAwesomeIcon icon={faNodeJs} className='w-5 h-5 text-green-600 group-hover:animate-ping'/> Node.js
                    </span>
                    <span className='flex items-center gap-2 text-zinc-700 text-xs font-light uppercase group bg-stone-300 h-10 w-36 justify-center rounded-3xl border-1 border-zinc-400 border-r-4 border-b-4 '>
                        <img src={express} className='w-6 h-6 group-hover:animate-ping'/> Express
                    </span>
                    <span className='flex items-center gap-2 text-zinc-700 text-xs font-light uppercase group bg-stone-300 h-10 w-36 justify-center rounded-3xl border-1 border-emerald-500 border-r-4 border-b-4 '>
                    <img src={mongo} className='w-5 h-5 group-hover:animate-ping opacity-80'/> mongoDB
                    </span>
                    <span className='flex items-center gap-2 text-zinc-700 text-xs font-light uppercase group bg-stone-300 h-10 w-36 justify-center rounded-3xl border-1 border-cyan-500 border-r-4 border-b-4 '>
                    <img src={tail} className='w-6 h-6 group-hover:animate-ping opacity-90'/> tailwind
                    </span>
            </div>  */}

        </div>
    )
}

export default Skills;