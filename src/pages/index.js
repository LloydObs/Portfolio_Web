import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import Hero from '@/components/UI/HeroComponent/Hero'
import { Fragment } from 'react'
import Services from '@/components/UI/ServicesComponent/Services'
import About from '@/components/UI/AboutComponent/About'
import Portfolio from '@/components/UI/PortfolioComponent/Portfolio'
import Testimonial from '@/components/UI/TestimonialComponent/Testimonial'
import Contact from '@/components/UI/ContactComponent/Contact'

//Define viewport inside head for responsive website
//Use Fragment and follow pattern as much as possible para mas madali basahin at idebug yung code.

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fragment>
          <Hero />  
          <Services /> 
          <About />
          <Portfolio />
          <Testimonial />
          <Contact />
      </Fragment>
    </>
  )
}
