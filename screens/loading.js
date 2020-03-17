import React, { useState, useEffect, Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ActivityIndicator } from 'react-native'
import Home from './home'
import axios from 'axios';




// type Props = {};

// export default function loading({ navigation }) {


//     const [Loading, setloading] = useState(false);

//     //   const [offline, setOffline] = useState(false);



//     useEffect(() => {
//         saveData();
//         setInterval(() => {
//             navigation.navigate('Home')
//         }, 7000)

//     }, [])

//     const saveData = () => {
//         setloading(false);
//         // setOffline(false);
//         axios.get('https://my-json-server.typicode.com/DoaaWael/ReactNative/TodoList')
//             .then((res => {
//                 setloading(true);
//                 AsyncStorage.setItem('TodoList', JSON.stringify(res.data));
//             })
//             ).catch(error => { console.log(error + "Error"), setOffline(true) });

//     }

//     return (

//         <View style={styles.container}>
//             <Image style={styles.loadingImage} source={require('../assets/Loading.gif')} />
//         </View >


//     );
// }

export default class Welcome extends Component {

    constructor() {
        super();
    }


    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.loadingImage} source={require('../assets/Loading.gif')} />
            </View >
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }, loadingImage: {
        borderColor: '#fff',
        width: 200,
        height: 200,

    },

})
