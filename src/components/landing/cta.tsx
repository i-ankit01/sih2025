"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, Handshake } from "lucide-react"

export function Cta() {
  const handleGetInvolved = () => {
    window.alert("Thanks for your interest! We will add a form here soon.")
  }
  const handleContact = () => {
    const el = document.getElementById("footer-contact")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    else window.alert("Contact form coming soon!")
  }

  return (
    <section id="cta" aria-labelledby="cta-title">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white p-8 text-center shadow-xl md:p-12"
        >
          <h2 id="cta-title" className="text-pretty text-2xl font-semibold md:text-3xl">
            Join Us in Empowering Rural Youth
          </h2>
          <p className="mx-auto mt-3 max-w-prose text-slate-700">
            Together we can make digital learning accessible, engaging, and effective for every student in Nabha.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={handleGetInvolved} className="bg-green-600 text-white hover:bg-green-700">
              <Handshake className="mr-2 size-4" aria-hidden />
              Get Involved
            </Button>
            <Button
              onClick={handleContact}
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-50 bg-transparent"
            >
              <Mail className="mr-2 size-4" aria-hidden />
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
      <p id="footer-contact" className="sr-only">
        Contact information coming soon.
      </p>
    </section>
  )
}
