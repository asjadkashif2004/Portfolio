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

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: FaReact, level: 80, color: 'from-blue-400 to-cyan-400' },
                { name: 'HTML5', icon: FaHtml5, level: 98, color: 'from-orange-400 to-red-400' },
                { name: 'CSS3', icon: FaCss3Alt, level: 95, color: 'from-blue-400 to-indigo-400' },
                { name: 'JavaScript', icon: FaJs, level: 70, color: 'from-yellow-400 to-orange-400' },
                { name: 'Flutter', icon: FaMobileAlt, level: 65, color: 'from-blue-400 to-cyan-400' },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, level: 90, color: 'from-green-400 to-emerald-400' },
                { name: 'Express', icon: FaServer, level: 88, color: 'from-gray-400 to-gray-600' },
                { name: 'Laravel', icon: FaLaravel, level: 92, color: 'from-red-400 to-pink-400' },
                { name: 'Flask', icon: FaPython, level: 87, color: 'from-yellow-400 to-blue-400' },
            ],
        },
        {
            title: 'Database & Tools',
            skills: [
                { name: 'MySQL', icon: FaDatabase, level: 90, color: 'from-blue-400 to-blue-600' },
                { name: 'MongoDB', icon: FaDatabase, level: 70, color: 'from-green-400 to-green-600' },
                { name: 'Firebase', icon: FaFire, level: 70, color: 'from-orange-400 to-yellow-400' },
                { name: 'Git', icon: FaGitAlt, level: 90, color: 'from-red-400 to-orange-400' },
                { name: 'Database Design', icon: FaProjectDiagram, level: 92, color: 'from-purple-400 to-indigo-400' },
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="glass-strong rounded-2xl p-6"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white font-display">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <skill.icon className="text-xl text-white/80" />
                                                <span className="font-medium text-white">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-sm text-white/60">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${skill.color}`}
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills
