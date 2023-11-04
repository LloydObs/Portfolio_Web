import React from 'react'
import { Container, Grid, GridRow } from 'semantic-ui-react'
import Image from 'next/image'
import SectionSub from './SectionSub'
import vector from '../../assests/vector1.jpg'
import Slider from 'react-slick'
import styles from '../../styles/testimonials.module.scss'
import TestimonialItem from './TestimonialItem'
import testimonialData from '../testimonialItem/testimonialData'


const Testimonial = () => {

    const settings = {
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: true,
        pauseOnHover: true,
    };

    return (
        <section>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column largeScreen={8} mobile={6}>
                            <Image className={styles.imageStyle} alt='networkImg' src={vector} width={400} height={400} />
                        </Grid.Column>
                        <Grid.Column largeScreen={8} mobile6>
                            <SectionSub subtitle='Testimonials( )' />
                            <h4 style={{ marginTop: 4, marginBottom: 5, fontSize: '1.5rem' }}>
                                What my colleauge says
                            </h4>

                            <Slider {...settings}>
                                {
                                    testimonialData.map(item => (
                                        <TestimonialItem item={item}/> 
                                    ))
                                }
                            </Slider>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </section>
    )
}

export default Testimonial