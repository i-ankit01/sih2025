"use client";

import { motion } from "framer-motion";
import { MonitorX, WifiOff, PackageX } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const features = [
  {
    title: "Outdated infrastructure",
    description: "Limited computers, broken labs, and lack of maintenance.",
    icon: MonitorX,
  },
  {
    title: "Poor connectivity",
    description: "Unreliable internet prevents continuous learning.",
    icon: WifiOff,
  },
  {
    title: "Lack of resources",
    description:
      "Few quality digital lessons in local languages or offline formats.",
    icon: PackageX,
  },
];

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title">
      <div className="mx-auto max-w-8xl px-24 py-16 md:py-24">
        <div className="mb-10">
          <h2
            id="problem-title"
            className="text-balance text-2xl font-semibold md:text-3xl"
          >
            The Challenge in Nabha
          </h2>
          <p className="mt-3 max-w-prose text-slate-700">
            Many schools lack basic digital tools, consistent connectivity, and
            locally relevant content.
          </p>
        </div>

       
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 "
        >
           {features.map(({ title, description, icon: Icon }, key)=>(
          <motion.li
          key={key}
            variants={item}
            className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-all duration-300 ease-out 
             hover:-translate-y-1 hover:scale-101 hover:shadow-lg cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-accent/10 p-2">
                <Icon className="size-5 text-accent" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                 {description}
                </p>
              </div>
            </div>
          </motion.li>
          ))}
          </motion.ul>
      </div>
    </section>
  );
}
