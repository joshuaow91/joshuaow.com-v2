import React from "react";
import Avatar from '../../public/aiavatar.avif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {

    return (
        <div className="flex items-center p-4 pt-32 pb-14 gap-10">

            <div className="flex flex-col ml-20 w-2/3">
                    <h1 className=" text-5xl font-extralight text-stone-400 ">Hello, my name is Josh.</h1> 
                    <h2 className="mt-4 font-semibold tracking-wide uppercase text-7xl text-stone-300 font-paytone">Full-stack Engineer</h2>
                    <span className="mt-8 text-lg  font-light text-stone-400 pr-20"> I specialize in crafting end-to-end software solutions, meticulously optimizing each layer to ensure optimal performance and a seamless user experience.</span>
                <div className="flex gap-4">
                    <a href="#" className="mt-10 rounded-full uppercase bg-orange-300 w-40 h-10 text-zinc-800 text-sm font-semibold hover:bg-rose-600 flex items-center justify-center group">
                        View Resume <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                    <a href="#" className="mt-10 rounded-full uppercase border-2 border-zinc-700 w-40 h-10 text-zinc-400 text-sm font-semibold hover:border-zinc-800 flex items-center justify-center group">
                        Contact Me <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                </div>
                <div className="flex gap-8 justify-start mt-8">
                    <a href="" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="text-zinc-500 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} className="text-zinc-500 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-zinc-500 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="text-zinc-500 hover:text-zinc-700 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                </div>
            </div>

            <div className=" w-1/3 flex justify-start">
                <div className="flex-shrink-0 flex flex-col gap-4 border-2 justify-center border-zinc-950 bg-zinc-800 p-4 rounded-3xl border-r-8 border-b-8">
                    <img src={Avatar} className="rounded-xl grayscale brightness-100 hover:brightness-75 transition-all ease-in-out duration-500 h-80 w-80 mb-2 border border-zinc-800"/>

                </div>
            </div>

        </div>
    )
}

export default Hero;