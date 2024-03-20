import { Text, TouchableOpacity } from 'react-native';

import { WeatherItem } from '../../network/queries/weather/weather.types';

interface Props {
  item: WeatherItem;
  onPress: (item: WeatherItem) => void;
}

export const WeatherListItem = (props: Props) => {
  const { item, onPress } = props;

  const onItemPress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity onPress={onItemPress}>
      <Text>{item.id}</Text>
    </TouchableOpacity>
  );
};
