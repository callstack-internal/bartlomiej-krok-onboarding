import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../theme/constants';

export const ChevronRight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>&#8250;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 16,
  },
  icon: {
    fontSize: 36,
    color: Colors.gray,
  },
});
