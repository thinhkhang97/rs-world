import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Provider as ReduxProvider} from 'react-redux';
import {client} from './src/graphql';
import {store} from './src/store';
import {Navigator} from './src/navigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <Navigator />
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
