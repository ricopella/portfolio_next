'use client';

import useTimezone from '@/hooks/useTimezone';
import Clock from 'react-live-clock';

const STYLES = {
  container: {
    className: `absolute left-1/2 top-0 transform -translate-x-1/2 grid-cols-max-3 align-middle justify-center w-4/5 text-neutral-content mr-1 hidden md:grid text-sm italic opacity-60 gap-5`,
  },
};

export default function Timezones() {
  const timezone = useTimezone();

  return (
    <div {...STYLES.container}>
      {timezone && (
        <div className="after:content-['_|_'] after:ml-4">
          {timezone ?? 'Current'}:
          <Clock format={'HH:mm'} ticking={true} />
        </div>
      )}
      <div className="after:content-['_|_'] after:ml-4">
        Los Angeles:{' '}
        <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
      </div>
      <div>
        Bangkok:{' '}
        <Clock format={'HH:mm'} ticking={true} timezone={'ASIA/Bangkok'} />
      </div>
    </div>
  );
}
