import styles from './serviceSection.module.scss'

const ServiceSection = () => {
	return (
		<section className={styles.service}>
			<div className={styles.service__leftCl}>
				<img src='/images/flowerSub.png' alt='' />
			</div>
			<div className={styles.service__rightCl}>
				<div>
					<span className='span__overline'>SERVICE</span>
					<h2>Flower Subcriptions</h2>
					<p className='subtitle'>
						Experience the convenience and savings of regular flower deliveries{' '}
						<br />
						with our flexible subscription service - up to 30% more profitable
						<br />
						than one-time purchases.
					</p>
					<button>Subscribe Now</button>
				</div>
			</div>
		</section>
	)
}

export default ServiceSection
