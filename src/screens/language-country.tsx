import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {useSelector, useDispatch} from 'react-redux';
import {selectLanguages} from '../selectors/language';
import {getLanguageByNameAction} from '../actions/language';
import {ICountry} from '../types/country';
import {COLOR} from '../assets/themes';
import {SCREEN_NAME} from '../navigations';

export const LanguageCountry: NavigationFunctionComponent<{
  name: string;
}> = props => {
  const {name} = props;
  const dispatch = useDispatch();
  const [language] = useSelector(selectLanguages);

  useEffect(() => {
    dispatch(getLanguageByNameAction(name));
  }, []);

  const handlePressCountry = (c: ICountry) => {
    Navigation.push(props.componentId, {
      component: {name: SCREEN_NAME.COUNTRY_DETAIL, passProps: c},
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
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
