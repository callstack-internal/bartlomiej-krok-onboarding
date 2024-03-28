import { useState } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';

import { PermissionStatus } from 'react-native/Libraries/PermissionsAndroid/PermissionsAndroid';

import { Cords } from 'src/hooks/location/location.types.ts';

import LocationModule from './location.ts';

export const useLocation = () => {
  const [cords, setCords] = useState<Cords | undefined>();
  const [cordsIsLoading, setCordsIsLoading] = useState(false);
  const [locationPermissionStatus, setLocationPermissionStatus] =
    useState<PermissionStatus>('denied');

  const refreshCurrentPermission = async (callback: () => void) => {
    const permissionStatus = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    );
    setLocationPermissionStatus(permissionStatus);
    if (permissionStatus === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Alert.alert(
        'Permission denied',
        'Please enable location permission in settings',
      );
    } else if (permissionStatus === PermissionsAndroid.RESULTS.GRANTED) {
      LocationModule.getCurrentLocation().then(setCords);
      callback();
    }
  };

  const getCurrentPosition = async () => {
    if (cords) {
      setCordsIsLoading(false);
      return;
    }

    try {
      const permissionStatus = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      console.log(permissionStatus);
      if (permissionStatus === PermissionsAndroid.RESULTS.GRANTED) {
        LocationModule.getCurrentLocation().then(setCords);
      }
    } finally {
      setCordsIsLoading(false);
    }
  };

  return {
    cordsIsLoading,
    locationPermissionStatus,
    cords,
    getCurrentPosition,
    refreshCurrentPermission,
  };
};
