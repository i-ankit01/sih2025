"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, UserRound, ClipboardList } from "lucide-react";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stakeholders = [
  {
    title: "Students",
    description:
      "Fun, interactive lessons that build confidence and essential skills.",
    icon: GraduationCap,
    imgSrc: "/cartoon-students-using-tablets-in-class.png",
    imgAlt: "Cartoon students using tablets in class",
  },
  {
    title: "Teachers",
    description:
      "Ready-to-use content and simple dashboards to guide learning.",
    icon: Users,
    imgSrc: "/cartoon-teacher-guiding-students-with-a-laptop.png",
    imgAlt: "Cartoon teacher guiding students with a laptop",
  },
  {
    title: "Parents",
    description:
      "See progress and support learning at home, even with limited devices.",
    icon: UserRound,
    imgSrc: "/cartoon-parent-and-child-learning-on-a-phone.png",
    imgAlt: "Cartoon parent and child learning on a phone",
  },
  {
    title: "Administrators",
    description:
      "Monitor usage, allocate resources, and plan improvements at scale.",
    icon: ClipboardList,
    imgSrc: "/cartoon-school-administrator-reviewing-dashboards.png",
    imgAlt: "Cartoon school administrator reviewing dashboards",
  },
];

export function Beneficiaries() {
  return (
    <section aria-labelledby="beneficiaries-title">
      <div className="mx-auto max-w-8xl px-24 py-16 md:py-24">
        <div className="mb-10">
          <h2
            id="beneficiaries-title"
            className="text-balance text-2xl font-semibold md:text-3xl"
          >
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
          {stakeholders.map(
            ({ title, description, icon: Icon, imgSrc, imgAlt }, idx) => (
              <motion.li
                key={idx}
                variants={item}
                className="rounded-xl border p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="rounded-lg bg-accent/10 p-2">
                    <Icon className="size-5 text-accent" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{description}</p>
                    <div className="relative mt-3 w-full h-40">
                      {/* <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className="rounded-lg border object-cover"
                      /> */}
                    </div>
                  </div>
                </div>
              </motion.li>
            )
          )}
        </motion.ul>
      </div>
    </section>
  );
}
