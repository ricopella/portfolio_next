import Section from '@/components/section';

export default function AboutMe() {
  return (
    <Section title='About Me'>
      <div className='mx-auto w-4/5 grid gap-4'>
        <p className='text-2xl'>
          {`Navigating the vibrant worlds of web development and design, I specialize in crafting digital experiences that drive results. From elevating brand presence with sleek online storefronts to architecting data-driven platforms for businesses, my work prioritizes functionality
        without sacrificing aesthetics. While I often lean on React for its dynamic capabilities, my toolset is always evolving to remain on the cutting edge.`}
        </p>
        <p className='text-2xl'>
          {`Based between the bustling hubs of Los Angeles and Bangkok, I've been privileged to work with diverse clients, understanding global digital trends and nuances. My journey began in 2017 with an intensive dive into
        the Node.js ecosystem at UCLA's Bootcamp. This foundation solidified my transition into the tech space, setting the stage for countless projects that blend aesthetics, functionality, and user experience.`}
        </p>
        <p className='text-2xl'>
          {`Away from the keyboard, my days oscillate between experimenting with plant-based recipes, immersing myself in music, and cheering for New England sports. Music has been a lifelong passion. Since my teen years, I've been weaving tales through tracks, with my turntables and beat
        machine as constant companions. 'Music Please,' my DJ crew, even had its roots in a radio show that echoed for an unforgettable 7 years.`}
        </p>
        <p className='text-2xl'>
          {`When it comes to crafting digital experiences, my approach is both artful and methodical. If you're in the market for a blend of creativity and technical prowess, I'm here to help craft that perfect digital narrative.`}
        </p>
      </div>
    </Section>
  );
}
