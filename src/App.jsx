import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <WhyHireMe />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

