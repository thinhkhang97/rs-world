import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {ICountry} from '../types/country';
import {COLOR} from '../assets/themes';
import {SCREEN_NAME} from '../navigations';

export const CountryDetail: NavigationFunctionComponent<ICountry> = props => {
  const {name, captital, population, imageUrl, languages} = props;
  const handlePressLanguage = (name: string) => {
    Navigation.push(props.componentId, {
      component: {name: SCREEN_NAME.LANGUAGE_COUNTRY, passProps: {name}},
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>Capital</Text>
          <Text>{captital}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Population</Text>
          <Text>{population}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Languages</Text>
          <View style={styles.language}>
            {languages.map((l: string) => (
              <TouchableOpacity key={l} onPress={() => handlePressLanguage(l)}>
                <Text style={styles.languageItem}>{l}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.CYAN,
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    padding: 16,
  },
  name: {
    color: COLOR.MEGENTA,
    fontSize: 24,
    fontWeight: '700',
  },
  image: {
    width: 120,
    height: 120,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
  },
  language: {
    width: '50%',
    alignItems: 'flex-end',
  },
  languageItem: {
    color: COLOR.MEGENTA,
  },
});
