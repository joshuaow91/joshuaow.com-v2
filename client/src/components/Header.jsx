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
      style={{ transform: isScrollingUp ? 'translateY(0)' : 'translateY(calc(-100% - 16px))' }}
      className={`fixed top-4 left-52 w-3/4 rounded-full bg-zinc-950 bg-opacity-60 text-white py-3 px-16 flex items-center justify-between transition-all duration-300`}
    >
      <h1 className="text-2xl font-bold">JO</h1>
      <nav>
        {/* Replace with your navigation */}
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <ul className="flex space-x-4">
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
        </ul>
    </header>
  );
}

export default Header;
