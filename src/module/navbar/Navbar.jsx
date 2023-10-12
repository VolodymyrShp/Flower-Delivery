import styles from './navbar.module.scss'

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<ul>
				<li>Shop</li>
				<li>Contact</li>
			</ul>
			<ul>
				<li className={styles.navbar_signIn}>Sign in</li>
				<li>Cart</li>
			</ul>
		</div>
	)
}
