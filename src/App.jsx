import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Coverage from './components/Coverage'
import WhyChooseUs from './components/WhyChooseUs'
import CTASection from './components/CTASection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Coverage />
        <WhyChooseUs />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
