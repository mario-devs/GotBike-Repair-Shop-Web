import { motion } from 'framer-motion'
import { Wrench, CircleDot, Settings, Zap, ShieldCheck, Bike } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Wrench size={22} />,
    title: 'Basic Tune-Up',
    desc: 'Brake and gear adjustment, tire inflation, chain lube, and a full safety check.',
    price: 'From €30',
  },
  {
    icon: <CircleDot size={22} />,
    title: 'Tire & Tube Replacement',
    desc: 'Flat fix or full tire swap. We carry all major brands and sizes in stock.',
    price: 'From €10',
  },
  {
    icon: <Settings size={22} />,
    title: 'Full Overhaul',
    desc: 'Complete strip-down, deep clean, bearing service, and rebuild from scratch.',
    price: 'From €115',
  },
  {
    icon: <Zap size={22} />,
    title: 'Brake Service',
    desc: 'Disc or rim brake bleed, pad replacement, rotor truing, and cable swap.',
    price: 'From €20',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Wheel Truing',
    desc: 'Precision spoke tensioning and rim straightening for a wobble-free ride.',
    price: 'From €15',
  },
  {
    icon: <Bike size={22} />,
    title: 'Bike Fitting',
    desc: 'Saddle height, handlebar reach, and cleat position tailored to your body.',
    price: 'From €45',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From a quick flat fix to a full rebuild, we handle it all with care.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((s) => (
            <motion.div className="service-card" key={s.title} variants={cardVariants}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-price">{s.price}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
