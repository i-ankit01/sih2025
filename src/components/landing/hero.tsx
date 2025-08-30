"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import studentAnimation from "@/assets/landing/student.json";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const handleLearnMore = () => {
    const el = document.getElementById("problem");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleGetStarted = () => {
    const el = document.getElementById("cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-slate-200"
    >
      <div className="mx-auto max-w-8xl px-24 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-6"
          >
            <motion.h1
              id="hero-title"
              variants={fadeUp}
              className="text-pretty text-3xl font-semibold leading-tight md:text-5xl"
            >
              Bridging the Digital Divide in Rural Education
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-prose text-base leading-relaxed text-slate-700 md:text-lg"
            >
              Schools in Nabha face outdated infrastructure, low connectivity,
              and scarce digital resources—making it hard for students to build
              the modern skills they need to thrive.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={handleGetStarted}
                className="w-62 h-12 bg-primary shadow rounded-lg text-white text-xl hover:bg-primary/80 cursor-pointer"
              >
                Get Started
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="outline"
                className="w-62 h-12 bg-transparent shadow rounded-lg text-xl hover:bg-secondary/40 hover:text-black cursor-pointer"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span className="inline-block rounded-full bg-secondary border px-3 py-1 text-sm font-medium shadow">
                Community-first • Offline-ready • Local-language content
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto">
              <Lottie
                animationData={studentAnimation}
                loop={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
