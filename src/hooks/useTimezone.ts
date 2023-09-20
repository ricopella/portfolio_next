'use client';
import { useEffect, useState } from 'react';

type Timezone = string | null;

const useTimezone = (): Timezone => {
  const [timezone, setTimezone] = useState<Timezone>(null);

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

  return timezone;
};

export default useTimezone;
