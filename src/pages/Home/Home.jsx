import { AboutUs } from '../../module/HomeSections/aboutUsSection/AboutUsSection'
import { Hero } from '../../module/HomeSections/heroSection/Hero'
import { Navbar } from '../../module/Navbar/Navbar'

function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutUs />
		</>
	)
}

export default Home
