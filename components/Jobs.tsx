'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Award, Zap } from 'lucide-react'

const stats = [
  { label: 'Roles Filled', value: 500, suffix: '+', icon: TrendingUp, color: 'text-blue-600' },
  { label: 'Client Companies', value: 200, suffix: '+', icon: Users, color: 'text-indigo-600' },
  { label: 'Years Experience', value: 12, suffix: '+', icon: Award, color: 'text-violet-600' },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const duration = 1800

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

const jobPlatforms = [
  {
    id: 'mcf',
    name: 'MyCareersFuture',
    shortName: 'MCF',
    logo: (
      <svg viewBox="0 0 120 40" className="w-28 h-10" fill="none">
        <rect width="120" height="40" rx="6" fill="#1e40af" />
        <text x="10" y="26" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">MCF</text>
        <text x="42" y="26" fill="#93c5fd" fontSize="9" fontWeight="500" fontFamily="Arial">MyCareersFuture</text>
      </svg>
    ),
    description: 'Singapore\'s national jobs portal by NTUC and the government. Browse current DHC-posted roles across all industries.',
    tag: 'Government Portal',
    tagColor: 'bg-blue-50 text-blue-700',
    url: 'https://www.mycareersfuture.gov.sg/search?search=dynamic+human+capital&sortBy=new_posting_date',
    accent: 'from-blue-600 to-blue-800',
    border: 'border-blue-200 hover:border-blue-400',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    highlight: 'bg-blue-50',
  },
  {
    id: 'jobstreet',
    name: 'JobStreet',
    shortName: 'JS',
    logo: (
      <svg viewBox="0 0 120 40" className="w-28 h-10" fill="none">
        <rect width="120" height="40" rx="6" fill="#0f4c81" />
        <text x="10" y="26" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">JobStreet</text>
      </svg>
    ),
    description: 'Southeast Asia\'s leading job platform. Discover DHC opportunities for fresh graduates and experienced professionals.',
    tag: 'Regional Platform',
    tagColor: 'bg-indigo-50 text-indigo-700',
    url: 'https://www.jobstreet.com.sg/jobs?q=Dynamic+Human+Capital&sortmode=ListedDate',
    accent: 'from-indigo-600 to-indigo-800',
    border: 'border-indigo-200 hover:border-indigo-400',
    buttonBg: 'bg-indigo-600 hover:bg-indigo-700',
    highlight: 'bg-indigo-50',
  },
]

export default function Jobs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="jobs" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            <Zap size={14} />
            Open Opportunities
          </span>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Explore Open Roles
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Find your next opportunity through Singapore&apos;s top hiring platforms.
          </p>
        </motion.div>

        {/* Job Platform Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {jobPlatforms.map((platform, i) => (
            <motion.a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative block rounded-2xl border-2 ${platform.border} bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer`}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${platform.accent}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    {platform.logo}
                    <span className={`inline-block mt-3 px-2.5 py-1 rounded-md text-xs font-semibold ${platform.tagColor}`}>
                      {platform.tag}
                    </span>
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-slate-300 group-hover:text-blue-500 transition-colors mt-1"
                  />
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {platform.description}
                </p>

                {/* View Jobs Button with pulse */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-xl ${platform.buttonBg} opacity-30 animate-ping-slow`}
                    />
                    <button
                      className={`relative ${platform.buttonBg} text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md`}
                    >
                      View Jobs →
                    </button>
                  </div>
                  <span className="text-slate-400 text-xs">Opens in new tab</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 sm:p-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-white mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-200 text-xs sm:text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
