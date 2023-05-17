import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/qa">Qa</Link>
      <Link href="/dev">Dev</Link>
    </header>
  );
}

export default Header;
