import styles from './Policy.module.scss';
import React, { Component } from "react";

export default class PolicyLinks extends Component {
    render() {
        return (
            <div className={styles.linksContainer}>
                <div className={styles.policyLink}>
                    <a href="#" className={styles.link}>Privacy Policy</a>
                </div>
                <div className={styles.policyLink}>
                <a href="#" className={styles.link}>Terms and Conditions</a>
                </div>
            </div>
        )
    }
}