import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WeatherDetails } from '../screens/WeatherDetails';
import { WeatherList } from '../screens/WeatherList';

import { RootNavigationParamList } from './RootNavigation.types';

const Stack = createNativeStackNavigator<RootNavigationParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: 'Weather' }}>
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
