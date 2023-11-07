import React from 'react'
import styles from '../../../styles/form.module.scss'
import globalStyles from '../../../styles/hero.module.scss'

import { useState } from 'react'

const Form = () => {

    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <input type="text" placeholder='Your Name' required />
            </div>
            <div className={styles.formGroup}>
                <input type="email" placeholder='Email Adress' required />
            </div>
            <div className={styles.formGroup}>
                <textarea type="text" rows={5} placeholder='Message' required />
            </div>

                <button className={globalStyles.primaryButton}>
                    Send
                </button>
        </form>
    )
}

export default Form