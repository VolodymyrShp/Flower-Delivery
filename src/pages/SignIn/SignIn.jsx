
import styles from './SignIn.module.scss';
import PhoneForm from '../../components/PhoneForm/PhoneForm';
import Line from '../../components/LineComp/Line';
import React, { Component } from "react";

export default class Signn extends Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.contentContainer}>
                    <h3 className={styles.signGreeting}>
                        Greetings!<br/> Welcome to luxury gift shop.
                    </h3>
                    <p className={styles.plainText}>
                        Use your mobile number to sign up or log in
                    </p>
                </div>
                <PhoneForm />
                <Line />
                <div className={styles.loginSocialApps}>
                    <a href="" className={styles.logGoogle}></a>
                </div>
            </div>
        )
    }
}
