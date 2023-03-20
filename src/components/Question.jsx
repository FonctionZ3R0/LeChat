import React, { useState } from 'react'
import {Text, View, Button, TextInput, FlatList} from 'react-native'
import { Configuration, OpenAIApi } from 'openai'

const Question = (props) => {

    const [question, setQuestion] = useState('');

    const vars = require("../../variables.json")

    var tryMe = [props.history]

    const handleApiRequest = async () => {
      try {
        console.log('before', props.history)
        props.setHistory(history => [
          ...history,
          {"role": "user", "content": question}
        ])
        console.log('in', props.history)
        const configuration = new Configuration({
            apiKey: vars.REACT_APP_APIKEY,
            organization: vars.REACT_APP_ORGANIZATION,
        });
        const openai = new OpenAIApi(configuration);
        const getAnswer = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: props.history,
            max_tokens: 1000,
        })

        if (getAnswer) {
            props.setHistory(history => [
              ...history,
              {"role": "user", "content": question},{"role": getAnswer.data.choices[0].message?.role, "content": getAnswer.data.choices[0].message?.content}
            ])
        }
        console.log('after', props.history)
      } catch (error) {
          console.error(error);
      }
    };
  
    return (
      <View>
        <TextInput onChangeText={setQuestion} value={question} placeholder="Hmmm..."/>
        <Button title="Make API Request" onPress={handleApiRequest} />
      </View>
    );
  };

export default Question