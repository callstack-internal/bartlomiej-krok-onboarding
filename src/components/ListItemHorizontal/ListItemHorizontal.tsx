import { StyleSheet, Text, View } from 'react-native';

import { Colors } from 'src/theme/constants';

export interface ListItemHorizontalProps {
  label: string;
  value: string;
}

export const ListItemHorizontal = (props: ListItemHorizontalProps) => {
  const { label, value } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
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
