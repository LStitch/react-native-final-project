import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Image} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://i.ytimg.com/vi/4lbWmxtrUTY/maxresdefault.jpg'}}
                style={{width: 350, height: 200}}/>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Helado?</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  