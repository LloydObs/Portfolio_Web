import React from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react'
import Image from 'next/image'
import Link from 'next/link'
import myImage from '../../../../src/assests/about.jpg'
import styles from '../../../styles/hero.module.scss'
import SectionSub from '../SubSectionComponent/SectionSub'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Container>
                <Grid divided>
                    <Grid.Row>
                        {/*=================================================*/}
                        <Grid.Column largeScreen={8} mobile={6} >
                            <div className={styles.heroContent}>
                                <SectionSub subtitle='fn Hello(  )' />
                                <h2>
                                    I&apos;m Lloyd Objero
                                </h2>
                                <h5>
                                    Mobile Developer | Backend Developer
                                </h5>
                                <p>
                                    Currently a Fresh IT graduate from PUP. I find satisfaction in
                                    developing small programs and solving problems through coding. My
                                    interest in learning new technology extends beyond the classroom and
                                    I always find a room to improve my coding skills and problem solving skills.
                                    I am an individual  who approaches challenges that is logical and doable and
                                    not afraid to take on different task.
                                </p>
                                <div className='mt-5'>
                                    <button className={styles.primaryButton}><Link href='#portfolio'>
                                        View Projects
                                    </Link>
                                    </button>
                                    <button className={styles.secondaryButton}><Link href='#about'>
                                        About Me
                                    </Link>
                                    </button>

                                    
                                </div>
                            </div>
                        </Grid.Column>

                        {/*====================================*/}
                        <Grid.Column largeScreen={8} mobile={6}>
                            <div className={styles.heroImg}>
                                <Image alt='hero-image' src={myImage} width={400} height={400} />
                            </div>
                            { /*
                            <div className={styles.heroSkills}>
                                <h6>Skills</h6>
                                <span>
                                    <Icon name='chart bar' ></Icon>
                                </span>
                                <span>
                                    <Icon name='chart bar'></Icon>
                                </span>
                                <span>
                                    <Icon name='chart bar'></Icon>
                                </span>
                                <span>
                                    <Icon name='chart bar'></Icon>
                                </span>
                                <span>
                                    <Icon name='chart bar'></Icon>
                                </span>
                                /*
                                <span>
                                    <Icon name='chart bar'></Icon>
                                </span>
                                
                                

                                
                            </div>
  */}
                            {/* 
                            <div className={styles.hero__experience}> 
                                    <span>
                                        <Icon name='lightbulb outline'/>
                                    </span>
                                    <div className={styles.experience2}>
                                        <h6>Experience</h6>
                                        <h5>4 years</h5>
                                    </div>
                            </div>
*/}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </section>
    )
};

export default Hero