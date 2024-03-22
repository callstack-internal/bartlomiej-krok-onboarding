import { StyleSheet, View } from 'react-native';

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#ddd',
    height: 1,
    width: '100%',
  },
});
