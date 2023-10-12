import { cardList } from '../../../components/SectionComponents/HeroComponent/cardList'
import { heroText } from '../../../components/SectionComponents/HeroComponent/heroText'
import styles from './hero.module.scss'
export const Hero = () => {
	return (
		<div className={styles.heroSection}>
			{heroText({ styles })}
			{cardList({ styles })}
		</div>
	)
}
