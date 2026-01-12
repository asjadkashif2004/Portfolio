import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FaCode,
    FaShieldAlt,
    FaRocket,
    FaUsers,
    FaCheckCircle,
    FaLightbulb,
} from 'react-icons/fa'

const WhyHireMe = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const reasons = [
        {
            icon: FaUsers,
            title: 'Professional Industry Experience',
            description:
                'I have hands-on professional experience working as an Accountant at Waleed Laptop, where I managed records, handled financial data, and developed strong attention to detail and responsibility in a real business environment.',
            color: 'from-white-400 to-cyan-400',
        },
        {
            icon: FaLightbulb,
            title: 'Creative & Visual Design Skills',
            description:
                'As a Graphics Designer, I have designed visual content with a focus on clarity, branding, and user engagement. This creativity helps me build visually appealing and user-friendly digital products.',
            color: 'from-pink-400 to-purple-400',
        },
        {
            icon: FaRocket,
            title: 'Quantum Computing Internship Experience',
            description:
                'I completed a Quantum Computer Engineering internship at CETQAP, where I gained exposure to advanced computational concepts, problem-solving techniques, and cutting-edge research-oriented thinking.',
            color: 'from-purple-400 to-indigo-400',
        },
        {
            icon: FaCode,
            title: 'Full-Stack Laravel Development',
            description:
                'As a Full Stack Laravel Developer internee at UltraSoft Systems, I worked on building secure, scalable web applications, handling backend logic, databases, and frontend integration in a professional development environment.',
            color: 'from-black-400 to-red-400',
        },
        {
            icon: FaShieldAlt,
            title: 'Responsible & Security-Minded Approach',
            description:
                'My professional roles have trained me to handle sensitive data responsibly, follow structured workflows, and maintain security and accuracy in both financial systems and software applications.',
            color: 'from-orange-400 to-red-400',
        },
        {
            icon: FaCheckCircle,
            title: 'Growth-Oriented & Adaptable',
            description:
                'Coming from diverse roles across accounting, design, research, and software development, I adapt quickly, learn continuously, and bring a well-rounded perspective to every project I work on.',
            color: 'from-yellow-400 to-orange-400',
        },
    ]

    const strengths = [
        'Strong fundamentals in Computer Science',
        'Hands-on experience with modern tech stack',
        'Confident and disciplined work ethic',
        'Ability to work independently and in teams',
        'Commitment to delivering on time',
        'Attention to detail and quality',
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    }

    return (
        <section
            id="why-hire-me"
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
                        <span className="text-gradient">Why Hire Me?</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        What sets me apart as a full-stack developer ready for professional opportunities
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            variants={itemVariants}
                            className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reason.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                                <reason.icon
                                    className={`text-3xl ${reason.color.replace('from-', 'text-').split(' ')[0]}`}
                                />

                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">
                                {reason.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass rounded-2xl p-8 max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center font-display">
                        Additional Strengths
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={strength}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                                <span className="text-white/90">{strength}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Let's Work Together
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyHireMe

