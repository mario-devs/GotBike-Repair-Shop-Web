import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import './BookRepair.css'

export default function BookRepair() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="book-repair section" id="book">
      <div className="container">
        <motion.div
          className="book-repair-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Book a Repair</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Fill out the form and we'll get back to you within a few hours.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              className="book-form"
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="+31 6 18625613" />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="bike-type">Bike Type</label>
                <select id="bike-type" required defaultValue="">
                  <option value="" disabled>Select your bike type</option>
                  <option value="road">Road Bike</option>
                  <option value="mountain">Mountain Bike</option>
                  <option value="hybrid">Hybrid / City Bike</option>
                  <option value="ebike">E-Bike</option>
                  <option value="gravel">Gravel Bike</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="issue">Describe the Issue</label>
                <textarea
                  id="issue"
                  placeholder="Tell us what's wrong — weird noises, shifting problems, flat tire..."
                  rows={4}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={18} />
                Submit Repair Request
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="success-message"
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <CheckCircle size={56} strokeWidth={1.5} />
              </motion.div>
              <h3>Request Received!</h3>
              <p>We'll review your details and get back to you shortly. Thanks for choosing GOT BIKE?.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
