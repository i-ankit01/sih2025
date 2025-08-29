"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CloudOff, Languages, BarChart3, Cpu } from "lucide-react"

const card = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Solutions() {
  return (
    <section aria-labelledby="solutions-title">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
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
          <motion.div variants={card}>
            <Card className="h-full border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="rounded-lg bg-green-600/10 p-2">
                  <CloudOff className="size-5 text-green-600" aria-hidden />
                </span>
                <CardTitle className="text-base">Works Offline</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Content usable without stable internet—syncs automatically when connectivity returns.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={card}>
            <Card className="h-full border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="rounded-lg bg-green-600/10 p-2">
                  <Languages className="size-5 text-green-600" aria-hidden />
                </span>
                <CardTitle className="text-base">Interactive Local Language Lessons</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Engaging activities in local languages to improve comprehension and retention.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={card}>
            <Card className="h-full border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="rounded-lg bg-green-600/10 p-2">
                  <BarChart3 className="size-5 text-green-600" aria-hidden />
                </span>
                <CardTitle className="text-base">Teacher Dashboards</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Simple analytics to track progress, spot gaps, and personalize support.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={card}>
            <Card className="h-full border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="rounded-lg bg-green-600/10 p-2">
                  <Cpu className="size-5 text-green-600" aria-hidden />
                </span>
                <CardTitle className="text-base">Low-End Device Optimized</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Fast, lightweight design that runs smoothly on older phones and PCs.
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
