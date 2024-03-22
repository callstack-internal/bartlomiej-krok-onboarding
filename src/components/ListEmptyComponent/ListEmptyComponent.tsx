import { StyleSheet, Text, View } from 'react-native';

export const ListEmptyComponent = () => {
  return (
    <View testID={'test-ListEmptyComponent'} style={styles.container}>
      <Text style={styles.text}>No items on list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
