import STYLES from './styles';

export default function Education() {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>Education</h4>
      <div {...STYLES.educationBody}>
        <div {...STYLES.educationItem}>
          <h4 {...STYLES.educationTitle}>UCLA Extension</h4>
          <p {...STYLES.educationType}>
            Full-Stack Web Development Certification
          </p>
          <i {...STYLES.educationYear}>2017</i>
        </div>

        <div {...STYLES.educationItem}>
          <h4 {...STYLES.educationTitle}>Johnson & Wales University</h4>
          <p {...STYLES.educationType}>Bachelor of Arts</p>
          <i {...STYLES.educationYear}>2015-2009</i>
          <p className='text-xs mb-0'>+ GPA 3.8 of 4.0</p>
        </div>

        <div {...STYLES.educationItem}>
          <h4 {...STYLES.educationTitle}>Scrum Alliance</h4>
          <p {...STYLES.educationType}>Certified Scrum Master</p>
          <i {...STYLES.educationYear}>2018</i>
        </div>
      </div>
    </div>
  );
}
