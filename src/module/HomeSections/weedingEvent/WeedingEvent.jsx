import styles from './weedingEvent.module.scss'
export const WeedingEvent = () => {
	return (
		<section className={styles.weeding}>
			<div className={styles.weeding__text}>
				<span>service</span>
				<h2>Wedding & Event Decor</h2>
				<p>
					Let our team of expert florists and designers create stunning,
					on-trend
					<br /> floral décor for your special day. Trust us to bring your
					vision to life.
				</p>
			</div>
			<button>Inquire Now</button>
		</section>
	)
}
