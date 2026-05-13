import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="navbar-logo">
              GOT BIKE?
            </a>
            <p>
              Expert bike repair with German precision.
              Honest work, fair prices, fast turnaround.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#book">Book Repair</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Borstelweg+2,+7545+MS+Enschede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin size={14} style={{ display: 'inline', marginRight: 6 }} />
                  Borstelweg 2, 7545 MS Enschede
                </a>
              </li>
              <li><a href="tel:+31618625613"><Phone size={14} style={{ display: 'inline', marginRight: 6 }} />+31 6 18625613</a></li>
              <li><a href="mailto:kazaaam@me.com"><Mail size={14} style={{ display: 'inline', marginRight: 6 }} />kazaaam@me.com</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <div className="hours-line"><span>Mon – Fri</span><span>9:00 – 19:00</span></div>
            <div className="hours-line"><span>Saturday</span><span>10:00 – 16:00</span></div>
            <div className="hours-line"><span>Sunday</span><span>Closed</span></div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GOT BIKE? All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
