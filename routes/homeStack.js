import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='MyTodo' />
            }

        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ReviewDetails',
        }
    },

}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
            height: 70,
            backgroundColor: 'coral',
        }

    }
})

export default HomeStack;