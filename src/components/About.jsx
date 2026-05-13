import { motion } from 'framer-motion'
import { Bike } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="section-title">One Man, One Mission</h2>
            <p className="section-subtitle">
              GOT BIKE?: Precision engineering with a local heart.
            </p>
            <p>
              I'm Martin, and this shop is my passion project. Originally from Germany, I brought 
              my family's legacy of bike mechanics here to Enschede. It's mostly just me and a 
              casual assistant, which means you get direct, personalized service every time. 
              We're a small, friendly neighborhood shop where every bike is treated like family 
              and the coffee is always on the house.
            </p>

            <div className="about-stats">
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="stat-number">15+</div>
                <div className="stat-label">Years of Grease</div>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <div className="stat-number">Local</div>
                <div className="stat-label">Neighborhood Vibe</div>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="stat-number">1:1</div>
                <div className="stat-label">Personal Service</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-inner" style={{ width: '100%', height: '100%' }}>
              <img 
                src="/resources/istockphoto-1059130086-612x612.jpg" 
                alt="Martin's workshop" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="about-image-border" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
