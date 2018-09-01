import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 


export const NotificationComponent = (props) =>{
    let readReminder = null;
    
    if(props.isRead === false){
        readReminder = (<Icon color='#e8232d' name='ios-alert' size={24}/>);
    }
    
    return(
        <View style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(25,25,25,0.2)',
        }}>
            <Image 
                source={{uri: props.image}}
                style={{
                    resizeMode: 'contain', 
                    height: 60,
                    width: 60,
                    margin: 10
                }}
            />
            <View style={{
                flex: 1
            }}>
                <Text style={{
                        fontSize: 18,
                        marginLeft: 10,
                        marginTop: 10,
                        fontWeight: 'bold',
                        color: '#252525'
                    }}>
                        {props.title}
                </Text>
                <View 
                    style={{
                        flex: 1,
                        marginTop: 2,
                        marginBottom: 5
                        // justifyContent: 'center',
                    }}
                >
                    <Text style={{
                        marginLeft: 10,
                        marginBottom: 2
                    }}>
                        {props.text}
                    </Text>
                </View>
            </View>
            <View style={{
                justifyContent: 'center',
                marginRight: 10,
                marginLeft: 5
            }}>
                {readReminder}
            </View>
        </View>
    )
} 