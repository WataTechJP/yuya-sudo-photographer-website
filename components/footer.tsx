"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  return (
    <footer
      className="py-12 px-6 lg:px-12 border-t border-border"
      ref={footerRef}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-2xl font-serif font-light tracking-wide mb-2">
              y u y a
            </p>
            <p className="text-sm font-light text-muted-foreground">
              Professional Photographer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 text-sm font-light text-muted-foreground"
          >
            <a href="#work" className="hover:text-foreground transition-colors">
              Works
            </a>
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border text-center text-sm font-light text-muted-foreground"
        >
          <p>© 2025 Yuya Sudo Photography. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
