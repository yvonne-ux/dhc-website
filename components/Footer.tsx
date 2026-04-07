import { Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Services', href: '#services' },
  { label: 'Why DHC', href: '#why-dhc' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Permanent Recruitment',
  'Temporary & Contract',
  'Payroll Outsourcing',
  'Business Process Outsourcing',
  'Training & Development',
  'Employer of Record',
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/cropped-favicon.png"
                  alt="DHC"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-sora font-bold text-white text-sm leading-tight">
                  Dynamic Human Capital
                </div>
                <div className="text-blue-400 text-xs">Part of Elitez Group</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              People-first staffing solutions connecting talent with opportunity
              across Singapore and Southeast Asia.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/dynamic-human-capital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/dynamichumancapital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://elitez.asia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400/70 hover:text-blue-400 transition-colors"
                >
                  Elitez Group ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-500">
                  2 Kallang Ave, CT Hub,<br />
                  #03-08, Singapore 339407
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+6560500777" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                  +65 6050 0777
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@dhc.com.sg" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                  info@dhc.com.sg
                </a>
              </li>
            </ul>

            {/* MOM badge */}
            <div className="mt-6 px-3 py-2.5 bg-slate-900 border border-slate-800 rounded-lg">
              <p className="text-xs text-slate-500 font-medium">MOM Licensed Agency</p>
              <p className="text-xs text-slate-600 mt-0.5">EA License No: 12C5492</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="text-xs text-slate-600">
              © 2025 Dynamic Human Capital Pte Ltd. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">·</span>
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>Part of</span>
            <a
              href="https://elitez.asia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400/70 hover:text-blue-400 font-medium transition-colors"
            >
              Elitez Group
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
