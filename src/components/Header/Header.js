import React from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';
import { Link as ScrollLink, Element } from 'react-scroll';
import styles from '../../styles/header.module.scss';

// Navigation Links should be defined here if gusto mag add in the future.
export const navLink = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: 'about',
    display: 'About'
  },
  {
    path: 'services',
    display: 'Services'
  },
  {
    path: 'portfolio',
    display: 'Portfolio'
  },
  {
    path: 'contact',
    display: 'Contact'
  },
];

const renderThemeChanger = () => {
  return (
    <Button>
      <Icon name='moon' />
    </Button>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            <h1>
              <span>l</span>
              loydieieie
            </h1>
          </div>
          <div className={styles.navigation}></div>
          <div className={styles.navMenu}>
            {navLink.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.path}
                smooth={true}
                duration={500}
                spy={true}
                offset={100}
              >
                {item.display}
              </ScrollLink>
            ))}
            <div className={styles.navRight}>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2',
                  marginBottom: '0',
                }}
              >
                <Icon name='phone' />
                +9294423749
              </p>
            </div>
            <Button icon className={styles.darkModeButton} style={{ background: "#a4a2a4" }}>
              <Icon name='moon' style={{ background: "#a4a2a4" }} />
            </Button>
          </div>
          <span className={styles.mobileView}>
            <Icon name='list' />
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
