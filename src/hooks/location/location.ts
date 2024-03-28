import { NativeModules } from 'react-native';

import { Location } from './/location.types.ts';

const { LocationModule } = NativeModules;

export default LocationModule as Location;
