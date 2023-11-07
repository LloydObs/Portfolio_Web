import React from 'react'
import styles from '../../../../styles/testimonials.module.scss'
import Image from 'next/image'

const TestimonialItem = (props) => {

const { name, image, position, comment } = props.item
    return (
        <div className={styles.testimonialItem}>
            <div className={styles.testimonialColleagues}>
                <Image alt='clientImg' src={image}
                    width={180} height={150} />
                <div>
                    <h6>
                        {name}
                    </h6>
                    <h6>
                        {position}
                    </h6>
                </div>

            </div>
            <p>
                {comment}
            </p>
        </div>
    )
}

export default TestimonialItem