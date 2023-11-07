import React from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react';
import classes from '../../styles/header.module.scss'
import styles from '../../styles/footer.module.scss'
import Link from 'next/link'
import { navLink } from '@/components/Header/Header';


const Footer = () => {

  const getDate = new Date();
  const getCurrentYear = getDate.getFullYear();

  return (
    <footer>
      <Container>
        <Grid.Row>
          {/* ==========================*/}
          <Grid.Column largeScreen={'6'}>
            <div className={classes.navMenu}>
              {
                navLink.map((item, index) => (
                  <Link href={item.path} key={index}>
                    {item.display}
                  </Link>
                ))
              }
            </div>

          </Grid.Column>

          <Grid.Column largeScreen={'8'}>
            <div className={styles.footerCreator}>
              <h6>
                Created by Lloyd Objero
              </h6>
            </div>
          </Grid.Column>

          <Grid.Column largeScreen={'8'}>
            <div className={styles.footerCopyright}>
              <p>
                &copy; Copyright {getCurrentYear} - Developed by Lloyd Objero.
                All right reserved.{" "}
              </p>
            </div>
          </Grid.Column>



        </Grid.Row>
      </Container>
    </footer>

  )
};

export default Footer;