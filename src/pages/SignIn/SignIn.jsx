
import styles from './SignIn.module.scss';
import PhoneForm from '../../components/PhoneForm/PhoneForm';
import Line from '../../components/LineComp/Line';
import PolicyLinks from '../../components/PolicyComp/Policy';
import React, { Component } from "react";

export default class Signn extends Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.contentContainer}>
                    <h3 className={styles.signGreeting}>
                       Greetings! Welcome to luxury gift shop.
                    </h3>
                    <p className={styles.plainText}>
                        Use your mobile number to sign up or log in
                    </p>
                </div>
                <div className={styles.bodyContainer}>
                    <PhoneForm />
                    <Line />
                    <div className={styles.socialAppsContainer}>
                        <p className={styles.description}>Instantly login or sign up via Google</p>
                        <div className={styles.loginSocialApps}>
                            <a href="#" className={`${styles.logGoogle} ${styles.logButton}`}>
                                <img src="../../../public/icons/Google.svg" alt="Google" className={styles.loginIcon} />
                                <span>continue with google</span>
                            </a>
                            <a href="#" className={`${styles.logApple} ${styles.logButton}`}>
                                <img src="../../../public/icons/Apple.svg"  alt="Apple" className={styles.loginIcon} />
                                <span>continue with apple</span>
                            </a>
                        </div>
                    </div>
                </div>
                <PolicyLinks />
            </div>
        )
    }
}
