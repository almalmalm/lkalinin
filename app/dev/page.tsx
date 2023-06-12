import React from 'react';
import Link from 'next/link';
import '../styles.css';

export default function Dev() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 md:text-5xl">
        Development page
      </h1>
      <Link href="/" className="font-bold">
        Back
      </Link>
      <h3 className="font-bold text-3xl text-center mb-4">Projects</h3>
      <div className="flex justify-center">
        <div className="font-bold text-center bg-lime-200 w-fit rounded p-2">
          <a href="https://my-expenses-three.vercel.app/" target="_blank">
            My Expenses App
          </a>
        </div>
      </div>
    </div>
  );
}
