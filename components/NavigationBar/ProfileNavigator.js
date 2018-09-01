import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';


import InfoScreen from '../../screens/Profile/InfoScreen';
import PostsScreen from '../../screens/Profile/PostsScreen';
import {FriendsNavigator} from './FriendsNavigator';
import ProvidersScreen from '../../screens/Profile/ProvidersScreen';


export const ProfileNavigator = createMaterialTopTabNavigator({
    info: {
        screen: InfoScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-contact" size={24} />
                } else {
                    return <Icon name="ios-contact-outline" size={24} />
                }
            }
        }
    },
    posts: {
        screen: PostsScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-list-box" size={24} />
                } else {
                    return <Icon name="ios-list-box-outline" size={24} />
                }
            }
        }
    },
    providers: {
        screen: ProvidersScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-restaurant" size={24} />
                } else {
                    return <Icon name="ios-restaurant-outline" size={24} />
                }
            }
        }
    },
    friends: {
        screen: FriendsNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-people" size={24} />
                } else {
                    return <Icon name="ios-people-outline" size={24} />
                }
            },
        }
    }
}, {
    initialRouteName: "info",
    order: ['info', 'posts', 'providers', 'friends'],
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: '#fff',
            borderTopColor: 'rgba(25,25,25,0.1)',
            borderTopWidth: 1
        },
        indicatorStyle: {
            top: 0,
            backgroundColor: '#252525'
        }
    }
});