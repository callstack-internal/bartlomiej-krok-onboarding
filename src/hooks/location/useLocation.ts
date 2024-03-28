import { useEffect, useState } from 'react';

import { Cords } from 'src/hooks/location/location.types.ts';

import LocationModule from './location.ts';

export const useLocation = () => {
  const [cords, setCords] = useState<Cords | undefined>();

  useEffect(() => {
    console.log('useLocation');
    LocationModule.getCurrentLocation()
      .then(e => {
        console.log('getCurrentLocation', e);
        setCords(e);
      })
      .catch(e => {
        console.log('error:', e);
      });
  }, []);

  return {
    cords,
  };
};
