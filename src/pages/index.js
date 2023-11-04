import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import Hero from '@/components/UI/Hero'
import { Fragment } from 'react'
import Services from '@/components/UI/Services'
import About from '@/components/UI/About'
import Portfolio from '@/components/UI/Portfolio'
import Testimonial from '@/components/UI/Testimonial'
import Contact from '@/components/UI/Contact'

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
