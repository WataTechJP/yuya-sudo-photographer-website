"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "Urban Landscapes",
    category: "Architecture",
    image: "/modern-city-architecture-photography.jpg",
  },
  {
    id: 2,
    title: "Portrait Session",
    category: "Portrait",
    image: "/professional-portrait-photography-natural-light.jpg",
  },
  {
    id: 3,
    title: "Nature's Beauty",
    category: "Landscape",
    image: "/serene-mountain-lake.png",
  },
  {
    id: 4,
    title: "Wedding Day",
    category: "Wedding",
    image: "/elegant-wedding-ceremony-photography.jpg",
  },
  {
    id: 5,
    title: "Product Photography",
    category: "Commercial",
    image: "/minimal-product-photography-on-white.jpg",
  },
  {
    id: 6,
    title: "Street Stories",
    category: "Documentary",
    image: "/candid-street-photography-urban-life.jpg",
  },
]

function PortfolioItem({ item, index }: { item: (typeof portfolioItems)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-muted aspect-[4/5] cursor-pointer"
    >
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="text-primary-foreground">
          <p className="text-xs font-light tracking-widest uppercase mb-2 opacity-90">{item.category}</p>
          <h3 className="text-2xl font-serif font-light">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

export function PortfolioGrid() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

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
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-4">Selected Work</h2>
          <p className="text-muted-foreground font-light">私の作品の一部をご覧ください</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
