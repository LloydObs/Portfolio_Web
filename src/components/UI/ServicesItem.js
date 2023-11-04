import React from 'react'
import styles from '../../styles/servicesitem.module.scss'
import { Icon } from 'semantic-ui-react';

const ServicesItem = ({title, icon}) => {
  return (
    <div className={styles.serviceItem}>
      <span>
          <Icon name={icon}></Icon>
      </span>
      

      <h5 >
          {title}
      </h5>
    </div>
  );
};

export default ServicesItem;