"use client"

import { motion } from "framer-motion"
import { MonitorX, WifiOff, PackageX } from "lucide-react"

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <h2 id="problem-title" className="text-balance text-2xl font-semibold md:text-3xl">
            The Challenge in Nabha
          </h2>
          <p className="mt-3 max-w-prose text-slate-700">
            Many schools lack basic digital tools, consistent connectivity, and locally relevant content.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.li variants={item} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-green-600/10 p-2">
                <MonitorX className="size-5 text-green-600" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">Outdated infrastructure</h3>
                <p className="mt-1 text-sm text-slate-700">Limited computers, broken labs, and lack of maintenance.</p>
              </div>
            </div>
          </motion.li>

          <motion.li variants={item} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-green-600/10 p-2">
                <WifiOff className="size-5 text-green-600" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">Poor connectivity</h3>
                <p className="mt-1 text-sm text-slate-700">Unreliable internet prevents continuous learning.</p>
              </div>
            </div>
          </motion.li>

          <motion.li variants={item} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-green-600/10 p-2">
                <PackageX className="size-5 text-green-600" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">Lack of resources</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Few quality digital lessons in local languages or offline formats.
                </p>
              </div>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}
