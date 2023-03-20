/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import Question from './src/components/Question';
import 'react-native-url-polyfill/auto';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import History from './src/components/History';


function App(): JSX.Element {

  const [history, setHistory] = useState([])

  return (
    <View
      style={{
        backgroundColor: Colors.dark,
      }}>
      <History history={history}/>
      <Question history={history} setHistory={setHistory}/>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '600',
  },
});

export default App;
