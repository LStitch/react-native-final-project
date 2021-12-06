import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Contacto2Screen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Aquí reside el contacto #2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});