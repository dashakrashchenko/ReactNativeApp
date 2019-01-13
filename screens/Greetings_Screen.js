import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class GreetingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Greetings',
        /* No more header config here! */
      };
    render(){
        return(
            <View style={styles.WelcomeContainer}>
                <Text style={styles.titleText}>
                    Welcome!
                </Text>
                <Image 
                source={require('../assets/images/welcome_robot.jpg')} 
                style={{width: 210, height: 210}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        WelcomeContainer: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center', 
        },
        titleText: {
            fontWeight: 'bold',
            fontSize: 40,
            fontFamily: 'Roboto'
        }

    }
);