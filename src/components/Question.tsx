import React, { useState } from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import { Configuration, OpenAIApi } from 'openai';

const Question = () => {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const apiKey = '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';
    const organization = 'org-ohBgHBDm8dN5nZCiRYIsCq5n';

    const handleApiRequest = async () => {
         try {
            const configuration = new Configuration({
                apiKey: apiKey,
                organization: organization,
            });
            const openai = new OpenAIApi(configuration);
            
            const getAnswer = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{"role": "user", "content": question}],
                max_tokens: 100,
            })

        if (getAnswer) {
            setResponse(getAnswer.data.choices[0].message?.content)
        }
        } catch (error) {
            console.error(error);
        }
    };
  
    return (
      <View>
        <Text>{response}</Text>
        <TextInput onChangeText={setQuestion} value={question} placeholder="Une question pour LeChat"/>
        <Button title="Make API Request" onPress={handleApiRequest} />
      </View>
    );
  };

export default Question