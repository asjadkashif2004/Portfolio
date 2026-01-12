import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:asjad.kashif@example.com', label: 'Email' },
    ]

    return (
        <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white/70 text-sm text-center md:text-left"
                    >
                        <p>
                            © {currentYear} <span className="text-gradient font-semibold">M. Asjad Kashif</span>. All rights reserved.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                                aria-label={social.label}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-6 text-center text-white/50 text-xs"
                >
                    <p>
                        PORTFOLIO WEBSITE
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer

