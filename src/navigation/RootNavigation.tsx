import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { WeatherDetails } from 'src/screens/WeatherDetails';
import { WeatherList } from 'src/screens/WeatherList';
import { Colors } from 'src/theme/constants';

import { RootNavigationParamList } from './RootNavigation.types';

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.lightGray,
  },
  contentStyle: {
    backgroundColor: Colors.white,
  },
};

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name={'WEATHER_LIST'}
          component={WeatherList}
          options={{ title: 'Weather' }}
        />
        <Stack.Screen
          name={'WEATHER_DETAILS'}
          component={WeatherDetails}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
