import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Dynamic Human Capital',
  description:
    'Privacy Policy for Dynamic Human Capital Pte Ltd — how we collect, use, and protect your personal data under Singapore\'s PDPA.',
}

const sections = [
  {
    title: 'Application of This Notice',
    content:
      'DHC collects personal data to provide recruiting and staffing services, act as an employer, and deliver HR-related services. The company requires certain personal information from candidates, job applicants, contractors, and former employees to proceed with job placement and related services.',
  },
  {
    title: 'Personal Data Collected',
    content: 'Examples of personal data DHC may collect include:',
    list: [
      'Full name, gender, date of birth, nationality',
      'Contact details (address, phone, email)',
      'Resume, educational and professional qualifications',
      'Employment history and references',
      'Salary information and bank account details',
      'Next-of-kin and family member details',
      'Work-related health information and disabilities',
      'Photographs',
    ],
  },
  {
    title: 'Collection, Use, and Disclosure',
    content:
      'DHC collects personal data with consent or where permitted by law. The company uses this data for:',
    list: [
      'Assessing and evaluating your suitability for employment in any current or prospective position',
      'Identity verification',
      'Sharing with clients for placement opportunities',
      'Handling inquiries and complaints',
      'Compliance with legal obligations',
      'Background checks and screening',
      'Crime prevention and office security',
      'Sending industry-relevant content and career resources',
    ],
  },
  {
    title: 'Consent and Withdrawal',
    content:
      'Individuals may withdraw consent in writing via email to the Data Protection Officer. Withdrawal may affect job placement eligibility and office access.',
  },
  {
    title: 'Data Protection Measures',
    content:
      'DHC implements administrative, physical and technical measures including encryption, access controls, authentication protocols, and regular security testing to safeguard your personal data.',
  },
  {
    title: 'Personal Data Retention',
    content:
      'DHC retains personal data as long as necessary for stated purposes or as required by law.',
  },
  {
    title: 'International Transfers',
    content:
      'Personal data may be transferred outside Singapore to service providers, with appropriate legal safeguards ensuring comparable protection standards.',
  },
  {
    title: 'Data Protection Officer',
    content: 'For requests regarding access, correction, or withdrawal of consent, please contact our Data Protection Officer:',
    contact: {
      email: 'DPO@elitez.asia',
    },
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Shield size={24} className="text-blue-200" />
            </div>
            <div>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl">Privacy Policy</h1>
              <p className="text-blue-200 text-sm mt-1">Dynamic Human Capital Pte Ltd</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-blue-200 mt-6">
            <span>Effective: 30 September 2023</span>
            <span>Last Updated: 4 August 2024</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
          <p className="text-slate-700 leading-relaxed">
            This Privacy Notice outlines how{' '}
            <strong>Dynamic Human Capital Pte Ltd ("DHC")</strong> collects, uses,
            discloses, and processes personal data under Singapore&apos;s{' '}
            <strong>Personal Data Protection Act (PDPA)</strong>.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-slate-100 pb-10 last:border-0">
              <h2 className="font-sora font-bold text-xl text-slate-900 mb-3">
                {i + 1}. {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">{section.content}</p>
              {'list' in section && section.list && (
                <ul className="space-y-2 mt-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {'contact' in section && section.contact && (
                <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Email: </span>
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {section.contact.email}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">
            For questions about this policy, contact us at{' '}
            <a href="mailto:info@dhc.com.sg" className="text-blue-600 hover:underline">
              info@dhc.com.sg
            </a>{' '}
            or visit our office at 2 Kallang Ave, CT Hub, #03-08, Singapore 339407.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
