import { View, Text, StyleSheet } from 'react-native';

import { Colors } from 'src/theme/constants';

interface Props {
  label: string;
}

export const Chip = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    height: 30,
  },
  text: {
    fontSize: 14,
    color: Colors.white,
  },
});
