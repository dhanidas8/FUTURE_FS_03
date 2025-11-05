"use client";
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, cta }: { title: string, subtitle: string, cta: string }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{duration:0.6}} className="text-4xl md:text-6xl font-display leading-tight">
            {title}
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{delay:0.2}} className="mt-4 text-lg text-gray-200 max-w-xl">
            {subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{delay:0.4}} className="mt-6">
            <a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-volt text-black font-semibold" href="#shop">{cta}</a>
          </motion.div>
        </div>
        <div className="relative">
          <div className="w-full h-[340px] md:h-[420px] bg-gradient-to-br from-black/40 to-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
            <Image src="/placeholder-ai-hero.jpg" alt="AI hero" width={1200} height={700} className="object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}
