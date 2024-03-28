import {
  ActivityIndicator,
  Alert,
  PermissionsAndroid,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useLocation } from 'src/hooks/location/useLocation.ts';
import { Colors } from 'src/theme/constants.ts';

export const UserWeatherHeader = () => {
  const { cords, cordsIsLoading, refreshCurrentPermission } = useLocation();
  const showPlaceholder = !cords || cordsIsLoading;
  const onPress = async () => refreshCurrentPermission(fetchWeatherForCords);

  const fetchWeatherForCords = async () => {};

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {cordsIsLoading && (
          <View>
            <ActivityIndicator />
          </View>
        )}
        {cords && (
          <>
            <Text style={styles.label}>asd</Text>
            <Text style={styles.value}>asd</Text>
          </>
        )}
        {showPlaceholder && <Text>Empty state</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  value: {
    fontSize: 16,
    color: Colors.gray,
  },
});
