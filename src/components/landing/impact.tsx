"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BriefcaseBusiness, Building2, AlertTriangle } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Impact() {
  return (
    <section aria-labelledby="impact-title">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <h2 id="impact-title" className="text-balance text-2xl font-semibold md:text-3xl">
            Why This Matters
          </h2>
          <p className="mt-3 max-w-prose text-slate-700">
            Digital literacy opens doors—reducing inequality and improving long-term opportunities.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-5 md:grid-cols-3"
        >
          <motion.div variants={cardVariants}>
            <Card className="h-full border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="rounded-lg bg-green-600/10 p-2">
                  <BriefcaseBusiness className="size-5 text-green-600" aria-hidden />
                </span>
                <CardTitle className="text-base">Employability Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Students equipped with digital skills are better prepared for future careers and entrepreneurship.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="h-full border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="rounded-lg bg-green-600/10 p-2">
                  <Building2 className="size-5 text-green-600" aria-hidden />
                </span>
                <CardTitle className="text-base">Urban–Rural Divide</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Access to quality digital education narrows the gap between rural and urban learning outcomes.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="h-full border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <span className="rounded-lg bg-green-600/10 p-2">
                  <AlertTriangle className="size-5 text-green-600" aria-hidden />
                </span>
                <CardTitle className="text-base">Urgency of Literacy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Without intervention, students risk being left behind in a rapidly digitizing world.
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
