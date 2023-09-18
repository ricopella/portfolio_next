'use client';
import { useEffect, useState } from 'react';
import Clock from 'react-live-clock';

export default function Timezones() {
  const [timezone, setTimezone] = useState<null | string>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const parts = tz.split('/');

    if (parts.length > 1) {
      const zoneCity = parts[1];

      if (zoneCity !== 'Pacific' && zoneCity !== 'Bangkok') {
        setTimezone(zoneCity);
      } else {
        setTimezone(null);
      }
    } else {
      setTimezone('Current');
    }
  }, []);
  return (
    <div className='absolute left-1/2 top-0 transform -translate-x-1/2 grid-cols-max-3 align-middle justify-center w-4/5 text-neutral-content mr-1 hidden md:grid'>
      {timezone && (
        <div className='after:content-["__|_"] '>
          {timezone ?? 'Current'}:
          <Clock format={'HH:mm'} ticking={true} />
        </div>
      )}
      <div className='mx-1 after:content-["__|_"]'>
        Los Angeles:{' '}
        <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
      </div>
      <div className='ml-1'>
        Bangkok:{' '}
        <Clock format={'HH:mm'} ticking={true} timezone={'ASIA/Bangkok'} />
      </div>
    </div>
  );
}
