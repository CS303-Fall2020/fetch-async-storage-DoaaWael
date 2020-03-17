import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, FlatList, AsyncStorage } from 'react-native';
import Home from './screens/home'
import Sandbox from './components/sandbox';
// import TodoItems from '../components/todoItems'


export default function LoadingHome() {

    const [bool, setloading] = useState(false);
    const [todos, setTodoes] = useState([]);

    const displayData = async () => {
        setloading(false);
        axios.get('https://my-json-server.typicode.com/DoaaWael/ReactNative/TodoList')
            .then((res => {
                setloading(true);
                AsyncStorage.setItem('TodoList', JSON.stringify(res.data));
            })
            ).catch(error => { console.log(error + "Error") });
        try {
            let todoList = await AsyncStorage.getItem('TodoList');
            setTodoes(JSON.parse(todoList));
            console.log(todos);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <View onPress={displayData()}>
            {bool ? <Sandbox /> : <Home />}
        </View>

    );
}
