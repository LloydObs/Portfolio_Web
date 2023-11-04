import React from 'react'

import { Button, Container, Grid } from 'semantic-ui-react'
import SectionSub from './SectionSub'
import globalStyle from '../../styles/hero.module.scss'
import styles from '../../styles/portfolio.module.scss'
import Link from 'next/link'

import data from '../projectlist/portfoliolist'
import PortofolioItem from './PortfolioItems'


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container>
                <Grid divided>
                    <Grid.Row>
                        <Grid.Column largeScreen={8} mobile={8}>
                            <SectionSub subtitle='Portfolio( )' />
                            <h4 className={styles.h4Style}>
                                Some of my Works</h4>
                        </Grid.Column>
                        <Grid.Column largeScreen={8} mobile={8}>
                            <div style={{ textAlign: 'end' }}>
                                <button className={globalStyle.secondaryButton}>
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
                        {
                            data.map(item => (
                                <Grid.Column largeScreen={4} mobile={4} key={item.id}>
                                    <PortofolioItem item={item}/>
                                </Grid.Column>
                            ))
                        }
                    </Grid.Row>
                </Grid>
            </Container>

        </section>
    )
}

export default Portfolio