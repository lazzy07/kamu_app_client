import {createDrawerNavigator, DrawerItems} from "react-navigation";
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
//
//Import drawer screens
//
import ProfileScreen from "../../screens/drawer/Profile";
import ChangeLocationScreen from "../../screens/drawer/ChangeLocation";
import SettingsScreen from "../../screens/drawer/Settings";
import {Navigator} from '../NavigationBar/Navigator';
import {ProfileNavigator} from '../NavigationBar/ProfileNavigator';
import {MessageStack} from '../Stacks/MessageStack';

//Import View and Stuff
import {View, Image, Text} from 'react-native';
import { StartNavigator } from "../NavigationBar/StartNavigator";

const styles = {
    imageStyles: {
        resizeMode: 'contain',
        height: 70,
        width: 100
    },
    containerStyles: {
        marginTop: 20,
        height: "100%",
        width: 280
    },
    kamu: {
        resizeMode: 'contain',
        height: 70,
        width: 90,
    },
    imgCont:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    logoContent: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    nameTxt: {
        fontSize: 12,
        marginRight: 10,
        color: '#252525'
    },
    idTxt:{
        fontSize: 10,
        marginRight: 10,
        color: '#7a7a7a'
    }
}

const CustomDrawerStuff = (props) => (
    <View style={styles.containerStyles}>
        <View style={styles.imgCont}>
            <Image 
                style={styles.kamu} 
                source={require('../../icons/logo/kamu_logo_small.png')}
            />
        </View>
        
        <DrawerItems {...props}/>
        <View style={styles.logoContent}>
            <Image 
                source={require('../../icons/logo/cyborg_studios_logo.png')} 
                style={styles.imageStyles}
            />
            <Text style={styles.nameTxt}>Created by Lasantha M Senanayake</Text>
            <Text style={styles.idTxt}>@lazzy07</Text>
        </View>
    </View>
)


export const Drawer = createDrawerNavigator({
    profile: {
        screen: ProfileNavigator,
        navigationOptions:{
            drawerLabel: 'Profile',
            drawerIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return <Icon name="ios-contact" color={tintColor} size={24} />
                } else {
                    return <Icon name="ios-contact-outline" color={tintColor} size={24} />
                }
            }
        }
    },
    location: {
        screen: ChangeLocationScreen,
        navigationOptions:{
            drawerLabel: 'Change Location',
            drawerIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return <Icon name="ios-pin" color={tintColor} size={24} />
                } else {
                    return <Icon name="ios-pin-outline" color={tintColor} size={24} />
                }
            },
        }
    },
    settings: {
        screen: SettingsScreen,
        navigationOptions:{
            drawerLabel: 'Settings',
            drawerIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return <Icon name="ios-settings" color={tintColor} size={24} />
                } else {
                    return <Icon name="ios-settings-outline" color={tintColor} size={24} />
                }
            }
        }
    },
    home: {
        screen: Navigator,
        navigationOptions:{
            drawerLabel: 'Home',
            drawerIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return <Icon name="ios-home" color={tintColor} size={24} />
                } else {
                    return <Icon name="ios-home-outline" color={tintColor} size={24} />
                }
            }
        }
    },
    messageScreen: {
        screen: MessageStack,
        navigationOptions:{
            drawerLabel: 'Message',
        }
    },
},{
    initialRouteName : 'home',
    order : ['home','profile', 'location', 'settings'],
    contentComponent: CustomDrawerStuff,
    backBehavior : 'initialRoute',
    // drawerOpenRoute: 'DrawerOpen',
    // drawerCloseRoute: 'DrawerClose',
    // dawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        //#e8232d
        activeTintColor : '#252525',
        inactiveTintColor: '#7a7a7a'
    }

})