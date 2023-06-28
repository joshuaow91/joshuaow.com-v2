import React from "react";
import Avatar from '../../public/avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {

    return (
    <div className="flex flex-col">
        <div className="flex items-center p-4 pt-32 pb-14 gap-10 w-full">

            <div className="flex flex-col ml-20 w-2/3">
                    <h1 className=" text-4xl font-extralight text-stone-400 ">Hello, my name is Josh.</h1> 
                    <h2 className=" min-w-max font-semibold tracking-wide uppercase text-6xl text-stone-200 font-paytone">Full-stack Engineer</h2>
                    <span className="mt-8 text-lg  font-light text-stone-400 text-opacity-80 max-w-xl"> I specialize in crafting end-to-end software solutions, optimizing each layer to ensure optimal performance and a seamless user experience.</span>
                <div className="flex gap-4">
                    <a href="#" className="mt-10 rounded-full uppercase bg-green-500 w-40 h-12 text-zinc-800 text-sm font-semibold hover:bg-green-600 flex items-center justify-center group border-1 border-zinc-950 border-r-4 border-b-4">
                        View Resume <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                    <a href="#" className="mt-10 rounded-full uppercase  w-40 h-12 text-stone-300 text-sm font-semibold hover:bg-zinc-900 flex items-center justify-center group border-1 border-zinc-950 border-r-4 border-b-4 bg-zinc-800">
                        Contact Me <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                </div>
                <div className="flex gap-8 justify-start mt-12 ml-2">
                    <a href="" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="text-stone-400 hover:text-stone-500 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} className="text-stone-400 hover:text-stone-500 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-stone-400 hover:text-stone-500 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                    <a href="" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="text-stone-400 hover:text-stone-500 hover:-translate-y-1 transition-all duration-300 ease-in-out h-7 w-7 self-center"/></a>
                </div>
            </div>

            <div className=" w-1/3 flex items-start">
                <div className="flex-shrink-0  ">
                    <img src={Avatar} className="border-zinc-950 rounded-full border-r-8 border-b-8 border-1 grayscale brightness-100 hover:brightness-75 transition-all ease-in-out duration-500 h-80 w-80 "/>

                </div>
            </div>

        </div>

        <div className="flex items-center p-4 pt-32 pb-14 gap-10 w-full bg-slate-800">
                <div className="flex flex-col ml-20 w-2/3">
                    <h1 className=" text-5xl font-extralight text-stone-200 ">Hi, I'm Josh.</h1> 
                    <h2 className="mt-2 max-w-sm font-semibold tracking-wide uppercase text-6xl text-stone-400 font-paytone">Full-stack Engineer</h2>
                    <span className="mt-6 text-lg font-light text-stone-300  max-w-sm"> I specialize in crafting end-to-end software solutions, optimizing each layer to ensure optimal performance and a seamless user experience.</span>
                <div className="flex gap-4">
                    <a href="#" className="mt-10 rounded-full uppercase bg-green-500 w-40 h-12 text-zinc-800 text-sm font-semibold hover:bg-green-600 flex items-center justify-center group border-1 border-zinc-950 border-r-4 border-b-4">
                        View Resume <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                    <a href="#" className="mt-10 rounded-full uppercase  w-40 h-12 text-stone-300 text-sm font-semibold hover:bg-zinc-900 flex items-center justify-center group border-1 border-zinc-950 border-r-4 border-b-4 bg-zinc-800">
                        Contact Me <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
                    </a>
                </div>

            </div>

            <div className=" w-1/3 flex items-start">
                <div className="flex-shrink-0  ">
                    <img src={Avatar} className="border-zinc-950 rounded-full border-r-8 border-b-8 border-1 grayscale brightness-100 hover:brightness-75 transition-all ease-in-out duration-500 h-80 w-80 "/>

            </div>
        </div>
        </div>

    </div>
    )
}

export default Hero;