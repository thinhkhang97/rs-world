import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CountryList, CountryDetail, LanguageCountry} from '../screens';

const Stack = createStackNavigator();

export enum SCREEN_NAME {
  COUNTRY_LIST = 'COUNTRY',
  LANGUAGE_COUNTRY = 'LANGUAGE',
  COUNTRY_DETAIL = 'COUNTRY DETAIL',
}

export const Navigator = () => (
  <NavigationContainer>
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
