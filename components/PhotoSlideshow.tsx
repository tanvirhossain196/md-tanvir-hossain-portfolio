"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/slide/photo1.jpg",
  "/images/slide/photo2.jpg",
  "/images/slide/photo3.jpg",
  "/images/slide/photo4.jpg",
  "/images/slide/photo5.jpg",
];

export default function PhotoSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // প্রতি ৪ সেকেন্ডে ছবি চেঞ্জ হবে
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`w-full h-full ${i === index ? "animate-kenburns" : ""}`}
          >
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
