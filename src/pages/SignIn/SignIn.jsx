
import styles from './SignIn.module.scss';
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
            </div>
        )
    }
}
