import STYLES from './styles';

export default function Contact() {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>CONTACT</h4>
      <div className='flex flex-col gap-2'>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Location:</p>
          <p className={STYLES.contactRowValue.className}>Los Angeles, CA</p>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Phone:</p>
          <a
            href='tel:+14242618290'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            424-261-8290
          </a>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Email:</p>
          <a
            href='mailto=narinsun2020@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            nrs710@gmail.com
          </a>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>Github:</p>
          <a
            href='https://github.com/ricopella'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            @ricopella
          </a>
        </div>
        <div
          className={STYLES.contactRowItem.className}
          style={STYLES.contactRowItem.inline}
        >
          <p className={STYLES.contactRowKey.className}>LinkedIn:</p>
          <a
            href='https://www.linkedin.com/in/nsundara/'
            target='_blank'
            rel='noopener noreferrer'
            className={STYLES.contactRowValue.className}
          >
            @nsundara
          </a>
        </div>
      </div>
    </div>
  );
}
