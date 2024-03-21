import { Button, Text, View } from 'react-native';

import { Screens } from '../../navigation/routes.types.ts';
import { useRootNavigation } from '../../navigation/useRootNavigation.ts';

export const WeatherList = () => {
  const { navigate } = useRootNavigation();
  return (
    <View>
      <Text>WeatherList</Text>
      <Button
        title={'Go to WeatherDetails'}
        onPress={() => navigate(Screens.WEATHER_DETAILS)}
      />
    </View>
  );
};
