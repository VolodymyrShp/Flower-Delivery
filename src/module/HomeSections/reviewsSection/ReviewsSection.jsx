import styles from './reviewsSection.module.scss'
import { ReviewsList } from '../../../components/SectionComponents/reviewsComponent/reviewsList'
import { reviewsItem } from './../../../UI/lib/googleReviews'
export const ReviewsSection = () => {
	return (
		<section className={styles.reviews}>
			<div className={styles.reviews__textContent}>
				<img src='/icons/google-logo.svg' alt='google_logo' />
				<span className='span__overline'>Reviews</span>
				<h2>Our Clients say</h2>

				<ReviewsList styles={styles} data={reviewsItem} />
			</div>
			<a href='https://www.google.com/' target='_blank' rel="noopener noreferrer">
				<button className={styles.btn}>READ REVIEWS</button>
			</a>
		</section>
	)
}
