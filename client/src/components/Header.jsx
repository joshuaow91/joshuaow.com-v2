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

    const handleTouchMove = (event) => {
      event.preventDefault();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [lastScrollTop]);

  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <header
      style={{ transform: isScrollingUp ? 'translateY(0)' : 'translateY(-100%)' }}
      className={`fixed top-0 left-50 w-full z-20 bg-background max-w-screen-xl bg-opacity-60 backdrop-blur-md py-3 sm:px-10 sm:pr-8 px-5 flex items-center justify-between transition-all duration-300`}
    >
      <nav className='flex justify-between w-full items-center'>
        <a href="#" onClick={handleScrollToTop} className='font-bold text-2xl text-white text-opacity-75'>joshuaow<span className=' text-cyan-600 text-4xl'>.</span></a>

        <ul className="flex gap-3 mt-4 sm:mt-0 sm:gap-8 items-center">
          <li>
            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/joshuaow91" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
            </a>
          </li>
          <li>
            <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="text-stone-300 hover:text-stone-500 hover:translate-y-1 transition-all duration-300 ease-in-out h-5 w-5 self-center"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
