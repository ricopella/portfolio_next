'use client';

import Section from '@/components/section';
import Image from 'next/image';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TIMELINE = [
  {
    date: '2020 - 2023',
    title: 'Alpha.io',
    subtitle: 'Web Application',
    tags: ['React', 'TypeScript', 'NodeJS'],
    imgSrc: '/images/data.svg',
    imgAlt: 'Data Analytics Case Study',
    description: [
      `The Problem: Alpha io began by developing features that were
  suited to unique customer demands, which quickly became
  unsustainable due to feature repetition and scalability
  concerns. The clients had to manually gather and collate data
  from many sources, including Google Ads, Facebook Marketing,
  Apple Search Ads, Snowflake, BigQuery, MySQL, and Postgres,
  which often resulted in hours of unnecessary labor.`,
      `The Solution: As an early member of the team, I was
  instrumental in developing a data model that allows for
  standard data retrieval from various APIs and its mapping to
  build joinable datasets. This provided our clients with useful
  data insights from within a dashboard, removing the need for
  manual data manipulation. I also helped to create a
  "applications" feature that allowed users to create their own
  dashboards by dragging and dropping components such as data
  tables and visuals.`,
      `The Why: The universal data model was developed to address
  scalability concerns and to deliver a more streamlined user
  experience. We boosted efficiency while also offering a level
  of customization that set us apart from competitors by
  allowing easy data linkages from different sources. The
  "applications" feature was created as a natural expansion to
  give consumers greater control, further increasing the
  product's flexibility.`,
    ],
  },
  {
    date: '2022',
    title: 'Twilio-based Video Chat MVP for a Startup',
    subtitle: 'NextJS Web Application',
    imgSrc: '/images/web.svg',
    imgAlt: 'Web App Case Study',
    tags: ['React', 'TypeScript', 'NextJS'],
    description: [
      `The Problem: The founder of a business wanted to acquire first-round
      investment but required a working MVP to show potential investors
      the concept and practicality of her video chat service. The initial
      scope was too broad, putting both time and money limits at risk.`,
      `The Solution: As the single developer, I worked closely with the
      founder to reduce the scope of the MVP, making it more
      cost-effective and quicker to construct. I used Next.js to complete
      the project and deployed it on Vercel to reduce overhead costs to a
      minimal. The app was built to be fully responsive and linked with
      Twilio for video and audio calls.`,
      `The Why: Next.js was chosen for its performance advantages, ensuring
      a quick and seamless user experience. Choosing serverless deployment
      on Vercel ensured low overhead costs, which is critical for a
      startup in its early stages. The goal of making the app fully
      responsive was to increase user interaction across several devices.`,
      `The result: The creator successfully leveraged the MVP to win
first-round funding, proving the app's efficacy and the intelligent
trade-offs made throughout development.`,
    ],
  },
  {
    date: `2021`,
    title: `3D Web Application Redesign for Architectural Tool`,
    subtitle: `Web Application`,
    imgSrc: '/images/web.svg',
    imgAlt: 'Web App Case Study',
    tags: [`React`, `TypeScript`, `CSS`],
    description: [
      `The Problem: The startup team behind a 3D architectural tool was set
      to release its MVP but was experiencing design and user interface
      issues. The early construction prioritized utility over user
      experience and design features. Furthermore, the code contained
      legacy flaws, and account management tools were lacking.`,
      `The Solution: As a freelance developer, I joined the team and worked
      closely with a recently hired UX/UI designer. We collaborated to
      improve the overall user experience by redesigning the application's
      design. I also created detailed account management pages for users.
      To improve the application's reliability, custom hooks were used to
      optimize the codebase, and historical problems were resolved.`,
      `The Why: The redesign was crucial for increasing user engagement and
easing the startup's go-to-market strategy. Custom hooks made code
management easier, making it easier for the team to maintain and
upgrade the program. Account management tools were added to give
customers more control and customization options, which is critical
for user retention.`,
      `The Result: Following the redesign and feature addition, the startup
successfully released its MVP and started onboarding clients,
indicating the project's market readiness and feasibility.`,
    ],
  },
  {
    date: `2021`,
    title: `E-commerce Development for Skincare Brand`,
    subtitle: `Shopify`,
    imgSrc: '/images/store.svg',
    imgAlt: 'ECommerce Case Study',
    tags: [`Shopify`, `CSS`, `Ecommerce`],
    description: [
      `The Problem: The client, an aspiring skincare entrepreneur, wanted
    to start selling products online. She chose Shopify as the platform,
    but she lacked the technical know-how to set up and modify the
    business to match her vision and brand.`,
      `The Solution: I collaborated with the customer to explore branding
    concepts, store layouts, and critical features. I adjusted the
    appearance and feel to reflect the business identity using Shopify's
    powerful templates. I configured inventory management, delivery
    choices, terms of service, and other critical backend settings.`,
      `The Why: Because of its out-of-the-box functionality and
    customization options, Shopify was the obvious choice for a rapid
    and successful e-commerce solution. Training and one month of
    post-launch assistance ensured that the client could run the store
    confidently and independently.`,
      `The result: The customer successfully launched the store, which is
    still open and well-received by its target audience.`,
    ],
  },
  {
    date: `2019`,
    title: `E-commerce Development for Home Decor Brand`,
    subtitle: `Shopify`,
    imgSrc: '/images/store.svg',
    imgAlt: 'ECommerce Case Study',
    tags: [`Shopify`, `CSS`, `Ecommerce`],
    description: [
      `The Problem: The customer, another entrepreneur focused on the home
      decor industry, decided to focus on her core company activities and
      delegated the technical setup of her Shopify store to a specialist.`,
      `The Solution: We collaborated to create a brand-aligned approach for
      the online store. I tailored a Shopify template to the brand's
      aesthetic and verified that all backend features, such as inventory
      and shipping, were in place.`,
      `The Why: Because of its user-friendly design and wide customization
      options, Shopify was the best choice for a quick launch. The client
      received training and one month of post-launch support, allowing her
      to efficiently run her store.`,
      `The Result: The home decor store successfully debuted and continues
      to operate, serving its targeted market and meeting the client's
      business objectives.`,
    ],
  },
  {
    date: `2017 - 2020`,
    title: `FanAI Inc.`,
    subtitle: `Web Application`,
    imgSrc: '/images/data.svg',
    imgAlt: 'Data & Visualization Case Study',
    tags: [`React`, `TypeScript`, `NodeJS`],
    description: [
      `The Problem: The customer ran an online retail business, offering
fabrics on sites such as eBay, Jet.com, Walmart, and Amazon.
Inventory management and upgrading across these several platforms
was a time-consuming and error-prone operation. They required a
unified system to monitor stock levels across all sales channels
efficiently.`,
      `The Solution: As one of the initial engineers, I was solely
responsible for the frontend. Working working with a UX Designer, I
custom built every component to match the company's logo. Lazy
loading, paging, and caching technologies were implemented to
optimize data presentation and improve the user experience. Aided in
the creation of data-rich dashboards that aided in better marketing
decision-making.`,
      `The Why: Custom-built components were essential to maintain the
unique brand identity. Lazy loading, paging, and caching were chosen
as strategies to enhance UX, given the large volumes of data being
handled, making the web app more responsive and user-friendly.`,
    ],
  },
  {
    date: `2017`,
    title: `API Development & Integration for Multi-Platform Inventory Management`,
    subtitle: `NodeJS API`,
    imgSrc: '/images/api.svg',
    imgAlt: 'API Case Study',
    tags: [`NodeJS`, `API`, `Ecommerce`],
    description: [
      `The Problem: The Solution: As Scrum master and developer, I oversaw
      a team of six engineers in the development of an API service
      utilizing Express.js. The API acted as a central hub for inventory
      and sales data, allowing the client to update stock information in a
      single location. Following the update, the API would synchronize
      stock levels across eBay, Jet.com, Walmart, and Amazon.`,
      `The Solution: As Scrum master and developer, I oversaw a team of six
      engineers in the development of an API service utilizing Express.js.
      The API acted as a central hub for inventory and sales data,
      allowing the client to update stock information in a single
      location. Following the update, the API would synchronize stock
      levels across eBay, Jet.com, Walmart, and Amazon.`,
      `The Why: A unified API was required to reduce the operational costs
      associated with managing multiple sales platforms. It not only saved
      time, but it also reduced the possibility of errors from human
      upgrades. Because this was implemented as an API, the client has the
      freedom to integrate it into their existing workflows or other
      systems in the future.`,
    ],
  },
];

const STYLES = {
  collapseContent: `collapse-content`,
  detail: `collapse grid gap-4`,
  icon: `bg-neutral flex items-center justify-center`,
  summary: `collapse-title text-xl font-medium`,
  summarySubtitle: `vertical-timeline-element-subtitle text-sm`,
  summaryTitle: `vertical-timeline-element-title lg:text-xl text-md`,
  tagsContainer: `grid md:grid-cols-max-3 gap-2 mt-4`,
  timelineItem: `vertical-timeline-element--work`,
  timeLineText: `!bg-base-100 !shadow-lg`,
};

export default function Timeline() {
  return (
    <Section
      title='Case Studies'
      id='CaseStudies'
      fullScreen={false}
      sectionStyles='bg-base-300'
    >
      <VerticalTimeline lineColor='hsl(var(--p))'>
        {TIMELINE.map((item) => (
          <React.Fragment key={item.title}>
            <VerticalTimelineElement
              className={STYLES.timelineItem}
              textClassName={STYLES.timeLineText}
              contentArrowStyle={{ borderRight: '7px solid hsl(var(--p))' }}
              date={item.date}
              iconClassName={STYLES.icon}
              visible
              icon={
                <Image
                  src={item.imgSrc}
                  width={40}
                  height={40}
                  alt={item.imgAlt}
                />
              }
              key={item.title}
            >
              <details className={STYLES.detail}>
                <summary className={STYLES.summary}>
                  <h3 className={STYLES.summaryTitle}>{item.title}</h3>
                  <h4 className={STYLES.summarySubtitle}>{item.subtitle}</h4>
                  <div className={STYLES.tagsContainer}>
                    {item.tags.map((tag) => (
                      <div className='badge badge-primary' key={tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </summary>
                <div className={STYLES.collapseContent}>
                  {item.description.map((desc, i) => (
                    <p key={i} className='normal-case !text-sm'>
                      {desc}
                    </p>
                  ))}
                </div>
              </details>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </Section>
  );
}
