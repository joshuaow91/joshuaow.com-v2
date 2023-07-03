import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <motion.div
            className="flex justify-center w-full gap-10 md:p-4  bg-slate-600 rounded-3xl border-r-8 border-b-8 border-slate-800 border-opacity-90"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
        >

            <div className="flex  justify-center w-full md:justify-start self-start  ">
                <h2 className="text-4xl text-white text-opacity-75 font-paytone tracking-wide uppercase self-start flex flex-col-reverse items-center gap-2">
                    <FontAwesomeIcon icon={faAddressCard} className="mr-2 w-48 h-40 text-cyan-500" /> Contact
                </h2>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full">

                <div className="flex flex-col items-center gap-3">
                    <span className="text-zinc-400 text-lg">Find me on social media or send me an email to get in touch.</span>
                </div>

                <div className="flex flex-col items-center gap-5 ">
                    <ul className="flex gap-5  sm:gap-8 items-center">
                        <li>
                            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noreferrer" aria-label='linkedIn link'>
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-stone-300 hover:text-stone-500 hover:-translate-y-1 transition-all duration-300 ease-in-out h-6 w-6 self-center"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noreferrer" aria-label='twitter link'>
                            <FontAwesomeIcon icon={faTwitter} className="text-stone-300 hover:text-stone-500 hover:-translate-y-1 transition-all duration-300 ease-in-out h-6 w-6 self-center"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/joshuaow91" target="_blank" rel="noreferrer" aria-label='github link'>
                            <FontAwesomeIcon icon={faGithub} className="text-stone-300 hover:text-stone-500 hover:-translate-y-1 transition-all duration-300 ease-in-out h-6 w-6 self-center"/>
                            </a>
                        </li>
                    </ul>
                    <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noopener noreferrer" className="rounded-full uppercase bg-green-300 w-40 h-12 text-zinc-800 text-sm font-semibold flex items-center justify-center group border-1 border-green-700 border-r-4 border-b-4">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-zinc-700 group-hover:animate-spin transition-transform duration-500 ease-in-out" />
                        Send Email
                    </a>
                </div>

            </div>


           
        </motion.div>
    );
};

export default Contact;
