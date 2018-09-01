import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HeaderTitle from '../Header/Header';

export const MessageHeader = (props) => {
    return(
        <View>
            <HeaderTitle 
                    left = {(
                        <View style={{flexDirection : 'row', alignItems: 'center'}}>
                            <Icon name="ios-arrow-back" style={{color: '#252525'}} size={30}/>
                            <Text style={{
                                color: '#252525',
                                fontSize: 22,
                                marginLeft: 10
                            }}>
                                Back
                            </Text>
                        </View>
                    )}
                    center = {
                        (<View 
                            style={{
                                flexDirection: 'row', 
                                justifyContent: 'center',
                                alignItems: 'center'
                                }}
                        >
                            <View style={{alignItems: 'center'}}>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#252525',
                                }}>
                                    {props.firstName + ' ' + props.lastName}
                                </Text>
                                <Text style={{
                                    color: '#7a7a7a',
                                }}>
                                    {props.userName}
                                </Text>
                            </View>
                        </View>)
                    }
                    right={
                        <Image 
                                source={{uri : props.profileImage}}
                                style={{
                                    resizeMode: 'contain',
                                    height: 30, 
                                    width:30
                                }}
                            />
                    }
            />
        </View>
    )
}