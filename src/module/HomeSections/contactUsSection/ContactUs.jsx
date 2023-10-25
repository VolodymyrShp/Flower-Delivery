import styles from './contactUs.module.scss'
import { mediaList } from './../../../UI/lib/Social-media'

export const ContactUs = () => {
	return (
		<section className={styles.contactUs}>
			<div className={styles.contactUs__leftCl}>
				<div className={styles.contactUs__heading}>
					<h2>To Contact Us</h2>
					<div>
						<p className='subtitle'>We will call you back</p>
						<div>
							<input type='text' placeholder='+380 XX XXX XX XX' />
							<button>BOOK A CALL</button>
						</div>
					</div>
				</div>
				<div className={styles.contactUs__info}>
					<div className={styles.phone}>
						<h3>Phone</h3>
						<div>
							<div>
								<p>+380980099777</p>
								<span />
							</div>
							<div>
								<p>+380980099111</p>
								<span />
							</div>
						</div>
					</div>
					<div className={styles.address}>
						<h3>Address</h3>
						<div>
							<p>opening hours: 8 to 11 p.m.</p>
							<p>15/4 Khreshchatyk Street, Kyiv </p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.contactUs__rightCl}>
				<img
					className={styles.contactUs__bouquets}
					src='/images/luxeBouquets.png'
					alt=''
				/>
				<div>
					<div>
						<h3>Follow us</h3>
					</div>
					<div className={styles.contactUs__media}>
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
			</div>
		</section>
	)
}
