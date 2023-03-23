import React, { useState } from 'react';
import Question from './src/components/Question';
import 'react-native-url-polyfill/auto';
import {Dimensions, ImageBackground, StyleSheet, View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import History from './src/components/History';


function App(): JSX.Element {

  const [history, setHistory] = useState([{"role": "system", "content": "Tu veux quoi ?"}])

  const handleUpdateHistory = (value: {role: string, content: string}) => {
    // y a comme un petit besoin de déterminer laquelle fonctionne ici,
    // pas de doublons dans l'historique, il n'en restera qu'une
    setHistory(prevHistory => [...prevHistory, value]) 
    history.push(value)
  }

  // placer une view qui englobe history pour mettre deux bandes noires sur les côtés
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/assets/dark_space.png')} style={styles.background}>
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
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
});

export default App;
