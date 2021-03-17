import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

// rnfes


const ListScreen = () => {
    // first method for defining key prop
    // const friends = [
    //     {   name: 'Friend #1', key: '1' },
    //     {   name: 'Friend #2', key: '2'  },
    //     {   name: 'Friend #3', key: '3'  },
    //     {   name: 'Friend #4', key: '4'  },
    //     {   name: 'Friend #5', key: '5'  },
    //     {   name: 'Friend #6', key: '6'  },
    //     {   name: 'Friend #7', key: '7'  },
    //     {   name: 'Friend #8', key: '8'  },
    //     {   name: 'Friend #9', key: '9'  },
    // ]

    const friends = [
        {   name: 'Friend #1', age: 20 },
        {   name: 'Friend #2', age: 45 },
        {   name: 'Friend #3', age: 56 },
        {   name: 'Friend #4', age: 99 },
        {   name: 'Friend #5', age: 223 },
        {   name: 'Friend #6', age: 24 },
        {   name: 'Friend #7', age: 19 },
        {   name: 'Friend #8', age: 20 },
        {   name: 'Friend #9', age: 44 },
    ]

  
    return (
       <FlatList 
        horizontal={false} //={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => {
            return friend.name
            // return `${Math.floor(Math.random() * Math.floor(10000))}`
        }}
        data={friends}
        style={styles.flatListStyle} 
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
        //clg element => {item:  {name: 'Friend #1' }, index: 0}
        //can use destructing and just put "item" in callback argument
            //to create direct reference to the instance
        // key prop 
            //allows RN to tie the definition of some particular object of data "friend 5"
            // with some object on the screen
            //performance optimization
        />
    )
}

const styles = StyleSheet.create({
    listItems: {
        fontSize: 30,
        fontStyle: 'italic'
    },
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 20,
        borderRadius:20,
        backgroundColor: 'white',
        overflow: 'hidden' 
    },
    flatListStyle: {
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 50,
        backgroundColor: "black",
        overflow: 'hidden'
    }
})



export default ListScreen



// going to start with an array 
// of anything, any data type
//but always will start with an array 

//going to start with a primitive element called FlatList
// pass two props to FlatList
//props are configuration options we specify when we write a jsx element
    // first  is data
        //pass in array of records
    // second is "renderItem" prop
        // function that will turn each individual item into an element
// FlatList works better than mapping for RN
