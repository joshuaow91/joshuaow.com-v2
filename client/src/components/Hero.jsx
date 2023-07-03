import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Avatar from '/avatar.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const imgIsInView = useInView(imgRef, { once: true });

  const handleScroll = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleScrollContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const spring = {
    type: "spring",
    stiffness: 5000,
    damping: 100
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col-reverse lg:flex-row justify-center gap-8 lg:gap-6 xl:gap-16 p-2 pl-8 sm:p-6 w-full items-center "
    >
      <div className="flex flex-col sm:p-6">
        <h1 className="mt-8 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extralight text-stone-300 text-opacity-75 ">
          Hello, my name is Josh.
        </h1>
        <h2 className="mt-2 sm:min-w-max font-semibold tracking-wide uppercase text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-stone-200 font-paytone">
          Full-stack Engineer
        </h2>
        <span className="mt-6 mr-8 sm:mr-0 sm:mt-10 text-lg font-light text-stone-300 text-opacity-70 max-w-xl">
          I specialize in crafting end-to-end software solutions, optimizing each layer to ensure optimal performance
          and a seamless user experience.
        </span>
        <div className="flex gap-4 pr-5">
          <a
            href="#projects"
            onClick={handleScroll}
            className="mt-12 rounded-full uppercase bg-green-300 w-40 h-12 text-zinc-800 text-sm font-semibold flex items-center justify-center group border-1 border-green-800 border-r-4 border-b-4"
          >
            Projects <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
          </a>
          <a
            href="#contact"
            onClick={handleScrollContact}
            className="mt-12 rounded-full uppercase  w-40 h-12 text-zinc-800 text-sm font-semibold  flex items-center justify-center group border-1 border-zinc-600 border-r-4 border-b-4 bg-zinc-300"
          >
            Contact <FontAwesomeIcon icon={faArrowRightLong} className="ml-2 group-hover:rotate-180 transition-transform duration-500 ease-in-out" />
          </a>
        </div>
      </div>

      <div className="flex-shrink-0 ">
        <motion.img 
          ref={imgRef}
          src={Avatar} 
          alt='Avatar Image'
          initial={{ scale: 0 }}
          animate={{ scale: imgIsInView ? 1 : 0 }}
          transition={spring}
          className="border-zinc-950 rounded-full border-r-8 border-b-8 border-1 grayscale brightness-100 hover:brightness-75 transition-all ease-in-out duration-500 w-60 h-60 md:h-80 md:w-80" 
        />
      </div>
    </motion.div>
  );
};

export default Hero;