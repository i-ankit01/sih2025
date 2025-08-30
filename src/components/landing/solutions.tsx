"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CloudOff, Languages, BarChart3, Cpu } from "lucide-react"

const card = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const features = [
  {
    title: "Works Offline",
    description:
      "Content usable without stable internet—syncs automatically when connectivity returns.",
    icon: CloudOff,
  },
  {
    title: "Interactive Local Language Lessons",
    description:
      "Engaging activities in local languages to improve comprehension and retention.",
    icon: Languages,
  },
  {
    title: "Teacher Dashboards",
    description:
      "Simple analytics to track progress, spot gaps, and personalize support.",
    icon: BarChart3,
  },
  {
    title: "Low-End Device Optimized",
    description:
      "Fast, lightweight design that runs smoothly on older phones and PCs.",
    icon: Cpu,
  },
];

export function Solutions() {
  return (
    <section aria-labelledby="solutions-title">
      <div className="mx-auto max-w-8xl px-24 py-16 md:py-24">
        <div className="mb-10">
          <h2 id="solutions-title" className="text-balance text-2xl font-semibold md:text-3xl">
            Our Digital Learning Platform
          </h2>
          <p className="mt-3 max-w-prose text-slate-700">
            Designed for real-world rural constraints, built to empower every learner and teacher.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-5 md:grid-cols-2"
        >
          {features.map(({ title, description, icon: Icon } , key)=>(
                    <motion.div variants={card}>
                      <Card
                        className="h-full transition-all duration-300 ease-out 
                       hover:-translate-y-1 hover:scale-101 hover:shadow-lg cursor-pointer"
                      >
                        <CardHeader className="flex flex-row items-center gap-3">
                          <span className="rounded-lg bg-accent/10 p-2">
                            <Icon
                              className="size-5 text-accent"
                              aria-hidden
                            />
                          </span>
                          <CardTitle className="text-base">{title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-slate-700">{description}
                        </CardContent>
                      </Card>
                    </motion.div>
                    ))}
        </motion.div>
      </div>
    </section>
  )
}
