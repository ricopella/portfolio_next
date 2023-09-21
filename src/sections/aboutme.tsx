import Section from '@/components/section';
import Image from 'next/image';

const CONTENT = [
  `I work across the many fields of web development and design to craft experiences for users that are both innovative and effective. I use web technologies known for adaptability and dynamism, to create aesthetically pleasing online stores and data-driven applications that put usability first. However, in order to remain competitive, I am always updating my toolkit.`,
  `Based in Los Angeles and Bangkok, my diverse work experience—spanning full-time roles at innovative firms to freelance projects—has equipped me with invaluable insights into global digital trends and nuances.`,
  `When I'm not writing code or working in groups, I enjoy a wide variety of activities. I am a firm believer in the benefits of leading an active lifestyle. Because of my interest in the visual arts, I frequently visit galleries, and I am always on the lookout for a new and exciting coffee shop. My interest in music began at an early age, and before I began working on digital experiences, I spent more than a decade as a professional DJ.`,
  `I take an artistic and methodical approach while designing interactive digital experiences. Let's work together to convey your digital story with the right amount of imagination and technical know-how.`,
];

const STYLES = {
  container: `mx-auto w-4/5 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 h-full align-middle`,
  imageContainer: `grid col-span-1 lg:col-span-1 justify-center`,
  text: `normal-case`,
};

export default function AboutMe() {
  return (
    <Section
      title='About Me'
      id='AboutMe'
      sectionStyles='bg-base-200'
      fullScreen={false}
    >
      <div className={STYLES.container}>
        <div className={STYLES.imageContainer}>
          <Image
            src='/images/nrs.jpg'
            alt='Narin Rico Sundarabhaya'
            width={300}
            height={300}
            className=' rounded-md shadow-xl'
          />
        </div>
        <div className='grid gap-4 col-span-1 lg:col-span-2'>
          {CONTENT.map((c, index) => (
            <p key={`about_tme_${index}`} className={STYLES.text}>
              {c}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
