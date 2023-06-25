import React from "react";
import Avatar from '../../public/aiavatar.avif'

const Hero = () => {

    return (
        <div className="flex justify-center w-1/2  rounded-3xl ">
            <div className="w-1/2 flex items-center justify-center">
                <img src={Avatar} className="rounded-full grayscale h-44 w-44 border-4 border-zinc-950 border-opacity-60"/>
            </div>
            <div className="w-full flex flex-col p-4">
                <h1 className=" text-3xl tracking-wide font-light text-zinc-500">Hello, my name is Josh.</h1>
                <h2 className="mt-4 font-semibold tracking-wider uppercase text-4xl text-zinc-300">Full-stack Engineer</h2>
                <span className="mt-6 text-lg  font-light text-zinc-400"> I specialize in crafting end-to-end software solutions, meticulously optimizing each layer to ensure optimal performance and a seamless user experience.</span>
            </div>
        </div>
    )
}

export default Hero;