import styles from './PhoneForm.module.scss';
import React, { Component } from "react";

export default class PhoneForm extends Component {
    render() {
        return (
            <form action="" className={styles.phoneForm}>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="+380 XX XXX XX XX"/>
                <button type="submit">continue</button>
            </form>

        )
    }
}
