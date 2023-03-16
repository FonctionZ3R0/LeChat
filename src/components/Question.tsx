import React, { useState } from 'react'
import {Text, View, Button} from 'react-native'

const Question = () => {

    const [response, setResponse] = useState('');

    const handleApiRequest = async () => {
        try {
            const apiKey = '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';
            const prompt = 'Write a recipe';
            const engine = 'davinci';
            const apiUrl = `https://api.openai.com/v1/engines/${engine}/completions`;
            const requestOptions = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 100,
                n: 1,
                stop: ['\n'],
            })
            };
            const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) {
            console.log(response)
            throw new Error('API request failed');
        }
        const data = await response.json();
        if (!data.choices || !data.choices.length) {
            throw new Error('No completion choices available');
        }
        const text = data.choices[0].text;
        if (!text) {
            throw new Error('Completion text is undefined');
        }
        setResponse(text);
        } catch (error) {
            console.error(error);
        }
    };
  
    return (
      <View>
        <Button title="Make API Request" onPress={handleApiRequest} />
        <Text>{response}</Text>
      </View>
    );
  };

export default Question