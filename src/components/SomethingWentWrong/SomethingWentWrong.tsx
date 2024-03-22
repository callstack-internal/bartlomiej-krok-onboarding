import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  retry: () => void;
}

export const SomethingWentWrong = (props: Props) => {
  const { retry } = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Something went wrong.</Text>
      </View>
      <Text>Please try again later or contact support. </Text>
      <Button title={'Retry'} onPress={retry} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
