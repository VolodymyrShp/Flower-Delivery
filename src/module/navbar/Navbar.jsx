import styles from './navbar.module.scss'

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>Shop</li>
				<li>Contact</li>
			</ul>
			<ul>
				<li className={styles.navbar_signIn}>Sign in</li>
				<li>Cart</li>
			</ul>
		</nav>
	)
}
