import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {selectLanguages} from '../selectors/language';
import {getLanguageByIdAction} from '../actions/language';
import {ICountry} from '../types/country';
import {COLOR} from '../assets/themes';
import {SCREEN_NAME} from '../navigation';
import {useRoute, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ILanguage} from '../types/language';

export const LanguageCountry: React.FC = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [language, setLanguage] = useState<ILanguage>();
  const id = route.params ? (route.params as any).id : '0';
  const [foundLanguage] = languages.filter(l => l.id === id);
  useEffect(() => {
    if (foundLanguage) {
      setLanguage(foundLanguage);
    } else {
      dispatch(getLanguageByIdAction(id));
    }
  }, [id, languages, foundLanguage, language]);

  const handlePressCountry = (c: ICountry) => {
    navigation.push(SCREEN_NAME.COUNTRY_DETAIL, c);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{language ? language.name : ''}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Countries</Text>
          {language ? (
            <View>
              {language.countries.map((c: ICountry) => (
                <TouchableOpacity
                  key={c.id}
                  onPress={() => handlePressCountry(c)}>
                  <Text style={styles.country}>{c.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLOR.CYAN,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  row: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '700',
  },
  country: {
    textAlign: 'right',
  },
});
