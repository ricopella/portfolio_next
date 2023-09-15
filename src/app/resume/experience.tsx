import STYLES from './styles';

export default function Experience() {
  return (
    <div {...STYLES.experienceBody}>
      <h4 {...STYLES.experienceHeading}>Experience</h4>
      <div {...STYLES.experienceContainer}>
        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Co-Owner / Developer</div>
            <a
              href='https://polyhedronprojects.com'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              Polyhedron Projects, LLC
            </a>
            <i {...STYLES.experienceFirstTitleDate}>2017 - Present</i>
          </div>
          <ul {...STYLES.experienceUl}>
            <li>
              Video Chat Application: Developed a Twilio-based video chat MVP
              hosted on Vercel, aiding a client in securing initial funding.
            </li>
            <li>
              3D Web App Revamp: Collaborated on enhancing a 3D architectural
              tool; introducing responsiveness, account features, and
              streamlined code via custom hooks.
            </li>
            <li>
              API & E-commerce Integration: Built an inventory & sales API
              linked with major platforms like Jet.com and Amazon; skillfully
              managed weekly sprints and a six-member team.
            </li>
            <li>
              Shopify Stores Creation: Customized e-commerce sites for diverse
              sectors, ensuring seamless client transition post-launch.
            </li>
            <li>
              Custom Website Solutions: Delivered tailored sites on platforms
              like Wix, embedding features such as custom calendars and
              automated booking services.
            </li>
          </ul>
        </div>
        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Software Engineer III</div>
            <a
              href='https://alpha.io'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              Alpha.io Inc.
            </a>
            <i {...STYLES.experienceFirstTitleDate}>June 2020 - Sept 2023</i>
          </div>
          <ul {...STYLES.experienceUl}>
            <li>
              Innovative Features: Added integration with OpenAI for specialized
              features, like AI-assisted SQL syntax error correction &
              TypeChat-powered user prompt conversions.
            </li>
            <li>
              TypeScript Conversion: Transformed the frontend (React) & backend
              (Node.JS) to TypeScript, bolstering code stability & readability.
            </li>
            <li>
              API Integrations & OAuth Implementation: Integrated Slack, Google
              Ads, Sheets, BigQuery, Facebook Marketing, Snowflake & more.
              Executed full OAuth flow, enhancing security & authorization.
            </li>
            <li>
              Client-Specific Development & Optimization: Developed NextJS sites
              for top clients, boosting conversions from thousands of daily
              visits; implemented weekly A+B tests across devices to optimize
              user experience.
            </li>
            <li>
              Analytics: Incorporated segment.com, enabling comprehensive
              tracking of page views, user segmentation, and event activities.
            </li>
            <li>Promoted from Software Engineer II to III in 2021.</li>
          </ul>
        </div>

        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Frontend Developer II</div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              FanAI Inc.
            </a>
            <i {...STYLES.experienceFirstTitleDate}>Dec 2017 - June 2020</i>
          </div>
          <ul {...STYLES.experienceUl}>
            <li>
              Created data visualizations and dashboards built with Redux &
              Highcharts. Examples: social following & interactions (twitter &
              twitch), demographics, purchase behaviors, and cookie tracking
              analytics.
            </li>
            <li>
              Converted desktop only application to mobile friendly and fully
              responsive using React-Responsive and CSS Grid, added animations
              for page changes and user interactions using Framer-Motion.
            </li>
            <li>
              Improved UX by reducing network calls by 80% with in-browser
              caching.
            </li>
            <li>Promoted from Frontend Developer I to II in 2019.</li>
          </ul>
        </div>

        <div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Teacher Assistant</div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              UCLA Extension
            </a>
            <i {...STYLES.experienceFirstTitleDate}>Sept 2017 - Dec 2017</i>
          </div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>Sr. Client Manager</div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              Kforce, Inc.
            </a>
            <i {...STYLES.experienceFirstTitleDate}>Aug 2015 - Oct 2017</i>
          </div>
          <div {...STYLES.experienceFirstTitleRow}>
            <div {...STYLES.experienceFirstTitle}>
              Vice President, Sales & Project Management
            </div>
            <a
              href='https://fan.ai'
              target='_blank'
              rel='noopener noreferrer'
              {...STYLES.experienceTitleLink}
            >
              PSE Agency
            </a>
            <i {...STYLES.experienceFirstTitleDate}>July 2009 - Aug 2015</i>
          </div>
        </div>
      </div>
    </div>
  );
}
