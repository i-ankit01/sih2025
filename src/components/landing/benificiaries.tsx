"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, UserRound, ClipboardList } from "lucide-react"

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Beneficiaries() {
  return (
    <section aria-labelledby="beneficiaries-title" >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <h2 id="beneficiaries-title" className="text-balance text-2xl font-semibold md:text-3xl">
            Who Benefits?
          </h2>
          <p className="mt-3 max-w-prose text-slate-700">
            A connected ecosystem that supports every stakeholder in education.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.li variants={item} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-green-600/10 p-2">
                <GraduationCap className="size-5 text-green-600" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">Students</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Fun, interactive lessons that build confidence and essential skills.
                </p>
                <img
                  src="/cartoon-students-using-tablets-in-class.png"
                  alt="Cartoon students using tablets in class"
                  className="mt-3 w-full rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </motion.li>

          <motion.li variants={item} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-green-600/10 p-2">
                <Users className="size-5 text-green-600" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">Teachers</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Ready-to-use content and simple dashboards to guide learning.
                </p>
                <img
                  src="/cartoon-teacher-guiding-students-with-a-laptop.png"
                  alt="Cartoon teacher guiding students with a laptop"
                  className="mt-3 w-full rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </motion.li>

          <motion.li variants={item} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-green-600/10 p-2">
                <UserRound className="size-5 text-green-600" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">Parents</h3>
                <p className="mt-1 text-sm text-slate-700">
                  See progress and support learning at home, even with limited devices.
                </p>
                <img
                  src="/cartoon-parent-and-child-learning-on-a-phone.png"
                  alt="Cartoon parent and child learning on a phone"
                  className="mt-3 w-full rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </motion.li>

          <motion.li variants={item} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-green-600/10 p-2">
                <ClipboardList className="size-5 text-green-600" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">Administrators</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Monitor usage, allocate resources, and plan improvements at scale.
                </p>
                <img
                  src="/cartoon-school-administrator-reviewing-dashboards.png"
                  alt="Cartoon school administrator reviewing dashboards"
                  className="mt-3 w-full rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}
