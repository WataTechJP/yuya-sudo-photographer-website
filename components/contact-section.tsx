"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message || "送信に失敗しました。時間をおいて再度お試しください。"
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl">
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

        <div className="grid md:grid-cols-2 gap-12" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-serif font-light mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
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
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-light">+81 90-1234-5678</span>
                </motion.div> */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 }}
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

            <div>
              <h3 className="text-xl font-serif font-light mb-4">
                Based in Tokyo
              </h3>
              <p className="text-foreground/80 font-light leading-relaxed">
                東京を中心に、全国での撮影が可能です。
                <br />
                お気軽にご相談ください。
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-light mb-2">
                お名前
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="font-light"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-light mb-2">
                メールアドレス
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="font-light"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-light mb-2"
              >
                メッセージ
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="font-light"
              />
            </div>
            <Button
              type="submit"
              className="w-full font-light tracking-wide"
              disabled={status === "loading"}
            >
              {status === "loading" ? "送信中..." : "送信する"}
            </Button>

            {status === "success" && (
              <p className="text-sm text-green-600 mt-2">
                メッセージが送信されました。折り返しご連絡いたします。
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
