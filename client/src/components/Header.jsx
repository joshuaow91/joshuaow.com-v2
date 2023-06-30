import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrollingUp(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header
        style={{ transform: isScrollingUp ? 'translateY(0)' : 'translateY(-100%)' }}
        className={`fixed top-0 left-50 w-full z-20 bg-background max-w-screen-xl  bg-opacity-60 backdrop-blur-md py-3 px-10 pr-12 flex items-center justify-between transition-all duration-300`}
    >
    <nav className='flex justify-between w-full items-center'>
        <h1 className='font-bold text-2xl text-white text-opacity-75'>joshuaow<span className=' text-cyan-600 text-4xl'>.</span></h1>
      
      <ul className="flex gap-8 items-center">
            <li>
                <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
                </a>
            </li>
        </ul>
    </nav>
      
    </header>
  );
}

export default Header;