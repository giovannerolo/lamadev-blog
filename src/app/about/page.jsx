import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt="" className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ipsam cupiditate neque quam, suscipit quis reprehenderit asperiores mollitia qui veritatis enim harum blanditiis dignissimos voluptatum doloribus assumenda necessitatibus delectus ab.
          Itaque id libero blanditiis!
          <br />
          <br/>
          Consequuntur earum suscipit commodi expedita error rerum eveniet tempore, minima autem consectetur voluptatibus tenetur, ab, aliquam praesentium debitis! Tempora nesciunt repudiandae velit, numquam modi dolores cum.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste sit temporibus numquam quidem nisi officia quod quos aliquid nam adipisci sed id consequatur officiis, molestiae unde vel explicabo vitae?
          <br />
          <br />
          - Creative Illustration
          <br />
          <br />
          - Dynamic Websites
          <br />
          <br />
          - Fast and Handy Mobile Apps          
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About