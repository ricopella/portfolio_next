import Section from '@/components/section';

type JobItem = {
  company: string;
  title: string;
  date: string;
  description: string;
  points?: string[];
};

const HISTORY: JobItem[] = [
  {
    company: 'Polyhedron Projects, LLC',
    title: 'Freelance Software Engineer | Co-Owner',
    date: '2017 - Present',
    description: `Combining my passion for helping small businesses thrive with my deep technical expertise, I've been privileged to work alongside numerous clients, bringing their dream projects to life. By focusing on crafting personalized web solutions that cater to each client's unique requirements, I ensure that the end product not only meets but exceeds expectations. Here are examples of different projects I've been involved in:`,
    points: [
      'Video Chat Application: Developed a Twilio-based video chat MVP hosted on Vercel, aiding a client in securing initial funding',
      '3D Web App Revamp: Collaborated on enhancing a 3D architectural tool; introducing responsiveness, account features, and streamlined code via custom hooks',
      'API & E-commerce Integration: Built an inventory & sales API linked with major platforms like Jet.com and Amazon; skillfully managed weekly sprints and a six-member team',
      'Shopify Stores Creation: Customized e-commerce sites for diverse sectors, ensuring seamless client transition post-launch',
      'Custom Website Solutions: Delivered tailored sites on platforms like Wix, embedding features such as custom calendars and automated booking services',
    ],
  },
  {
    company: 'Alpha.io Inc.',
    title: 'Software Engineer III',
    date: '2020 - 2023',
    description:
      'At Alpha.io, my role went beyond just writing code. I was a key member of a small, agile team that took on ambitious projects aimed at helping businesses make sense of complex data. I worked on both the back end and front end of our software, essentially becoming a jack-of-all-trades in the process. This gave me the chance to directly influence the product and see the impact of my work in real-time.',
  },
  {
    company: 'FanAI Inc.',
    title: 'Frontend Developer II',
    date: '2017 - 2020',
    description: `Starting as a Frontend Developer at FanAI, I had the opportunity to be at the intersection of technology and eSports. I focused on building user-friendly interfaces that allowed clients in the eSports industry to interact with and understand their data more efficiently. I collaborated closely with designers and back-end engineers to create a seamless experience for users, ensuring that the tech side of things was always in service to our clients' needs.`,
  },
];

const Job = (job: JobItem) => {
  return (
    <div>
      <div
        className='grid align-middle'
        style={{
          gridTemplateColumns: `1fr max-content`,
        }}
      >
        <h3 className='w-max mt-0'>{job.company}</h3>
        <h5>{job.date}</h5>
      </div>
      <h4 className='mb-4 mt-0'>{job.title}</h4>
      <p>{job.description}</p>
      {job.points && (
        <ol className='m-8 mb-0 list-disc'>
          {job.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default function WorkHistory() {
  return (
    <Section title='Work History'>
      <div className='mx-auto w-4/5 grid gap-8'>
        {HISTORY.map((job) => (
          <Job key={job.company} {...job} />
        ))}
      </div>
    </Section>
  );
}
