import { useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import {
  ComplexListItem,
  Divider,
  ListEmptyComponent,
  ScreenLoading,
  SomethingWentWrong,
} from 'src/components';
import { UserWeatherHeader } from 'src/components/UserWeatherHeader';
import { useRefreshing } from 'src/hooks/useRefreshing';
import { Screens } from 'src/navigation/routes.types';
import { useRootNavigation } from 'src/navigation/useRootNavigation';
import { weatherCityIds } from 'src/network/constants/data/weatherCityIds';
import { useWeatherListQuery } from 'src/network/queries/weather/getWeatherListQuery';
import { WeatherItem } from 'src/network/queries/weather/weather.types';

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
      return (
        <ComplexListItem
          id={item.id}
          title={item.cityName}
          subtitle={item.weatherDescription}
          imageUri={item.imageUri}
          labelText={item.temp}
          onPress={() => onItemPress(item)}
        />
      );
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
      testID={'test-WeatherList'}
      data={data}
      ListHeaderComponent={UserWeatherHeader}
      ListEmptyComponent={ListEmptyComponent}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      contentContainerStyle={styles.container}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
