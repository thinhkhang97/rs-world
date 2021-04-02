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

export const LanguageCountry: React.FC = () => {
  const dispatch = useDispatch();
  const [language] = useSelector(selectLanguages);
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    if (route.params) {
      const {id} = route.params as {id: string};
      dispatch(getLanguageByIdAction(id));
    }
  }, []);

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
