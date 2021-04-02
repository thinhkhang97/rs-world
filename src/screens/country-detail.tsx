import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ICountry} from '../types/country';
import {COLOR} from '../assets/themes';
import {SCREEN_NAME} from '../navigation';
import {useRoute, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const CountryDetail: React.FC = props => {
  const route = useRoute();
  const [data, setData] = useState<ICountry>();
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    if (route.params) {
      setData(route.params as ICountry);
    }
  }, []);

  if (!data) {
    return (
      <SafeAreaView>
        <Text>No data</Text>
      </SafeAreaView>
    );
  }

  const {name, captital, population, imageUrl, languages} = data;
  const handlePressLanguage = (id: string) => {
    navigation.push(SCREEN_NAME.LANGUAGE_COUNTRY, {id});
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
            {languages.map(({name, id}) => (
              <TouchableOpacity
                key={id}
                onPress={() => handlePressLanguage(id)}>
                <Text style={styles.languageItem}>{name}</Text>
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
