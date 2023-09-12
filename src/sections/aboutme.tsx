import Section from '@/components/section';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <Section title='About Me'>
      <div className='mx-auto w-4/5 grid grid-cols-1 lg:grid-cols-3 lg:gap-8 h-full align-middle'>
        <div className='grid col-span-1 lg:col-span-1 justify-center'>
          <Image
            src='/images/nrs.jpg'
            alt='Narin Rico Sundarabhaya'
            width={300}
            height={300}
          />
        </div>

        <div className='col-span-1 lg:col-span-2'>
          <p>
            {`Navigating the vibrant worlds of web development and design, I specialize in crafting digital experiences that drive results. From elevating brand presence with sleek online storefronts to architecting data-driven platforms for businesses, my work prioritizes functionality without sacrificing aesthetics. While I often lean on React for its dynamic capabilities, my toolset is always evolving to remain on the cutting edge.`}
          </p>
          <p>
            {`Based between the bustling hubs of Los Angeles and Bangkok, I've been privileged to work with diverse clients, understanding global digital trends and nuances. Away from the keyboard, my days oscillate between experimenting with plant-based recipes, immersing myself in music, and cheering for New England sports. Music has been a lifelong passion. Since my teen years, I've been weaving tales through tracks, with my turntables and beat machine as constant companions. Music Please, my DJ crew, even had its roots in a radio show that echoed for an unforgettable 7 years.`}
          </p>
          <p>
            {`When it comes to crafting digital experiences, my approach is both artful and methodical. If you're in the market for a blend of creativity and technical prowess, I'm here to help craft that perfect digital narrative.`}
          </p>
        </div>
      </div>
    </Section>
  );
}
