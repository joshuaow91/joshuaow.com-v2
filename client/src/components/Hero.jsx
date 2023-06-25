import React from "react";
import Avatar from '../../public/aiavatar.avif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {

    return (
        <div className="flex justify-center  p-4 rounded-3xl">
            <div className="pr-6 flex flex-col gap-4 border-r-2 border-zinc-800 pb-4">
            <img src={Avatar} className="rounded-full grayscale h-28 w-28 mb-4 border border-zinc-800"/>
            <FontAwesomeIcon icon={faLinkedinIn} className="text-zinc-600 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-6 w-6 self-center"/>
            <FontAwesomeIcon icon={faTwitter} className="text-zinc-600 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-6 w-6 self-center"/>
            <FontAwesomeIcon icon={faGithub} className="text-zinc-600 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-6 w-6 self-center"/>
            <FontAwesomeIcon icon={faEnvelope} className="text-zinc-600 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-6 w-6 self-center"/>
            </div>
            <div className="flex flex-col justify-center w-1/2 pl-6">
                {/* <div className="w-full flex flex-col p-4"> */}
                    <h1 className=" text-3xl  font-light text-zinc-500">Hello, my name is Josh.</h1> 
                    <h2 className="mt-4 font-semibold tracking-tighter uppercase text-6xl text-zinc-300">Full-stack Engineer</h2>
                    <span className="mt-4 text-lg  font-light text-zinc-400"> I specialize in crafting end-to-end software solutions, meticulously optimizing each layer to ensure optimal performance and a seamless user experience.</span>
                    <a href="#" className="mt-6 rounded-full bg-rose-500 w-40 h-8 text-zinc-800 text-sm font-semibold hover:bg-rose-600 flex items-center justify-center group">
                        View Projects <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-300 ease-in-out" />
                    </a>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Hero;