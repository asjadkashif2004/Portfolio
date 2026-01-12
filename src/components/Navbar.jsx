import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Why Hire Me', href: '#why-hire-me' },
        { name: 'Contact', href: '#contact' },
    ]

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-strong shadow-lg py-3'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-center relative">
                    {/* Desktop Center Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavClick(item.href)
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="text-sm font-medium text-white/90 hover:text-white relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden absolute right-0 text-white text-2xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '100svh', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="md:hidden bg-black/80 backdrop-blur-xl overflow-y-auto"
                    >
                        <div className="flex flex-col items-center justify-center min-h-full py-24 space-y-6 text-center">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick(item.href)
                                    }}
                                    className="text-2xl font-semibold text-white/90 hover:text-white"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
