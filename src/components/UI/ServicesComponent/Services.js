import React from 'react'
import { Container, Grid} from 'semantic-ui-react'
import SectionSub from '../SubSectionComponent/SectionSub'
import styles from '../../../styles/services.module.scss'
import ServicesItem from './ServicesItems/ServicesItem';




const Services = () => {
  return (
    <section id='services'>
      <Container>
        <Grid divided>
          <Grid.Row>
            <Grid.Column largeScreen={9} mobile={6}>
              <div className={styles.serviceContainer}>
                <div>
                  <ServicesItem title='Experienced in diversed projects' icon='mobile alternate' />

                  <ServicesItem title='Enjoys learning new systems' icon='desktop' />
                </div>

                <ServicesItem title='Knowledgable in SQL and NoSQL' icon='database' />

              </div>
            </Grid.Column>

            <Grid.Column largeScreen={6} mobile={6} className={styles.servicesTitle}>
              <SectionSub subtitle='What I do( )' />
              <h3 className={styles.headerStyle}>
                Faster Softwares.
              </h3>
              <h3 className={styles.headerStyle}>
                More Efficient Apps.
              </h3>
              <p>
                 Worked and created a variety of projects such as a mobile app and web-based systems.
                 Familiar with backend languages such as C# and Java which helped me improve
                 my knowledge and skills in creating reliable solutions. I also learned and continously
                 doing side projects using Rust. Proficient in designing databases to meet company needs
                 and ensure data is stored and processed safely and accurately. I enjoy tackling 
                 challenges, learning new things and collaborative work. 
              </p>

            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>

    </section>
  );
};

export default Services