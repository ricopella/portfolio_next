import Section from '@/components/section';
import Image from 'next/image';

const STYLES = {
  itemContainer: {
    className: 'flex flex-col items-center',
  },
  itemHeadings: {
    className: 'font-bold  text-center',
  },
  itemDescriptions: {
    className: 'text-sm',
  },
};

export default function Expertise() {
  return (
    <Section
      title='Turning Ideas Into Reality'
      id='Capabilities'
      fullScreen={false}
    >
      <div className='grid md:grid-cols-4 w-4/5 mx-auto gap-8 justify-center mb-10'>
        <div {...STYLES.itemContainer}>
          <Image
            src='/images/web.svg'
            width={200}
            height={200}
            alt='Web Development'
          />
          <h6 {...STYLES.itemHeadings}>Website Development</h6>
          <div {...STYLES.itemDescriptions}>
            From idea or mockups to fully functional website or app, I tailor
            the right tools for projects of any size, leveraging the most
            up-to-date, industry-leading technologies to meet your specific
            needs.
          </div>
        </div>

        <div {...STYLES.itemContainer}>
          <Image
            src='/images/data.svg'
            width={200}
            height={200}
            alt='Data Analytics & Visualization'
          />
          <h6 {...STYLES.itemHeadings}>Data Analytics & Visualization</h6>
          <div {...STYLES.itemDescriptions}>
            Turn raw data into visual stories, helping your business make more
            informed decisions.
          </div>
        </div>

        <div {...STYLES.itemContainer}>
          <Image
            src='/images/store.svg'
            width={200}
            height={200}
            alt='Data Analytics & Visualization'
          />
          <h6 {...STYLES.itemHeadings}>E-Commerce Solutions</h6>
          <div {...STYLES.itemDescriptions}>
            Build online stores that are user-friendly, secure, and optimized
            for sales.
          </div>
        </div>

        <div {...STYLES.itemContainer}>
          <Image
            src='/images/api.svg'
            width={200}
            height={200}
            alt='API & Backend Services'
          />
          <h6 {...STYLES.itemHeadings}>API & Backend Services</h6>
          <div {...STYLES.itemDescriptions}>
            Want to chat with your customers automatically? Need to simplify
            repetitive tasks? Interested in connecting your app to others?
            I&apos;ve got you covered. I can create the behind-the-scenes magic
            that makes everything work seamlessly.
          </div>
        </div>
      </div>
    </Section>
  );
}
