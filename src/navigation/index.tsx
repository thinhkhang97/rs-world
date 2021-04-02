import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CountryList, CountryDetail, LanguageCountry} from '../screens';
import {Text} from 'react-native';

export enum SCREEN_NAME {
  COUNTRY_LIST = 'COUNTRY',
  LANGUAGE_COUNTRY = 'LANGUAGE',
  COUNTRY_DETAIL = 'COUNTRY DETAIL',
}

const Stack = createStackNavigator();

const config = {
  screens: {
    [SCREEN_NAME.COUNTRY_DETAIL]: 'country/:id',
    [SCREEN_NAME.LANGUAGE_COUNTRY]: 'language/:id',
  },
};

const linking = {
  prefixes: ['https://rnhw.com', 'rnhw://'],
  config,
};

export const Navigator = () => (
  <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    <Stack.Navigator initialRouteName={SCREEN_NAME.COUNTRY_LIST}>
      <Stack.Screen name={SCREEN_NAME.COUNTRY_LIST} component={CountryList} />
      <Stack.Screen
        name={SCREEN_NAME.COUNTRY_DETAIL}
        component={CountryDetail}
      />
      <Stack.Screen
        name={SCREEN_NAME.LANGUAGE_COUNTRY}
        component={LanguageCountry}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
