import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import Home from './home'
import axios from 'axios';





export default function loading({navigation}) {


    const [Loading, setloading] = useState(false);

    //   const [offline, setOffline] = useState(false);



    useEffect(() => {
        saveData();
        setInterval(()=>{2000})
        // navigation.navigate('home'), 2000)
        
    }, [])

    const saveData = () => {
        setloading(false);
        // setOffline(false);
        axios.get('https://my-json-server.typicode.com/DoaaWael/ReactNative/TodoList')
            .then((res => {
                setloading(true);
                AsyncStorage.setItem('TodoList', JSON.stringify(res.data));
            })
            ).catch(error => { console.log(error + "Error"), setOffline(true) });

    }

    return (

        <View style={styles.container}>

            {!Loading ? (<View><Text>loading..</Text></View>) : (navigation.navigate('Home'))}
        </View >


    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        paddingTop: 20,
        flex: 1,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 120,
    },
    offline: {
        padding: 14,
        backgroundColor: '#ddd',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    }


})
