import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
//
// Imoporting Main Screens (Footer navigatables)
//
import NewsfeedScreen from '../../screens/main/Newsfeed';
import OffersScreen from '../../screens/main/Offers';
import MapScreen from '../../screens/main/Map';
import MessagingScreen from '../../screens/main/Messaging';
import NotificationScreen from '../../screens/main/Notification'; 

export const Navigator = createMaterialTopTabNavigator({
    newsfeed: {
        screen: NewsfeedScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-paper" size={24} />
                } else {
                    return <Icon name="ios-paper-outline" size={24} />
                }
            }
        }
    },
    offers: {
        screen: OffersScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-pricetag" size={24} />
                } else {
                    return <Icon name="ios-pricetag-outline" size={24} />
                }
            }
        }
    },
    map: {
        screen: MapScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-pin" size={24} />
                } else {
                    return <Icon name="ios-pin-outline" size={24} />
                }
            }
        }
    },
    message: {
        screen: MessagingScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-chatbubbles" size={24} />
                } else {
                    return <Icon name="ios-chatbubbles-outline" size={24} />
                }
            },
        }
    },
    notification: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return <Icon name="ios-notifications" size={24} />
                } else {
                    return <Icon name="ios-notifications-outline" size={24} />
                }
            }
        }
    }
}, {
    initialRouteName: "newsfeed",
    order: ['newsfeed', 'offers', 'notification', 'message', 'map'],
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