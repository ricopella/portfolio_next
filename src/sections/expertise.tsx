import Section from '@/components/section';
import Image from 'next/image';

const STYLES = {
  container: {
    className:
      'grid lg:grid-cols-4 w-4/5 mx-auto gap-8 justify-center my-10 sm:grid-cols-2',
  },
  card: {
    className:
      'card w-full shadow-xl bg-neutral text-neutral-content grid grid-rows-2',
  },
  cardBody: {
    className: 'card-body pt-0',
  },
  itemContainer: {
    className: 'flex flex-col items-center',
  },
  itemHeadings: {
    className: 'card-title text-center text-m',
  },
  itemDescriptions: {
    className: 'text-sm normal-case',
  },
};

const ITEMS = [
  {
    imageSrc: '/images/web.svg',
    imageAlt: 'Web Development',
    title: 'Website Development',
    description: `From idea or mockups to fully functional website or app, I tailor
  the right tools for projects of any size.`,
  },
  {
    imageSrc: '/images/data.svg',
    imageAlt: 'Data Analytics & Visualization',
    title: 'Data Analytics & Visualization',
    description: ` Turn raw data into visual stories, helping your business make more
    informed decisions.`,
  },
  {
    imageSrc: `/images/store.svg`,
    imageAlt: 'E-Commerce Solutions',
    title: 'E-Commerce Solutions',
    description: `Build online stores that are user-friendly, secure, and optimized
    for sales.`,
  },
  {
    imageSrc: `/images/api.svg`,
    imageAlt: 'API & Backend Services',
    title: 'API & Backend Services',
    description: `Want to chat with your customers automatically? Need to simplify
    repetitive tasks? I can create the behind-the-scenes
    magic that makes everything work seamlessly.`,
  },
];

export default function Expertise() {
  return (
    <Section
      title='Turning Ideas Into Reality'
      id='Capabilities'
      fullScreen={false}
      sectionStyles='bg-base-300'
    >
      <div {...STYLES.container}>
        {ITEMS.map((item) => (
          <div key={item.title} {...STYLES.card}>
            <figure className='relative m-4'>
              <Image src={item.imageSrc} fill alt={item.imageAlt} />
            </figure>
            <div {...STYLES.cardBody}>
              <h2 {...STYLES.itemHeadings}>{item.title}</h2>
              <p {...STYLES.itemDescriptions}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
