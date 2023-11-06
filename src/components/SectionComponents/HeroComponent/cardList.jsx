import { categoryList } from '../../../UI/lib/Home-itemList'
export const cardList = ({ styles }) => {
	return (
		<div className={styles.heroSection__cl2}>
			{categoryList.map((cardItem, id) => {
				return id % 2 ? (
					<div key={id} className={styles.card}>
						<div>
							<img src={cardItem.img} alt='' />
						</div>
						<div className={styles.card__text}>
							<h3>{cardItem.card_text}</h3>
							<button>
								Shop now
								<span />
							</button>
						</div>
					</div>
				) : (
					<div key={id} className={styles.card}>
						<div className={styles.card__text}>
							<h3>{cardItem.card_text}</h3>
							<button>
								Shop now
								<span />
							</button>
						</div>
						<div>
							<img src={cardItem.img} alt='' />
						</div>
					</div>
				)
			})}
		</div>
	)
}
