import React, {useCallback} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {ICountry} from '../types/country';
import {COLOR} from '../assets/themes';

interface Props {
  data: ICountry;
  onPress?: (data: ICountry) => void;
}

export const CountryItem: React.FC<Props> = ({data, onPress}) => {
  const {imageUrl, name, captital} = data;
  const handleSelectCountry = useCallback(() => {
    onPress && onPress(data);
  }, [data]);
  return (
    <TouchableOpacity onPress={handleSelectCountry}>
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{captital}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR.BLACK,
    padding: 8,
    margin: 16,
    borderRadius: 8,
  },
  image: {
    width: 48,
    height: 48,
  },
  contentContainer: {
    marginLeft: 8,
  },
  title: {
    color: COLOR.WHITE,
    fontSize: 16,
  },
  subTitle: {
    color: COLOR.WHITE,
    fontSize: 14,
  },
});
