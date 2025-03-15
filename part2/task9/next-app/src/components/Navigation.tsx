'use client';

import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation; 