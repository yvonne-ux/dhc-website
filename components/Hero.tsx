'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Building2 } from 'lucide-react'

const shapes = [
  { size: 120, x: '8%', y: '15%', delay: 0, duration: 8, opacity: 0.12 },
  { size: 80, x: '85%', y: '10%', delay: 1.5, duration: 10, opacity: 0.1 },
  { size: 200, x: '75%', y: '60%', delay: 0.5, duration: 12, opacity: 0.06 },
  { size: 60, x: '20%', y: '75%', delay: 2, duration: 9, opacity: 0.15 },
  { size: 140, x: '50%', y: '80%', delay: 1, duration: 11, opacity: 0.08 },
  { size: 90, x: '92%', y: '40%', delay: 3, duration: 7, opacity: 0.1 },
  { size: 50, x: '35%', y: '20%', delay: 0.8, duration: 9, opacity: 0.18 },
]

const words = ['Your Career.', 'Your Future.', 'Starts Here.']

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor-glow'
    document.body.appendChild(cursor)

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.removeChild(cursor)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden"
    >
      {/* Floating geometric shapes */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/20"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            opacity: s.opacity,
            background: `radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -20, 8, 0],
            x: [0, 8, -5, 0],
            rotate: [0, 10, -5, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-blue-200 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Part of Elitez Group · Trusted in 5 SEA Markets
        </motion.div>

        {/* Headline */}
        <div className="mb-6 overflow-hidden">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`block font-sora font-extrabold leading-tight ${
                i < 2 ? 'text-white' : 'text-blue-300'
              } text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-blue-100/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Singapore&apos;s leading recruitment partner — connecting top talent with
          outstanding companies across Southeast Asia since 2012.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#jobs')}
            className="group flex items-center gap-3 px-8 py-4 bg-white text-blue-900 font-bold text-base rounded-2xl shadow-xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-all btn-primary min-w-[200px] justify-center"
          >
            <Briefcase size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
            I&apos;m a Candidate
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-3 px-8 py-4 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 hover:border-blue-400/70 text-white font-bold text-base rounded-2xl backdrop-blur-sm transition-all min-w-[200px] justify-center"
          >
            <Building2 size={20} className="group-hover:scale-110 transition-transform" />
            I&apos;m an Employer
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-blue-200/60 text-sm"
        >
          {['MOM Licensed', 'ISO Certified', 'CPF Registered', 'TAFEP Compliant'].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5 cursor-pointer"
          onClick={() => scrollTo('#jobs')}
        >
          <div className="w-1 h-2.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
