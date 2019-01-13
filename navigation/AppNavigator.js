import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Greetings_Screen from '../screens/Greetings_Screen';
import Aboutme_Screen from '../screens/Aboutme_Screen';
import {Icon} from 'react-native-elements';



const GreetingsStack = createStackNavigator(
    {
        Greetings: Greetings_Screen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#cf580e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign:"center", 
                flex:1 
            }
            
            }
    }
);

GreetingsStack.navigationOptions={
    tabBarIcon: ({ focused,tintColor }) =>
    (
        <Icon 
        name='hand-paper-o'
        type='font-awesome'
        color='#cf580e' 
        />
    )
};

    


const InfoAboutMeStack = createStackNavigator(
    {
        'About Developer': Aboutme_Screen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#6b52ae',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign:'center', 
                flex:1 
            },
        },
    }
);

InfoAboutMeStack.navigationOptions ={
    tabBarIcon: ({ focused,tintColor }) =>
    (
        <Icon 
        name='user-circle'
        type='font-awesome'
        color='#6b52ae' 
        />
    )
}

export default createAppContainer(createBottomTabNavigator(
    {
        Greetings: GreetingsStack,
        'About Developer': InfoAboutMeStack
    }
));