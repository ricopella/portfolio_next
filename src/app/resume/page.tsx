import Animated from '@/components/animated';
import Image from 'next/image';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import styles from './styles';

export default function Resume() {
  return (
    <div {...styles.container}>
      <Animated key='resume' {...styles.heading}>
        <div {...styles.headingImage}>
          <Image
            src='/images/nrs2.jpeg'
            alt='Narin Rico Sundarabhaya'
            width={140}
            height={110}
            className='rounded-md'
          />
        </div>
        <div {...styles.headingContent}>
          <div {...styles.headingInner}>
            <h1 {...styles.headingTitle}>Narin Sundarabhaya</h1>
            <h2 {...styles.headingSubtitle}>Full-Stack Developer</h2>
            <p {...styles.headingDescription}>
              Versatile Senior Software Engineer with a proven track record in
              both corporate and freelance settings. Experienced in guiding
              small businesses to market, securing funding through MVP
              development.
            </p>
          </div>
        </div>
      </Animated>
      <Animated key='column' {...styles.columnOne}>
        <div>
          <Contact />
          <Skills />
          <Education />
        </div>
        <Experience />
      </Animated>
    </div>
  );
}
