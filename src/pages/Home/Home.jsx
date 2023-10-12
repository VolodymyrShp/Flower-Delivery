
import {Hero} from '../../module/HomeSections/HeroSection/Hero'
import { Navbar } from '../../module/Navbar/Navbar'

function Home() {
	return (
		<>
			<Navbar/>
			<section>{Hero()}</section>
		</>
	)
}

export default Home
