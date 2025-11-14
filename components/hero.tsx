"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-3 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-light tracking-widest text-muted-foreground uppercase"
          >
            Visual Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-balance leading-[1.1]"
          >
            Capturing moments that matter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-6"
          >
            フォトグラファーとして、あなたの大切な瞬間を美しく記録します
          </motion.p>
        </div>
      </div>
    </section>
  )
}
