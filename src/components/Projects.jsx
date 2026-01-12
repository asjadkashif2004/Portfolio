import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FaGithub,
    FaExternalLinkAlt,
    FaStar,
    FaCode,
} from 'react-icons/fa'

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const projects = [
        {
            title: 'Galaxy Glide',
            description:
                'A groundbreaking project developed for NASA Space Apps Hackathon, where I achieved Runner-Up position.',
            problem:
                'Embiggen Your Eyes',
            solution:
                'Developed a website able to store the large images of NASA dataset at real time and provide high zooming quality without pixilation.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'NASA APIs'],
            color: 'from-yellow-400 to-orange-500',
            badge: 'NASA Space Apps Runner-Up',
            github: 'https://github.com/asjadkashif2004/Galaxy-Glide-Web-App',
            featured: true,
            icon: FaStar,
        },
        {
            title: 'Complaint Lodge System',
            description:
                'A secure and efficient Laravel-based complaint management system.',
            problem:
                'Organizations needed a centralized platform for managing complaints.',
            solution:
                'Built a full-stack system with authentication, tracking, and admin dashboards.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
            color: 'from-red-400 to-pink-500',
            github: 'https://github.com/asjadkashif2004/Complain-Lodge-Systsem--Web-App',

            icon: FaCode,
        },
        {
            title: 'Course HUB',
            description:
                'A centralized course management platform for educational institutions.',
            problem:
                'Institutions needed a unified platform for managing courses and enrollments.',
            solution:
                'Created a platform with course creation, enrollment, and admin controls.',
            technologies: ['Laravel', 'PHP', 'MySQL'],
            color: 'from-red-400 to-pink-500',
            github: 'https://github.com/asjadkashif2004/Course-Managment-Web-app-',

            icon: FaCode,
        },
        {
            title: 'Exam Seating Management System',
            description:
                'An automated student seating allocation system.',
            problem:
                'Manual exam seating arrangements were time-consuming and error-prone.',
            solution:
                'Developed an intelligent system for automatic seat allocation.',
            technologies: ['Laravel', 'MySQL', 'Algorithms'],
            color: 'from-red-400 to-pink-500',
            github: 'https://github.com/asjadkashif2004/Exam-Seating-Managment-System--Web-Engr-Project',

            icon: FaCode,
        },
        {
            title: 'Smart Inventory System',
            description:
                'A Flask-based inventory management solution.',
            problem:
                'Businesses needed efficient inventory tracking and analytics.',
            solution:
                'Built a system with real-time inventory tracking and reporting.',
            technologies: ['Flask', 'Python', 'MySQL'],
            color: 'from-yellow-400 to-orange-500',
            github: 'https://github.com/asjadkashif2004/Smart-Inventory-System---Website',
            icon: FaCode,
        },

        {
            title: 'MAK Store',
            description:
                'A Flutter-based mobile e-commerce application.',
            problem:
                'Need for a native mobile shopping experience.',
            solution:
                'Created a full-featured mobile app with authentication and cart.',
            technologies: ['Flutter', 'Firebase'],
            color: 'from-blue-400 to-cyan-500',
            github: 'https://github.com/asjadkashif2004/Smart-Inventory-System---Website',
            icon: FaCode,
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section
            id="projects"
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="container mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
                        <span className="text-gradient">Featured Projects</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Real-world applications showcasing innovation and problem-solving
                    </p>
                </motion.div>

                {/* Project Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            className={`glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''
                                }`}
                        >
                            {project.badge && (
                                <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-white">
                                    {project.badge}
                                </div>
                            )}

                            {/* Title + Icon */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                                    <project.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white font-display">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-white/80 mb-4">
                                {project.description}
                            </p>

                            <div className="mb-4">
                                <p className="text-sm text-blue-300 mb-1">Problem:</p>
                                <p className="text-white/70 text-sm mb-3">{project.problem}</p>
                                <p className="text-sm text-green-300 mb-1">Solution:</p>
                                <p className="text-white/70 text-sm">{project.solution}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-white hover:text-blue-400 transition-colors"
                                >
                                    <FaGithub />
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Projects
