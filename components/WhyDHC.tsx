'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, MapPin, Globe, Award, Star, CheckCircle } from 'lucide-react'

const pillars = [
  {
    icon: Globe,
    title: 'Part of Elitez Group',
    description: 'Backed by a regional HR conglomerate with operations across Singapore, Malaysia, Thailand, Vietnam, and the Philippines.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Award,
    title: '12+ Years Experience',
    description: 'Over a decade of placing talent across finance, tech, FMCG, healthcare, and government sectors in Singapore.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: MapPin,
    title: '9 Offices · 5 Markets',
    description: 'A strong regional footprint lets us source talent locally and internationally, giving clients access to a wider talent pool.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Shield,
    title: 'MOM Licensed Agency',
    description: 'Fully accredited by Singapore\'s Ministry of Manpower. We operate with full compliance, transparency, and professionalism.',
    color: 'bg-sky-50 text-sky-600',
  },
]

const clients = [
  'Unilever', 'Nestlé', 'Shopee', 'CPF Board',
  'Tan Tock Seng Hospital', 'NTUC', 'DBS Bank', 'Singtel',
  'Ministry of Education', 'ST Engineering',
]

const differentiators = [
  'Dedicated account manager for every client',
  'Average 72-hour shortlist turnaround',
  'Industry-specialist recruiters, not generalists',
  'Replacement guarantee on permanent placements',
  'Free consultation for new clients',
]

export default function WhyDHC() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="why-dhc" className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            <Star size={14} />
            Why Choose Us
          </span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            The DHC Difference
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            More than a staffing agency — we&apos;re your long-term workforce partner.
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all p-6"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-sora font-bold text-base text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Two-column: differentiators + client logos */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white"
          >
            <h3 className="font-sora font-bold text-xl mb-6">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4">
              {differentiators.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-blue-300 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="mt-8 pt-6 border-t border-blue-700 grid grid-cols-3 gap-4 text-center">
              {[['98%', 'Client Retention'], ['5k+', 'Placements'], ['4.8★', 'Rating']].map(([val, label]) => (
                <div key={label}>
                  <div className="font-sora font-extrabold text-xl text-white">{val}</div>
                  <div className="text-blue-300 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trusted by */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-sora font-bold text-xl text-slate-900 mb-6">
              Trusted By Singapore&apos;s Best
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {clients.map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="flex items-center gap-2.5 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-700 text-sm font-medium">{client}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-3"
            >
              <Shield size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 text-sm font-semibold">MOM Licensed Recruitment Agency</p>
                <p className="text-amber-700 text-xs mt-0.5">EA License No: 12C5492 · All placements comply with MOM Employment Act</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
