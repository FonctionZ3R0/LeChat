import React, { useState } from 'react'
import {Text, View, Button, TextInput, FlatList} from 'react-native'
import { Configuration, OpenAIApi } from 'openai'

const Question = ({history, handleUpdateHistory}) => {

    const [question, setQuestion] = useState('');
    const vars = require("../../variables.json")

    const handleApiRequest = async () => {
      try {
        handleUpdateHistory({"role": "user", "content": question})
        
        const configuration = new Configuration({
            apiKey: vars.REACT_APP_APIKEY,
            organization: vars.REACT_APP_ORGANIZATION,
        });

        const openai = new OpenAIApi(configuration);

        const getAnswer = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: history,
            max_tokens: 1000,
        })

        if (getAnswer) {
          handleUpdateHistory({"role": getAnswer.data.choices[0].message?.role, "content": getAnswer.data.choices[0].message?.content})
        }
      } catch (error) {
        console.error(error)
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