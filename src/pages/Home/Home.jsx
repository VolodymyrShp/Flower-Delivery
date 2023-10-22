import { AboutUs } from '../../module/HomeSections/aboutUsSection/AboutUsSection'
import { Benefits } from '../../module/HomeSections/benefitsSection/Benefits'
import { ContactUs } from '../../module/HomeSections/contactUsSection/ContactUs'
import { Hero } from '../../module/HomeSections/heroSection/Hero'
import OurSection from '../../module/HomeSections/ourSection/OurSection'
import { Navbar } from '../../module/Navbar/Navbar'
import { WeedingEvent } from '../../module/HomeSections/weedingEvent/WeedingEvent'
import ServiceSection from './../../module/HomeSections/serviceSection/ServiceSection';


function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutUs />
			<Benefits />
			<ContactUs />
			<OurSection />
			<ServiceSection/>
			<WeedingEvent />
		</>
	)
}

export default Home
