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
            <h2 className="section-title">Built on Grease &amp; Passion</h2>
            <p className="section-subtitle">
              GOT BIKE?: A legacy of German precision, now serving Enschede.
            </p>
            <p>
              Originally from Germany, Martin brought his family's multi-generational 
              expertise in bicycle mechanics to the Netherlands. In our large, state-of-the-art 
              shop, every repair gets the same meticulous attention that has been 
              our family tradition for decades. No shortcuts, no upsells — just 
              honest, world-class work at fair prices.
            </p>

            <div className="about-stats">
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <div className="stat-number">5K+</div>
                <div className="stat-label">Bikes Repaired</div>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="stat-number">4.9</div>
                <div className="stat-label">Avg. Rating</div>
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
                src="https://images.unsplash.com/photo-1521406560946-836798e16ea8?q=80&w=1000&auto=format&fit=crop" 
                alt="Bike repair workshop" 
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
