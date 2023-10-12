
import Hero from '../../module/heroSection/Hero'
import { Navbar } from '../../module/navbar/Navbar'

function Home() {
	return (
		<>
			<Navbar/>
			<section>{Hero()}</section>
		</>
	)
}

export default Home
