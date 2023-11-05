import React, { Component } from 'react'
import styles from './Line.module.scss'


export default class Line extends Component {
	render() {
		return (
            <div className= {styles.cnt}>
                <span></span>
                <p>or</p>
                <span></span>
            </div>
		)
	}
}