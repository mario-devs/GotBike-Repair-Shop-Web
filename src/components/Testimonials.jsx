import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import './Testimonials.css'

const reviews = [
  {
    name: 'Anna M.',
    initials: 'AM',
    role: 'Daily Commuter',
    text: 'Had my brakes done in under an hour. Smooth as butter now. These guys are the real deal.',
    stars: 5,
  },
  {
    name: 'Carlos R.',
    initials: 'CR',
    role: 'Weekend Rider',
    text: 'Full overhaul on my vintage steel frame. They treated it like it was their own bike. Incredible work.',
    stars: 5,
  },
  {
    name: 'Sophie L.',
    initials: 'SL',
    role: 'Mountain Biker',
    text: 'Honest pricing and they actually explain what they\'re doing. Refreshing compared to other shops.',
    stars: 5,
  },
  {
    name: 'James K.',
    initials: 'JK',
    role: 'Bike Courier',
    text: 'I depend on my bike for work. They got me back on the road same day. Lifesavers.',
    stars: 5,
  },
  {
    name: 'Mia T.',
    initials: 'MT',
    role: 'Casual Rider',
    text: 'First time getting a bike fitting — total game changer. No more knee pain on long rides!',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Riders Say</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Don't just take our word for it.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="testimonials-track"
        style={{ paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2 + 2rem))' }}
        drag="x"
        dragConstraints={{ right: 0, left: -((reviews.length - 2) * 380) }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {reviews.map((r) => (
          <motion.div
            className="testimonial-card"
            key={r.name}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Stars count={r.stars} />
            <blockquote>"{r.text}"</blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{r.initials}</div>
              <div>
                <div className="testimonial-name">{r.name}</div>
                <div className="testimonial-role">{r.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
