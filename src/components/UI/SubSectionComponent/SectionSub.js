import React from 'react'
import styles from '../../../styles/subsections.module.scss'

const SectionSub = (props) => {
  return (
    <h5 className={styles.sectionSubtitle}>{props.subtitle}
    
    </h5>
  )
}

export default SectionSub