import { motion } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  {
    num: '1',
    title: 'Book Online',
    desc: 'Pick a service and choose a date that works for you. It takes 30 seconds.',
  },
  {
    num: '2',
    title: 'Drop Off Your Bike',
    desc: 'Bring your bike to our shop. We\'ll inspect it and confirm the work needed.',
  },
  {
    num: '3',
    title: 'Ride Away Happy',
    desc: 'We\'ll text you when it\'s ready. Pay, hop on, and enjoy the ride.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <motion.div
          className="how-it-works-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Three simple steps to get your bike back in shape.
          </p>
        </motion.div>

        <motion.div
          className="steps-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {steps.map((s) => (
            <motion.div className="step" key={s.num} variants={stepVariants}>
              <div className="step-number">{s.num}</div>
              {s.num !== '3' && <div className="step-connector" />}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
