"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          ref={sectionRef}
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-3/4 bg-muted"
          >
            <Image
              src="/professional-photographer-with-camera-portrait.jpg"
              alt="y u y a"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-light tracking-widest text-muted-foreground uppercase mb-3">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">
                y u y a
              </h2>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="font-light">
                東京を拠点に活動するフォトグラファーです。人々の自然な表情や、風景の美しい瞬間を捉えることを得意としています。
              </p>
              <p className="font-light">
                ポートレート、ウェディング、商業撮影など、幅広いジャンルの撮影を手がけています。お客様一人ひとりのストーリーを大切に、心に残る写真をお届けします。
              </p>
              <p className="font-light">
                カメラを通して、あなたの大切な瞬間を永遠に残すお手伝いをさせてください。
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-sm font-light tracking-widest uppercase mb-4 text-muted-foreground">
                Specialties
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Portrait",
                  "Wedding",
                  "Landscape",
                  "Commercial",
                  "Editorial",
                ].map((specialty, index) => (
                  <motion.span
                    key={specialty}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-background border border-border text-sm font-light"
                  >
                    {specialty}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
