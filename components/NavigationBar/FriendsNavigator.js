import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import FollowersScreen from '../../screens/Profile/FollowersScreen';
import FollowingScreen from '../../screens/Profile/FollowingScreen';


export const FriendsNavigator = createMaterialTopTabNavigator({
    followers: {
        screen: FollowersScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-contact" size={24} />
                } else {
                    return <Icon name="ios-contact-outline" size={24} />
                }
            },
            tabBarLabel: 'Followers'
        },
    },
    following: {
        screen: FollowingScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-people" size={24} />
                } else {
                    return <Icon name="ios-people-outline" size={24} />
                }
            },
            tabBarLabel: 'Following'
        }
    },
}, {
    initialRouteName: "followers",
    order: ['followers', 'following'],
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        style: {
            backgroundColor: '#fff',
            borderBottomColor: 'rgba(25,25,25,0.1)',
            borderBottomWidth: 1,
            top: 24
        },
        indicatorStyle: {
            backgroundColor: '#252525'
        },
        activeTintColor : '#252525',
        inactiveTintColor: '#7a7a7a'
    }
});