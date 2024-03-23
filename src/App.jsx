// App.js
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import {store} from './store';
import FootballMatchList from './FootballMatchList';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">
          <FootballMatchList />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;