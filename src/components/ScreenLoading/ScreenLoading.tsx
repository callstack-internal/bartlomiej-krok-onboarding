import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const ScreenLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator testID={'test-ScreenLoading'} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
