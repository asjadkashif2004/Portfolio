import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaMobileAlt,
    FaNodeJs,
    FaServer,
    FaLaravel,
    FaPython,
    FaDatabase,
    FaFire,
    FaGitAlt,
    FaProjectDiagram,
} from 'react-icons/fa'

import { SiCplusplus, SiDart, SiPhp, SiC } from 'react-icons/si'

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: FaReact, color: 'from-blue-400 to-cyan-400' },
                { name: 'HTML5', icon: FaHtml5, color: 'from-orange-400 to-red-400' },
                { name: 'CSS3', icon: FaCss3Alt, color: 'from-blue-400 to-indigo-400' },
                { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-orange-400' },
                { name: 'Flutter', icon: FaMobileAlt, color: 'from-blue-400 to-cyan-400' },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, color: 'from-green-400 to-emerald-400' },
                { name: 'Express', icon: FaServer, color: 'from-gray-400 to-gray-600' },
                { name: 'Laravel', icon: FaLaravel, color: 'from-red-400 to-pink-400' },
                { name: 'Flask', icon: FaPython, color: 'from-yellow-400 to-blue-400' },
            ],
        },
        {
            title: 'Database & Tools',
            skills: [
                { name: 'MySQL', icon: FaDatabase, color: 'from-blue-400 to-blue-600' },
                { name: 'MongoDB', icon: FaDatabase, color: 'from-green-400 to-green-600' },
                { name: 'Firebase', icon: FaFire, color: 'from-orange-400 to-yellow-400' },
                { name: 'Git', icon: FaGitAlt, color: 'from-red-400 to-orange-400' },
                { name: 'Database Design', icon: FaProjectDiagram, color: 'from-purple-400 to-indigo-400' },
            ],
        },
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Python', icon: FaPython, color: 'from-yellow-400 to-blue-400' },
                { name: 'C++', icon: SiCplusplus, color: 'from-blue-400 to-indigo-400' },
                { name: 'Dart', icon: SiDart, color: 'from-cyan-400 to-blue-400' },
                { name: 'PHP', icon: SiPhp, color: 'from-indigo-400 to-purple-400' },
                { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-orange-400' },
                { name: 'C', icon: SiC, color: 'from-gray-400 to-gray-600' },
            ],
        },
    ]

    return (
        <section
            id="skills"
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
                        <span className="text-gradient">Technical Skills</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>
                </motion.div>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="glass-strong rounded-2xl p-6"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white font-display">
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-4 p-3 glass rounded-lg hover:bg-white/10 transition-all"
                                    >
                                        <div
                                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20 flex items-center justify-center`}
                                        >
                                            <skill.icon className="text-xl text-white" />
                                        </div>
                                        <span className="font-medium text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
