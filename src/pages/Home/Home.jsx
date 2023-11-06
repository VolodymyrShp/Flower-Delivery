import styles from './home.module.scss'
import { AboutUs } from '../../module/HomeSections/aboutUsSection/AboutUsSection'
import { Benefits } from '../../module/HomeSections/benefitsSection/Benefits'
import { ContactUs } from '../../module/HomeSections/contactUsSection/ContactUs'
import { Hero } from '../../module/HomeSections/heroSection/Hero'
import OurSection from '../../module/HomeSections/ourSection/OurSection'
import { Navbar } from '../../module/Navbar/Navbar'
import { WeedingEvent } from '../../module/HomeSections/weedingEvent/WeedingEvent'
import ServiceSection from './../../module/HomeSections/serviceSection/ServiceSection'
import { ReviewsSection } from '../../module/HomeSections/reviewsSection/ReviewsSection'
import { Footer } from '../../module/Footer/Footer'

function Home() {
	return (
		<>
			<div className={styles.overflow}>
				<Navbar />
				<Hero />
			</div>
			<AboutUs />
			<Benefits />
			<ContactUs />
			<OurSection />
			<ServiceSection />
			<WeedingEvent />
			<ReviewsSection />
			<Footer />
		</>
	)
}

export default Home
