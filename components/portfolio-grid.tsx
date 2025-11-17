"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_0590.jpg",
  },
  {
    id: 2,
    title: "Urban Street Vibes",
    category: "Street",
    image: "/portfolio/DSC_0681.jpg",
  },
  {
    id: 3,
    title: "City Nightscape",
    category: "Landscape",
    image: "/portfolio/DSC_0806.jpg",
  },
  {
    id: 4,
    title: "Calm Morning Light",
    category: "Lifestyle",
    image: "/portfolio/DSC_0874.jpg",
  },
  {
    id: 5,
    title: "Studio Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_1154.jpg",
  },
  {
    id: 6,
    title: "Quiet Moments",
    category: "Lifestyle",
    image: "/portfolio/DSC_1226.jpg",
  },
  {
    id: 7,
    title: "Nature Close-Up",
    category: "Nature",
    image: "/portfolio/DSC_1470.jpg",
  },
  {
    id: 8,
    title: "Cinematic Alleyway",
    category: "Street",
    image: "/portfolio/DSC_1579.jpg",
  },
  {
    id: 9,
    title: "Timeless Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_1583.jpg",
  },
  {
    id: 10,
    title: "Warm Urban Glow",
    category: "City",
    image: "/portfolio/DSC_2171.jpg",
  },
  {
    id: 11,
    title: "Evening Silhouette",
    category: "Landscape",
    image: "/portfolio/DSC_2305.jpg",
  },
  {
    id: 12,
    title: "Street Shadows",
    category: "Documentary",
    image: "/portfolio/DSC_2928.jpg",
  },
  {
    id: 13,
    title: "Portrait in Motion",
    category: "Portrait",
    image: "/portfolio/DSC_3910.jpg",
  },
  {
    id: 14,
    title: "Minimal Architecture",
    category: "Architecture",
    image: "/portfolio/DSC_3947.jpg",
  },
  {
    id: 15,
    title: "Commercial Shot",
    category: "Product",
    image: "/portfolio/DSC_4002.jpg",
  },
  {
    id: 16,
    title: "Street Expressions",
    category: "Street",
    image: "/portfolio/DSC_4021.jpg",
  },
  {
    id: 17,
    title: "Soft Light Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_4027.jpg",
  },
  {
    id: 18,
    title: "Urban Exploration",
    category: "Documentary",
    image: "/portfolio/DSC_4208.jpg",
  },
  {
    id: 19,
    title: "Natural Smile",
    category: "Portrait",
    image: "/portfolio/DSC_4210.jpg",
  },
  {
    id: 20,
    title: "Black & White Streets",
    category: "Street",
    image: "/portfolio/DSC_4342.jpg",
  },
  // ===追加項目===
  {
    id: 21,
    title: "Evening City Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_4411.jpg",
  },
  {
    id: 22,
    title: "Dramatic Shadows",
    category: "Street",
    image: "/portfolio/DSC_4608.jpg",
  },
  {
    id: 23,
    title: "Golden Street Moment",
    category: "Street",
    image: "/portfolio/DSC_4685.jpg",
  },
  {
    id: 24,
    title: "Quiet Afternoon",
    category: "Lifestyle",
    image: "/portfolio/DSC_4745.jpg",
  },
  {
    id: 25,
    title: "Urban Stillness",
    category: "City",
    image: "/portfolio/DSC_5030.jpg",
  },
  {
    id: 26,
    title: "Soft Portrait Glow",
    category: "Portrait",
    image: "/portfolio/DSC_5054.jpg",
  },
  {
    id: 27,
    title: "Nature Trail",
    category: "Nature",
    image: "/portfolio/DSC_6220.jpg",
  },
  {
    id: 28,
    title: "Minimal Architecture Lines",
    category: "Architecture",
    image: "/portfolio/DSC_6232.jpg",
  },
  {
    id: 29,
    title: "Forest Path",
    category: "Landscape",
    image: "/portfolio/DSC_6326.jpg",
  },
  {
    id: 30,
    title: "Urban Movement",
    category: "Documentary",
    image: "/portfolio/DSC_6471.jpg",
  },
  {
    id: 31,
    title: "Evening Breeze",
    category: "Lifestyle",
    image: "/portfolio/DSC_6610.jpg",
  },
  {
    id: 32,
    title: "Sunset Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_7015.jpg",
  },
  {
    id: 33,
    title: "Candid Walk",
    category: "Street",
    image: "/portfolio/DSC_7109.jpg",
  },
  {
    id: 34,
    title: "Urban Mood",
    category: "Street",
    image: "/portfolio/DSC_7137.jpg",
  },
  {
    id: 35,
    title: "Warm Smile",
    category: "Portrait",
    image: "/portfolio/DSC_7260.jpg",
  },
  {
    id: 36,
    title: "Reflective Streets",
    category: "City",
    image: "/portfolio/DSC_7290.jpg",
  },
  {
    id: 37,
    title: "Soft Light Streets",
    category: "Documentary",
    image: "/portfolio/DSC_7314.jpg",
  },
  {
    id: 38,
    title: "Nature Breeze",
    category: "Nature",
    image: "/portfolio/DSC_7372.jpg",
  },
  {
    id: 39,
    title: "Architectural Detail",
    category: "Architecture",
    image: "/portfolio/DSC_7536.jpg",
  },
  {
    id: 40,
    title: "Gentle Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_8264.jpg",
  },
  {
    id: 41,
    title: "Quiet Street Corner",
    category: "Street",
    image: "/portfolio/DSC_8293.jpg",
  },
  {
    id: 42,
    title: "Sunlit Portrait",
    category: "Portrait",
    image: "/portfolio/DSC_8488.jpg",
  },
  {
    id: 43,
    title: "Urban Calm",
    category: "City",
    image: "/portfolio/DSC_8611.jpg",
  },
  {
    id: 44,
    title: "Deep Contrast",
    category: "Documentary",
    image: "/portfolio/DSC_8942.jpg",
  },
  {
    id: 45,
    title: "Evening Crosswalk",
    category: "Street",
    image: "/portfolio/DSC_9233.jpg",
  },
  {
    id: 46,
    title: "Gentle Nature Light",
    category: "Nature",
    image: "/portfolio/DSC_9260.jpg",
  },
  {
    id: 47,
    title: "Soft Portrait Frame",
    category: "Portrait",
    image: "/portfolio/DSC_9726.jpg",
  },
  {
    id: 48,
    title: "Street Composition",
    category: "Street",
    image: "/portfolio/DSC_9776.jpg",
  },
  {
    id: 49,
    title: "Dawn Colors",
    category: "Landscape",
    image: "/portfolio/DSC_9849.jpg",
  },
];

function PortfolioItem({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-muted aspect-4/5 cursor-pointer"
    >
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        width={800} // ★ ここを追加
        height={1000} // ★ ここを追加（縦長ならこのくらい）
        loading="lazy" // ★ 遅延読み込み
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="text-primary-foreground">
          <p className="text-xs font-light tracking-widest uppercase mb-2 opacity-90">
            {item.category}
          </p>
          <h3 className="text-2xl font-serif font-light">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioGrid() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="work" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground font-light">
            私の作品の一部をご覧ください
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
