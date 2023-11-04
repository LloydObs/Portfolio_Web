import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import SectionSub from './SectionSub'
import styles from '../../styles/contact.module.scss'
import Form from './Form'

const Contact = () => {
    return (
        <section id='contact' className={styles.contact}>
            <Grid divided>
                <Grid.Row>
                    <Grid.Column largeScreen={8}>
                        <SectionSub subtitle='Contact( )' />
                        <h3 style={{ marginTop: 4, marginBottom: 4 }}>
                            Just Say Hi!
                        </h3>
                        <p style={{ fontSize: '1.1rem' }}>
                            If you're interested in working together on a programming project,
                            or simply want to chat about programming, feel free to contact me!
                            You can reach me via my email and my social links that is located below
                            this message. I'm always open to new opportunities and
                            would love to hear from you. Let's collaborate and create something
                            great together!
                        </p>

                        <ul className={styles.contactInfoList}>
                            <li className={styles.infoItem}>
                                <span>
                                    <Icon name='home' />
                                </span>
                                <p>Makati - Philippines</p>
                            </li>
                            <li className={styles.infoItem}>
                                <span>
                                    <Icon name='mail' />
                                </span>
                                <p>
                                    lloydadrianobjero@gmail.com
                                </p>
                            </li>
                            <li className={styles.infoItem}>
                                <span>
                                    <Icon name='phone' />
                                </span>
                                <p>
                                    +639294423749
                                </p>
                            </li>
                        </ul>
                        <div className={styles.socialLinks}>
                            <Link href='#'>
                                <Icon name='github'>
                                </Icon>
                            </Link>
                            <Link href='#'>
                                <Icon name='facebook'>
                                </Icon>
                            </Link>
                            <Link href='#'>
                                <Icon name='linkedin'>
                                </Icon>
                            </Link>
                            <Link href='#'>
                                <Icon name='viber'>
                                </Icon>
                            </Link>
                            <Link href='#'>
                                <Icon name='facebook messenger'>
                                </Icon>
                            </Link>
                            <Link href='#'>
                                <Icon name='discord'>
                                </Icon>
                            </Link>
                        </div>
                    </Grid.Column>
                    <Grid.Column largeScreen={8}>
                        <Form />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </section>
    )
}

export default Contact