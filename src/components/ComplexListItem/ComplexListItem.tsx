import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { ChevronRight, Chip } from 'src/components';
import { Colors } from 'src/theme/constants';

interface Props {
  id: string;
  imageUri?: string;
  title?: string;
  subtitle?: string;
  labelText?: string;
  onPress?: () => void;
  hideArrow?: boolean;
}

export const ComplexListItem = (props: Props) => {
  const { imageUri, labelText, title, subtitle, onPress, hideArrow, id } =
    props;

  const Component = onPress ? Pressable : View;

  return (
    <Component
      testID={`test-ComplexListItem-${id}`}
      onPress={onPress}
      style={styles.itemWrapper}
    >
      <View style={styles.imageWrapper}>
        {!!imageUri && (
          <Image
            style={styles.image}
            source={{
              uri: imageUri,
            }}
          />
        )}
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {!!labelText && <Chip label={labelText} />}
      </View>

      <View style={styles.iconRight}>
        {hideArrow ? <View style={styles.iconPlaceholder} /> : <ChevronRight />}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontWeight: 'bold',
    color: Colors.gray,
  },
  iconRight: {
    paddingLeft: 8,
    paddingRight: 16,
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 16,
    height: 36,
  },
});
