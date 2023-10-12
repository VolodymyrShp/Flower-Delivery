import { hero } from '../../../UI/lib/Home-itemList'

export const heroText = ({styles}) => {
	return (
		<div className={styles.heroSection__cl1}>
			<div className={styles.heroSection__cl1_heading}>
				<h1>Kyiv LuxeBouquets</h1>
				<p>
					Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
					Joy with Our Online Flower Delivery Service
				</p>
			</div>
			<div className={styles.heroSection__cl1_text}>
				<img src={hero} alt='Hero img' />
				<p>
					Experience the joy of giving with our modern floral studio. Order
					online and send fresh flowers, plants and gifts today.
				</p>
			</div>
		</div>
	)
}
