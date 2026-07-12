import Image from "next/image";

// Single static photo now — no slideshow, no interval, no client-side
// state. Simpler and lighter (no animation loop running on every visit).
const photo = "/images/slide/photo1.jpg";

export default function PhotoSlideshow() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={photo}
        alt="Md Tanvir Hossain"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
