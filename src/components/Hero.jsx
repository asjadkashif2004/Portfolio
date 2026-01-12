import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/asjadkashif2004', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'asjadkashif2004@gmail.com', label: 'Email' },
    ]

    return (
        <section
            id="home"
            ref={ref}
            className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-blue-300 mb-4">
                            Full-Stack Developer
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-display"
                    >
                        <span className="block text-white">M. Asjad Kashif</span>
                        <span className="block text-gradient mt-2">Turning Ideas into</span>
                        <span className="block text-gradient">Scalable Digital Products</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl sm:text-2xl text-white/80 mb-4 font-medium"
                    >
                        Full-Stack Developer | React, Laravel, Node, Flask
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Computer Science undergraduate at <span className="text-blue-400 font-semibold">NUST</span> (National University of Sciences & Technology) with strong expertise in designing scalable, secure, and user-focused applications. I bring confidence, discipline, and a strong problem-solving mindset to every project, delivering production-ready solutions that exceed expectations.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4 mb-8"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                        >
                            View My Work
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-blue-400 transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="text-xl" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                aria-label="Scroll down"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-3 bg-white/50 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero

