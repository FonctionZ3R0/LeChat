import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"

const History = (props) => {

    return (
        <View>
            {props.history.length > 0 ? (<FlatList
                data={props.history}
                renderItem={({item}) => (
                <View>
                    {item.role == 'system' || item.role == 'assistant' ?
                    (<View style={styles.iaBubble}>
                        <Text style={styles.iaText}>{item.content}</Text>
                        <View style={styles.leftArrow}></View>
                        <View style={styles.leftArrowOverlap}></View>
                    </View>)
                    : 
                    (<View style={styles.myBubble}>
                        <Text style={styles.myText}>{item.content}</Text>
                        <View style={styles.rightArrow}></View>
                        <View style={styles.rightArrowOverlap}></View>
                    </View>)
                }
                </View>
                )}/>
            ) : ''}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    iaBubble: {
        backgroundColor: "#dedede",
        padding:10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '70%',
        alignSelf: 'flex-start',
        //maxWidth: 500,
        //padding: 14,
        //alignItems:"center",
        borderRadius: 13,
        marginBottom: 8,
    },
    myBubble: {
        backgroundColor: "#0078fe",
        padding:10,
        borderRadius: 13,
        //marginBottom: 15,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '70%',
        alignSelf: 'flex-end',
        marginBottom: 8,
        //maxWidth: 500,
    },
    iaText: {
        fontSize: 16, 
        color: "#000",
        justifyContent:"center"
    },
    myText: {
        fontSize: 16, 
        color: "#fff",
        justifyContent:"center"
    },
    rightArrow: {
        position: "absolute",
        backgroundColor: "#0078fe",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },
    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "#000",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20
    },
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },
    leftArrowOverlap: {
        position: "absolute",
        opacity: 1,
        backgroundColor: "#000",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    },
})

export default History