import { useState } from "react";
import { FlatList, Text, View } from "react-native"

const History = (props) => {

    return (
        <View>
            {props.history.length > 0 ? (<FlatList
                data={props.history}
                renderItem={({item}) => (
                <View>
                    <Text>{item.content}</Text>
                    <Text>--------------</Text>
                </View>
                )}/>
            ) : ''}
        </View>
    )
}

export default History