import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigator';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Navigator />
    </>
  );
};
export default App;
