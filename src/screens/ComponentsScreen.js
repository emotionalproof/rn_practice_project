import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


// <Text> is a primitive react element
// View: general purpose element used for grouping other elements or styling
// Image, Button


const ComponentsScreen = () => {
    const name = "Chase"

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            {/* in this context, style is a prop that we are passing to the text */}
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    )
}


//using stylesheet will show and error instead of a warning if your styling is incorrect
//immediate validation 
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: "violet"
    },
    subHeaderStyle: {
        fontSize: 20,
        color: "purple",
        alignSelf: "center",
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 10,
        borderRadius: 20,
        padding: 20,
        
        
    }
})

export default ComponentsScreen