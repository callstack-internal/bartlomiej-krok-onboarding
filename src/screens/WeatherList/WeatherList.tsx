import { useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import { ListEmptyComponent } from '../../components/ListEmptyComponent';
import { ScreenLoading } from '../../components/ScreenLoading';
import { SomethingWentWrong } from '../../components/SomethingWentWrong';
import { WeatherListItem } from '../../components/WeatherListItem';
import { useRefreshing } from '../../hooks/useRefreshing';
import { Screens } from '../../navigation/routes.types';
import { useRootNavigation } from '../../navigation/useRootNavigation';
import { weatherCityIds } from '../../network/constants/data/weatherCityIds';
import { useWeatherListQuery } from '../../network/queries/weather/getWeatherListQuery';
import { WeatherItem } from '../../network/queries/weather/weather.types';

export const WeatherList = () => {
  const { navigate } = useRootNavigation();
  const { error, data, isLoading, refetch } =
    useWeatherListQuery(weatherCityIds);
  const { refreshing, handleRefresh } = useRefreshing(refetch);

  const onItemPress = useCallback(
    (item: WeatherItem) => {
      navigate(Screens.WEATHER_DETAILS, { item });
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<WeatherItem>) => {
      return <WeatherListItem item={item} onPress={onItemPress} />;
    },
    [onItemPress],
  );

  const keyExtractor = useCallback(
    (item: WeatherItem) => item.id.toString(),
    [],
  );

  if (isLoading && !data) {
    return <ScreenLoading />;
  }

  if (error) {
    return <SomethingWentWrong retry={refetch} />;
  }

  return (
    <FlatList
      data={data}
      ListEmptyComponent={ListEmptyComponent}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      contentContainerStyle={styles.container}
      keyExtractor={keyExtractor}
      // ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
