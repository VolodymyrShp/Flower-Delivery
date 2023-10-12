import { categoryList} from '../../../UI/lib/Home-itemList'
export const cardList = ({styles}) => {
	return (
		<div className={styles.heroSection__cl2}>
			{categoryList.map((cardItem, id) => {
				return (
					<div key={id}>
						<div>
							<p>{cardItem.card_text}</p>
							<button>Shop now</button>
						</div>
						<img src={cardItem.img} alt='' />
					</div>
				)
			})}
		</div>
	)
}
