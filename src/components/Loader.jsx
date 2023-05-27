import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = ({isLoaderVisible}) => {

    return (
        <View>
            {isLoaderVisible ?
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#D62727" />
            </View>
            : ''}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
});

export default Loader