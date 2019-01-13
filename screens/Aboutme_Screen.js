import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';



export default class InfoAboutMe extends React.Component{
    static navigationOptions = {
        title: 'Info about developer',
        
        /* No more header config here! */
      };
    render(){
        return(
            <View style={styles.AboutMeContainer}>
                <Text style={styles.InfoAboutMe}>{`
                Hi,
                My name is Daria Krashchenko. I'm student of third grade in Lviv Polytechnic University.
                My faculty is Cybersecurity. I'm fond of coding, cooking and travelling.
                In the future, I'd like to be Full Stack .Net Developer.

                `}
                </Text>
                <Image 
                source={require('../assets/images/myphoto.jpeg')} 
                style={{width: 300, height: 400}}
                />
            </View>
        )

        }
    }

    const styles = StyleSheet.create(
        {
            AboutMeContainer: {
                flex:1,
                alignItems: 'center',
                padding: 30
            },
            InfoAboutMe: {
                fontSize:15,
                fontFamily: 'serif',

            }
        }
    );
