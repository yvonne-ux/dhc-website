import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Jobs from '@/components/Jobs'
import Services from '@/components/Services'
import WhyDHC from '@/components/WhyDHC'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Jobs />
      <Services />
      <WhyDHC />
      <Contact />
      <Footer />
    </main>
  )
}
