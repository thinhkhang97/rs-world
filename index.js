import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider as ReduxProvider} from 'react-redux';
import {SCREEN_NAME} from './src/navigations';
import {CountryList, LanguageCountry, CountryDetail} from './src/screens';

import {store} from './src/store';

const includeProvider = (Component, props) => (
  <ReduxProvider store={store}>
    <Component {...props} />
  </ReduxProvider>
);

Navigation.registerComponent(SCREEN_NAME.MAIN, () => props =>
  includeProvider(CountryList, props),
);
Navigation.registerComponent(SCREEN_NAME.COUNTRY_DETAIL, () => CountryDetail);
Navigation.registerComponent(
  SCREEN_NAME.LANGUAGE_COUNTRY,
  () => LanguageCountry,
);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREEN_NAME.MAIN,
              options: {
                topBar: {
                  title: {
                    text: 'Countries',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
