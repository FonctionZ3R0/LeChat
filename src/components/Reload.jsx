import { View, TouchableOpacity, Image, StyleSheet } from "react-native"

const Reload = ({setHistory}) => {

    const reloadHistory = () => {
        setHistory([{"role": "system", "content": "Tu veux quoi ?"}])
    }

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={reloadHistory}>
            <Image source={require('../assets/reloading.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3770CC',
        alignSelf: 'flex-end',
        marginBottom: 5,
        padding: 10,
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

export default Reload