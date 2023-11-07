import styles from './navbar.module.scss';
// import Modal from '../Modal/Modal.jsx';

export const Navbar = () => {
 	return (
		<nav className={styles.navbar}>
			<ul>
				<li style={{}}>Not shop</li>
				<li>Contact</li>
			</ul>
			<ul>
				<li className={styles.navbar_signIn}>Sign in</li>
				<li>Carting</li>
			</ul>
		</nav>
		
	)
}
