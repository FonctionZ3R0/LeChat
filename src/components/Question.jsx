import React, { useState } from 'react'
import {View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Configuration, OpenAIApi } from 'openai'

const Question = ({history, handleUpdateHistory, setIsLoaderVisible}) => {

  const [question, setQuestion] = useState('');
  const [isTouchable, setTouchable] = useState(true);
  const vars = require("../../variables.json")

  const handleApiRequest = async () => {
    try {
      setTouchable(false)
      setIsLoaderVisible(true)
      handleUpdateHistory({"role": "user", "content": question})
      setQuestion('')
      
      const configuration = new Configuration({
          apiKey: vars.REACT_APP_APIKEY
      });

      const openai = new OpenAIApi(configuration);

      const getAnswer = await openai.createChatCompletion({
          model: "gpt-4",
          messages: history,
      })

      if (getAnswer) {
        setIsLoaderVisible(false)
        console.log({"role": getAnswer.data.choices[0].message?.role, "content": getAnswer.data.choices[0].message?.content})
        handleUpdateHistory({"role": getAnswer.data.choices[0].message?.role, "content": getAnswer.data.choices[0].message?.content})
        setTouchable(true)
      }
    } catch (error) {
      if (error.message.split(" ").pop() == '401') {
        handleUpdateHistory({"role": "system", "content": 'Il y a un problème d\'autorisation, tu devrais contacter Donovan.'})
      } else if (error.message.split(" ").pop() == '429') {
        handleUpdateHistory({"role": "system", "content": 'Il y a un problème :\n- Soit Donovan n\'a pas payé\n- Soit tu envoies' +
        ' tes questions trop vite, si c\'est le cas relax\n- Soit les serveurs sont surchargés\n\nQuoi qu\'il en soit, réessaie dans quelques instants.'})
      } else if (error.message.split(" ").pop() == '500') {
        handleUpdateHistory({"role": "system", "content": 'Les serveurs de ChatGPT ont un problème, réessaie plus tard.'})
      }
      setTouchable(true)
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setQuestion} value={question} placeholder="Hmmm..."/>
      <TouchableOpacity onPress={handleApiRequest} style={styles.send} disabled={!isTouchable || question == ''}>
        <Image source={require('../assets/question.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  send: {
    backgroundColor: '#3770CC',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingRight: 6,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default Question