"use client";

import { useRef } from "react";
import { Mail, Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-2xl">
        {" "}
        {/* ★中央寄せ・幅調整 */}
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground font-light">
            撮影のご依頼・お問い合わせはこちらから
          </p>
        </motion.div>
        {/* ★ 右カラム削除 → 左カラムだけ残して中央寄せ */}
        <div ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="space-y-12 text-center" // ★中央寄せ
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-serif font-light mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 flex flex-col items-center">
                {/* メール */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <Link
                    href="mailto:yuya.contact.photo@gmail.com"
                    className="flex items-center gap-3"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="font-light">
                      yuya.contact.photo@gmail.com
                    </span>
                  </Link>
                </motion.div>

                {/* Instagram */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <Link
                    href="https://www.instagram.com/yuuzaay"
                    className="flex items-center gap-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="font-light">@yuuzaay</span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Based in Tokyo */}
            <div className="text-center">
              <h3 className="text-xl font-serif font-light mb-4">
                Based in Tokyo
              </h3>
              <p className="text-foreground/80 font-light leading-relaxed">
                東京を拠点に、全国での撮影が可能です。
                <br />
                お気軽にご相談ください。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
