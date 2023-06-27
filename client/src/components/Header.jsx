import React, { useState, useEffect } from 'react';

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
        className={`fixed top-0 left-0 w-full z-20 bg-background bg-opacity-60 backdrop-blur-md py-3 px-16 flex items-center justify-between transition-all duration-300`}
    >

        <h1 className='font-bold text-2xl text-stone-300'>joshuaow<span className=' text-green-500 text-4xl'>.</span></h1>
      <nav>
        <ul className="flex gap-10 text-stone-500 ">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;