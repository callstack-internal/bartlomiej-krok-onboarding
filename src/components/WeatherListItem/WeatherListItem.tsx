import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { WeatherItem } from '../../network/queries/weather/weather.types';
import { Colors } from '../../theme/constants';
import { ChevronRight } from '../ChevronRight';
import { Chip } from '../Chip';

interface Props {
  weather: WeatherItem;
  onPress?: (item: WeatherItem) => void;
  hideArrow?: boolean;
}

export const WeatherListItem = (props: Props) => {
  const { weather, onPress, hideArrow } = props;

  const onItemPress = () => onPress && onPress(weather);

  const Component = onPress ? Pressable : View;

  return (
    <Component onPress={onItemPress} style={styles.itemWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri: weather.imageUri,
          }}
        />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{weather.cityName}</Text>
          <Text style={styles.subtitle}>{weather.weatherDescription}</Text>
        </View>
        <Chip label={weather.temp} />
      </View>

      <View style={styles.iconRight}>
        {hideArrow ? <View style={styles.iconPlaceholder} /> : <ChevronRight />}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontWeight: 'bold',
    color: Colors.gray,
  },
  iconRight: {
    paddingLeft: 8,
    paddingRight: 16,
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 16,
    height: 36,
  },
});
