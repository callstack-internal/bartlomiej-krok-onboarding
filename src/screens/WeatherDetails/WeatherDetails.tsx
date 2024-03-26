import { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import {
  ComplexListItem,
  Divider,
  ListItemHorizontal,
  ListItemHorizontalProps,
} from 'src/components';
import { useLoggedRoute } from 'src/navigation/useRootNavigationRoute';

import { mapWeatherItemToList } from './WeatherDetails.utils';

export const WeatherDetails = () => {
  const { params } = useLoggedRoute('WEATHER_DETAILS');
  const { item: weatherItem } = params;
  const listItems = mapWeatherItemToList(weatherItem);
  const keyExtractor = (item: ListItemHorizontalProps) => item.label;
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ListItemHorizontalProps>) => (
      <ListItemHorizontal {...item} />
    ),
    [],
  );

  const renderHeader = (
    <>
      <ComplexListItem
        id={weatherItem.id}
        title={weatherItem.cityName}
        subtitle={weatherItem.weatherDescription}
        imageUri={weatherItem.imageUri}
        labelText={weatherItem.temp}
        hideArrow
      />
      <Divider />
    </>
  );

  return (
    <FlatList
      testID={'test-WeatherDetails'}
      keyExtractor={keyExtractor}
      data={listItems}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={renderHeader}
    />
  );
};
