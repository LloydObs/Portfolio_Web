import React from 'react';
import styles from '../../../../styles/portfolioitem.module.scss';
import Image from 'next/image';
import globalStyles from '../../../../styles/hero.module.scss';
import Link from 'next/link';

const PortfolioItems = (props) => {
  const { title, image, liveUrl, keyword } = props.item;

  const isValidUrl = liveUrl && /^(http|https):\/\/[^ "]+$/.test(liveUrl);

  return (
    <div className={styles.portfolioItems}>
      <div className={styles.headerItems}>
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={styles.portfolioKeyword} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.portfolioImage}>
        <Image alt="portfolio-img" src={image} width={220} height={200} layout="fixed" />
      </div>
      <div className={styles.portfolioLive}>
        {isValidUrl ? ( 
          <button className={globalStyles.primaryButton}>
            <Link href={liveUrl} target='_blank'>Launch</Link>
          </button>
        ) : (
          <p className={styles.projectNA}>Project site is not yet available online.</p>
        )}
      </div>
    </div>
  );
}

export default PortfolioItems;
