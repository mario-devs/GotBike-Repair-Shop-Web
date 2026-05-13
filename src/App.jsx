import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Testimonials from './components/Testimonials'
import BookRepair from './components/BookRepair'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Testimonials />
        <BookRepair />
      </main>
      <Footer />
    </div>
  )
}
