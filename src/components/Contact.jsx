import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm, ValidationError } from '@formspree/react'

// Contact Icons
import { MdEmail, MdLocationOn } from 'react-icons/md'

// Social Icons
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    // ✅ REAL Formspree hook (your form ID)
    const [state, handleSubmit] = useForm('mnjjqzva')

    const contactInfo = [
        {
            icon: MdEmail,
            label: 'Email',
            value: 'asjadkashif2004@gmail.com',
            href: 'mailto:asjadkashif2004@gmail.com',
            color: 'from-blue-400 to-cyan-400',
        },
        {
            icon: MdLocationOn,
            label: 'Location',
            value: 'Pakistan',
            color: 'from-purple-400 to-pink-400',
        },
    ]

    const socialLinks = [
        {
            icon: FaGithub,
            href: 'https://github.com/yourusername',
            label: 'GitHub',
            color: 'from-gray-400 to-gray-600',
        },
        {
            icon: FaLinkedinIn,
            href: 'https://linkedin.com/in/yourusername',
            label: 'LinkedIn',
            color: 'from-blue-500 to-blue-700',
        },
        {
            icon: FaXTwitter,
            href: 'https://twitter.com/yourusername',
            label: 'Twitter / X',
            color: 'from-slate-400 to-slate-600',
        },
        {
            icon: SiGmail,
            href: 'mailto:asjadkashif2004@gmail.com',
            label: 'Gmail',
            color: 'from-red-400 to-pink-500',
        },
    ]

    return (
        <section
            id="contact"
            ref={ref}
            className="relative py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="container mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
                        <span className="text-gradient">Get In Touch</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Ready to collaborate? Let’s discuss how I can help bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="glass-strong rounded-2xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-6 font-display">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-white/10 transition-all group"
                                    >
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                                            <info.icon className="text-xl text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-sm">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-strong rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 font-display">
                                Connect With Me
                            </h3>

                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ scale: 1.2 }}
                                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center`}
                                    >
                                        <social.icon className="text-xl text-white" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="glass-strong rounded-2xl p-6 lg:p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 font-display">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {['name', 'email', 'subject'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-white/80 mb-2 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        required
                                        className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ValidationError prefix={field} field={field} errors={state.errors} />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium text-white/80 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            {state.succeeded && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm"
                                >
                                    Message sent successfully! I’ll get back to you soon.
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={state.submitting}
                                whileHover={{ scale: state.submitting ? 1 : 1.05 }}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg disabled:opacity-50"
                            >
                                {state.submitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Contact
