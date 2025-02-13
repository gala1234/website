import React from 'react';
import Image from 'next/image';

export default function ImageSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/futuristic_landscape.webp"
          alt="Futuristic sci-fi landscape"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 p-8 sm:p-20 
          flex items-center justify-start 
          min-h-screen
        "
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Hello! I&apos;m Gala,
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-200">
            web3 frontend developer and privacy advocate
          </p>
        </div>
      </div>
    </section>
  );
}
