import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</main>
	)
}
