import Animated from '@/components/animated'
import Contact from '@/components/resume/contact'
import Education from '@/components/resume/education'
import Experience from '@/components/resume/experience'
import Skills from '@/components/resume/skills'
import styles from '@/components/resume/styles'
import Image from 'next/image'

export default function Resume() {
  return (
    <Animated {...styles.container}>
      <div {...styles.heading}>
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
      </div>

      <div {...styles.columnOne}>
        <div>
          <Contact />
          <Skills />
          <Education />
        </div>
        <Experience />
      </div>
    </Animated>
  );
}
