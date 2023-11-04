import React from 'react'
import { Container, Grid, GridColumn, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import SectionSub from './SectionSub'
import Image from 'next/image'
import styles from './about.module.scss'
import globalStyle from '../../styles/hero.module.scss'

//Import images from assests. Mas oks if sa public naka define para hindi same sa ibang pages.
import gameImg from '../../assests/game.png'
import selfieImg1 from '../../assests/selfiePhoto.jpg'
import selfieImg2 from '../../assests/groupPhot.jpeg'
import moonPic from '../../assests/moon4.JPG'

const About = () => {
    return (
        <section id='about'>
            <Container>
                <Grid divided>
                    <Grid.Row>
                        <Grid.Column largeScreen={8} mobile={6}>
                            <SectionSub subtitle='About me( )' />
                            <h3 className={styles.headerStyle}>
                                I&apos;m here
                            </h3>
                            <h3 className={styles.headerStyle}>
                                For fun and taking on new challenges
                            </h3>
                            <p className={styles.pStyles}> 
                                Aside from exploring new technologies and coding.
                                Outside of programming, I also enjoy reading books and manga and
                                recently enjoyed a book by Meg Jay titled "The Defining Decade:
                                Why Your Twenties Matter". I also play some online games and a lot
                                of indie games such as Hades and Hollow Knight since I find relaxation
                                in exploring new worlds and discovering strategies. I also do astrophotography
                                if i have free time and the weather condition is good. I sometimes setup my
                                telescope and camera and enjoy the view. Lastly, I also love eating and
                                discovering newplaces to enjoy viewing the surroundings while eating.
                            </p>

                            <div className={styles.skillsData}>
                                <div>
                                    <h6 className={styles.subHeader}>
                                        <span className={styles.aboutIcon}>
                                            <Icon name='check circle outline'>
                                            </Icon>
                                        </span>
                                        Critical Thinker
                                    </h6>
                                    <h6 className={styles.subHeader}>
                                        <span className={styles.aboutIcon}>
                                            <Icon name='check circle outline'>
                                            </Icon>
                                        </span>
                                        Resourceful
                                    </h6>

                                </div>
                                <div>
                                    <h6 className={styles.subHeader}>
                                        <span className={styles.aboutIcon}>
                                            <Icon name='check circle outline'></Icon></span>
                                        Persistent
                                    </h6>
                                    <h6 className={styles.subHeader}>
                                        <span className={styles.aboutIcon}><Icon name='check circle outline'></Icon></span>
                                        Adaptive
                                    </h6>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className={globalStyle.primaryButton}>
                                    <Link href='#portfolio'>
                                        My Portfolio
                                    </Link>
                                </button>

                                <button className={globalStyle.secondaryButton}>
                                    <Link href='#'>
                                        My CV
                                    </Link>
                                </button>

                            </div>
                        </Grid.Column>
                        <Grid.Column largeScreen={8}>
                            <div className={styles.styleBox}>
                                <div className={styles.subStyleBox}>
                                    <div className={styles.aboutImg}>
                                        <Image style={{ width: "100%", height: "auto" }} src={selfieImg1} alt='about-img' />
                                    </div>
                                    <div className={styles.aboutImg}>
                                        <Image style={{ width: "100%", height: "auto" }} src={selfieImg2} alt='about-img' />
                                    </div>

                                </div>
                                <div className={styles.subStyleBox}>
                                    <div className={styles.aboutImg}>
                                        <Image style={{ width: "100%", height: "auto" }} src={gameImg} alt='about-img' />
                                    </div>
                                    <div className={styles.aboutImg}>
                                        <Image style={{ width: "100%", height: "auto" }} src={moonPic} alt='about-img' />
                                    </div>
                                </div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </section>
    )
}

export default About