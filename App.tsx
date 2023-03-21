import React, { useState } from 'react';
import Question from './src/components/Question';
import 'react-native-url-polyfill/auto';
import {ImageBackground, StyleSheet, View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import History from './src/components/History';


function App(): JSX.Element {

  const [history, setHistory] = useState([{"role": "system", "content": "Sur quoi se porte ta curiosité aujourd'hui ?"}])

  const handleUpdateHistory = (value: {role: string, content: string}) => {
    // setHistory(prevHistory => [...prevHistory, value]) mon cul ta fonction de copie de mort qui copie R
    setHistory(prevHistory => [...prevHistory, value])
    history.push(value)
  }

  const img = {uri: 'https://w0.peakpx.com/wallpaper/82/215/HD-wallpaper-cartoon-dark-black-simple-thumbnail.jpg'}

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.history}>
        <History history={history}/>
      </ImageBackground>
      <Question history={history} handleUpdateHistory={handleUpdateHistory}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.dark,
  },
  history: {
    flex: 5
  },
  question: {
    flex: 1
  },
});

export default App;
