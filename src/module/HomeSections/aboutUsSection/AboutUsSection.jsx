import styles from './aboutUs.module.scss'

export const AboutUs = () => {
	return (
		<section className={styles.aboutUs}>
			<div className={styles.aboutUs__heading}>
				<h2>AboutUs</h2>
			</div>
			<div className={styles.aboutUs__text}>
				<span className='span__overline'>our story</span>
				<h3>Kyiv LuxeBouquets</h3>
				<p>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
				<button>LERN MORE</button>
			</div>
		</section>
	)
}
