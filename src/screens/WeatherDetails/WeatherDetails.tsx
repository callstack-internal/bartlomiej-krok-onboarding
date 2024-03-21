import { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Divider } from '../../components/Divider';
import {
  ListItemHorizontal,
  ListItemHorizontalProps,
} from '../../components/ListItemHorizontal/ListItemHorizontal';
import { WeatherListItem } from '../../components/WeatherListItem';
import { useLoggedRoute } from '../../navigation/useRootNavigationRoute';

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
      <WeatherListItem weather={weatherItem} hideArrow />
      <Divider />
    </>
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={listItems}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={renderHeader}
    />
  );
};
