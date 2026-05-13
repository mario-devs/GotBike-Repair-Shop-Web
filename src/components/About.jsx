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
            <h2 className="section-title">Professional Care, Local Heart</h2>
            <p className="section-subtitle">
              GOT BIKE?: Dedicated to keeping Enschede riding.
            </p>
            <p>
              We provide high-quality bicycle repairs with a focus on precision and reliability. 
              Our neighborhood shop is built on trust and a commitment to the local cycling 
              community. Whether you need a quick adjustment or a complete overhaul, we ensure 
              every bike receives professional attention and care. We are a small, 
              approachable team dedicated to making sure your ride is always ready for the road.
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
                <div className="stat-label">Years of Experience</div>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <div className="stat-number">Local</div>
                <div className="stat-label">Enschede Focused</div>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="stat-number">Expert</div>
                <div className="stat-label">Technical Precision</div>
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
                alt="Professional workshop" 
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
