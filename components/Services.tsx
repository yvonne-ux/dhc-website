'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Clock, Calculator, Settings, GraduationCap, Globe, Layers } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Permanent Recruitment',
    tagline: 'Find Your Perfect Hire',
    description:
      'End-to-end talent acquisition for full-time roles. We source, screen, and place top professionals who align with your culture and goals.',
    details: [
      'Executive & mid-level search',
      'Industry-specific sourcing',
      'Behavioural assessments',
      'Post-placement support',
    ],
    gradient: 'from-blue-600 to-blue-800',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    icon: Clock,
    title: 'Temporary & Contract',
    tagline: 'Agile Workforce Solutions',
    description:
      'Scale your workforce up or down with flexible staffing. Ideal for project-based needs, seasonal peaks, or covering leave periods.',
    details: [
      'Short & long-term contracts',
      'Rapid deployment',
      'Managed headcount',
      'Nationwide coverage',
    ],
    gradient: 'from-indigo-600 to-indigo-800',
    lightBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    border: 'border-indigo-100',
  },
  {
    icon: Calculator,
    title: 'Payroll Outsourcing',
    tagline: 'Accurate & Compliant',
    description:
      'Delegate your payroll to our experts. We handle calculations, CPF submissions, IR8A filing, and all statutory compliance in Singapore.',
    details: [
      'CPF & MOM compliance',
      'IR8A / IRAS filing',
      'Leave & claims management',
      'Confidential reporting',
    ],
    gradient: 'from-sky-600 to-sky-800',
    lightBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    border: 'border-sky-100',
  },
  {
    icon: Settings,
    title: 'Business Process Outsourcing',
    tagline: 'Focus on What Matters',
    description:
      'Outsource non-core HR and administrative functions to us. We streamline operations so your team can focus on strategic priorities.',
    details: [
      'HR administration',
      'Onboarding & offboarding',
      'Data management',
      'Process optimisation',
    ],
    gradient: 'from-violet-600 to-violet-800',
    lightBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    border: 'border-violet-100',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    tagline: 'Invest in Your People',
    description:
      'Upskill your workforce with targeted programmes. From leadership development to operational training — we build capabilities that drive results.',
    details: [
      'WSQ-aligned programmes',
      'Leadership coaching',
      'Skills gap analysis',
      'On-site & virtual delivery',
    ],
    gradient: 'from-emerald-600 to-emerald-800',
    lightBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    icon: Globe,
    title: 'Employer of Record (EOR)',
    tagline: 'Hire Globally, Worry-Free',
    description:
      'Expand into new markets without setting up a local entity. We become the legal employer on your behalf, managing all compliance and payroll.',
    details: [
      'Legal employer entity',
      'Cross-border compliance',
      'Benefits administration',
      'Risk management',
    ],
    gradient: 'from-rose-600 to-rose-800',
    lightBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    border: 'border-rose-100',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            <Layers size={14} />
            What We Offer
          </span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Comprehensive HR solutions tailored for businesses of every size.
            Hover over a card to learn more.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flip-card h-72"
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div
                    className={`flip-card-front ${service.lightBg} border-2 ${service.border} flex flex-col items-center justify-center p-8 text-center shadow-sm`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-5 ${service.iconColor}`}
                    >
                      <Icon size={28} />
                    </div>
                    <h3 className="font-sora font-bold text-lg text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">{service.tagline}</p>
                    <div className="mt-4 text-xs text-slate-400 flex items-center gap-1">
                      <span>Hover to learn more</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={`flip-card-back bg-gradient-to-br ${service.gradient} flex flex-col justify-between p-7 text-white shadow-lg`}
                  >
                    <div>
                      <h3 className="font-sora font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {service.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-white/90">
                          <svg className="w-3.5 h-3.5 text-white/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">
            Not sure which service fits your needs?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
          >
            Talk to Our Team →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
