import STYLES from './styles';

export default function Education() {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>Education</h4>
      <div className='grid px-4'>
        <div className='grid'>
          <h4 className='font-bold border-b-2 border-solid border-secondary mt-0'>
            UCLA Extension
          </h4>
          <p className='text-sm mb-0'>
            Full-Stack Web Development Certification
          </p>
          <i className='text-sm'>2017</i>
        </div>

        <div className='grid'>
          <h4 className='font-bold border-b-2 border-solid border-secondary'>
            Johnson & Wales University
          </h4>
          <p className='text-sm mb-0'>Bachelor of Arts</p>
          <i className='text-sm'>2015-2009</i>
          <p className='text-xs mb-0'>+ GPA 3.8 of 4.0</p>
        </div>

        <div className='grid'>
          <h4 className='font-bold border-b-2 border-solid border-secondary'>
            Scrum Alliance
          </h4>
          <p className='text-sm mb-0'>Certified Scrum Master</p>
          <i className='text-sm'>2018</i>
        </div>
      </div>
    </div>
  );
}
