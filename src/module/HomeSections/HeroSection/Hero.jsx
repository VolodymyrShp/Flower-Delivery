import { cardList } from '../../../components/SectionComponents/HeroComponent/cardList'
import { heroText } from '../../../components/SectionComponents/HeroComponent/heroText'
import styles from './hero.module.scss'
export const Hero = () => {
	return (
		<section className={styles.heroSection}>
			{heroText({ styles })}
			{cardList({ styles })}
		</section>
	)
}
