"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, AlertTriangle } from "lucide-react";
import { features } from "process";

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const benefits = [
  {
    title: "Employability Gap",
    description:
      "Students equipped with digital skills are better prepared for future careers and entrepreneurship.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Urban–Rural Divide",
    description:
      "Access to quality digital education narrows the gap between rural and urban learning outcomes.",
    icon: Building2,
  },
  {
    title: "Urgency of Literacy",
    description:
      "Without intervention, students risk being left behind in a rapidly digitizing world.",
    icon: AlertTriangle,
  },
];

export function Impact() {
  return (
    <section aria-labelledby="impact-title">
      <div className="mx-auto max-w-8xl px-24 py-16 md:py-24">
        <div className="mb-10">
          <h2
            id="impact-title"
            className="text-balance text-2xl font-semibold md:text-3xl"
          >
            Why This Matters
          </h2>
          <p className="mt-3 max-w-prose text-slate-700">
            Digital literacy opens doors—reducing inequality and improving
            long-term opportunities.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-5 md:grid-cols-3"
        >
          {benefits.map(({ title, description, icon: Icon } , key)=>(
          <motion.div variants={cardVariants}>
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
  );
}
