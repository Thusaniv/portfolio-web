"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Design() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="text-white" id="design">
      <div className="mt-1 pt-16 md:mt-0 flex flex-col h-full items-center justify-center overflow-visible">
        <div className="max-w-5xl mx-auto px-4 py-3 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6 pb-2 leading-[1.2]">
            Design
          </h2>

          <BentoGrid className="max-w-4xl mx-auto mt-4">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={<ImageHeader src={item.src} alt={item.alt} onClick={() => setSelectedImage(item.src)} />}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-lg z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-2 rounded-lg shadow-lg bg-white" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image src={selectedImage} alt="Full View" width={600} height={450} className="rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}

const ImageHeader = ({ src, alt, onClick }) => (
  <div
    className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <Image src={src} alt={alt} layout="fill" objectFit="cover" />
  </div>
);

const items = [
  { title: "New Year Celebration", description: "Welcoming a new beginning with fresh aspirations.", src: "/images/newyear.jpg", alt: "New Year", icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" /> },
  { title: "Christmas Spirit", description: "Celebrating the season of joy, love, and giving.", src: "/images/christmas.jpg", alt: "Christmas", icon: <IconSignature className="h-4 w-4 text-neutral-500" /> },
  { title: "Eid Festivities", description: "Marking a time of prayer and togetherness.", src: "/images/eid.jpg", alt: "Eid", icon: <IconTableColumn className="h-4 w-4 text-neutral-500" /> },
  { title: "Pongal Harvest Festival", description: "A thanksgiving to the Sun God for a bountiful harvest.", src: "/images/pongal.jpg", alt: "Pongal", icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" /> },
  { title: "Vesak Festival", description: "Honoring the birth of Lord Buddha.", src: "/images/vesak.jpg", alt: "Vesak", icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" /> },
  { title: "Poson Poya", description: "Celebrating the arrival of Buddhism", src: "/images/posan.jpg", alt: "Poson Poya", icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" /> },
  { title: "New Year 2025", description: "Stepping into a bright year ahead!", src: "/images/newyear2025.jpg", alt: "New Year 2025", icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" /> },
  { title: "Vesak Illuminations", description: "A celebration of light and devotion.", src: "/images/vesak1.jpg", alt: "Vesak Lanterns", icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" /> },
  { title: "Eid al-Adha", description: "A festival of sacrifice and generosity.", src: "/images/eid-al.jpg", alt: "Eid al-Adha", icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" /> },
  { title: "Easter Celebrations", description: "Rejoicing in the spirit of hope.", src: "/images/eastercopy.jpg", alt: "Easter", icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" /> },
];