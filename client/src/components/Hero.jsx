import React from "react";
import Avatar from '../../public/avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {

    return (
        <div className="flex justify-center gap-24 p-6 w-full items-center">

            <div className="flex flex-col p-6">
                <h1 className="mt-8 text-4xl font-extralight text-stone-300 text-opacity-75 ">Hello, my name is Josh.</h1> 
                <h2 className="mt-2 min-w-max font-semibold tracking-wide uppercase text-6xl text-stone-200 font-paytone">Full-stack Engineer</h2>
                <span className="mt-10 text-lg  font-light text-stone-300 text-opacity-70 max-w-xl"> I specialize in crafting end-to-end software solutions, optimizing each layer to ensure optimal performance and a seamless user experience.</span>
                <div className="flex gap-4">
                    <a href="#" className="mt-12 rounded-full uppercase bg-green-300 w-40 h-12 text-zinc-800 text-sm font-semibold  flex items-center justify-center group border-1 border-green-800 border-r-4 border-b-4">
                        Projects <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                    <a href="#" className="mt-12 rounded-full uppercase  w-40 h-12 text-zinc-800 text-sm font-semibold  flex items-center justify-center group border-1 border-zinc-600 border-r-4 border-b-4 bg-zinc-300">
                        Contact <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                </div>
            </div>

            <div className="">
                <img 
                    src={Avatar} 
                    className="border-zinc-950 rounded-full border-r-8 border-b-8 border-1 grayscale brightness-100 hover:brightness-75 transition-all ease-in-out duration-500 h-80 w-80 "
                />
            </div>

        </div>
    )
}

export default Hero;