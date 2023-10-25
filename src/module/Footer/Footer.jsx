import { mediaList } from '../../UI/lib/Social-media'
import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__remind}>
				<p>
					Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
					Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
					sharing your address
				</p>
				<input type='text' placeholder='Your Email' />
				<button>REMIND</button>
			</div>
			<div className={styles.footer__contactUs}>
				<h5>Contact Us</h5>
				<div>
					<p className='caption'>Address</p>
					<p className='link'>15/4 Khreshchatyk Street, Kyiv </p>
				</div>
				<div>
					<p className='caption'>Phone</p>
					<p className='link'>+380980099777</p>
				</div>
				<div>
					<p className='caption'>General Enquiry:</p>
					<p className='link'>Kiev.Florist.Studio@gmail.com</p>
				</div>
				<h5>Follow Us</h5>
				<div className={styles.footer__media}>
					{mediaList.map((itemList, index) => {
						return (
							<a
								key={index}
								href={itemList.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={itemList.icon} alt='' />
							</a>
						)
					})}
				</div>
			</div>
			<div className={styles.footer__shop}>
				<h5>Shop</h5>
				<div>
					<p className='link'>All Products</p>
					<p className='link'>Fresh Flowers</p>
					<p className='link'>Dried Flowers</p>
					<p className='link'>Live Plants</p>
					<p className='link'>Designer Vases</p>
					<p className='link'>Aroma Candles</p>
					<p className='link'>Freshener Diffuser</p>
				</div>
				<h5>Service</h5>
				<div>
					<p className='link'>Flower Subcription</p>
					<p className='link'>Wedding & Event Decor</p>
				</div>
			</div>
			<div className={styles.footer__aboutUs}>
				<h5>About Us</h5>
				<div>
					<p className='link'>Our story</p>
					<p className='link'>Blog</p>
				</div>
				<div>
					<p className='link'>Shipping & returns</p>
					<p className='link'>Terms & conditions</p>
					<p className='link'>Privacy policy</p>
				</div>
			</div>
		</footer>
	)
}
