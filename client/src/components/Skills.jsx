import { faCss3, faDigitalOcean, faGit, faGitAlt, faHtml5, faJs, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import tail from '../../public/tailwind.png'
import express from '../../public/express.png'
import mongo from '../../public/mongo.png'
import { faGear, faLaptopCode, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {

    return (
        <div className='flex flex-col items-center w-2/3 mx-auto  gap-6'>
            <h2 className='text-xl text-zinc-300 font-semibold self-start pl-6'>Skills & Tools</h2>
            <div className='grid grid-cols-4 gap-3 gap-x-10'>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faReact} className='w-8 h-8 text-zinc-300 group-hover:animate-ping'/> React</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faJs} className='w-8 h-8 text-zinc-300 group-hover:animate-ping'/> Javascript (ES6+)</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faNodeJs} className='w-8 h-8 text-zinc-300 group-hover:animate-ping'/>Node.js</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faHtml5} className='w-8 h-8 text-zinc-300 group-hover:animate-ping'/>HTML 5</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faCss3} className='w-8 h-8 text-zinc-300 group-hover:animate-ping'/>CSS 3</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={tail} className='w-8 h-8 group-hover:animate-ping opacity-80'/>Tailwind CSS</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faGitAlt} className='w-8 h-8 text-zinc-300 group-hover:animate-ping'/>Git & GitHub</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={mongo} className='w-8 h-8 group-hover:animate-ping opacity-80'/>MongoDB</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faGear} className='w-7 h-7 text-zinc-300 group-hover:animate-ping'/>RESTful APIs</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faMobileScreen} className='w-8 h-6 text-zinc-300 group-hover:animate-ping'/>Responsive Design</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><img src={express} className='w-8 h-8 group-hover:animate-ping opacity-80'/>Express JS</span>
                <span className='flex items-center gap-4 text-zinc-400 text-sm group '><FontAwesomeIcon icon={faLaptopCode} className='w-8 h-8 text-zinc-300 group-hover:animate-ping'/>UI/UX Design</span>
            </div>
        </div>
    )
}

export default Skills;