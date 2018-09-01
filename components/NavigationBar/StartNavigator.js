import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {zoomIn} from 'react-navigation-transitions';

import MessageToScreen from '../../screens/messaging/MessageToScreen' 
import TutorialScreen from '../../screens/start/TutorialScreen';
import SignupScreen from '../../screens/start/SignupScreen';
import LoginScreen from '../../screens/start/LoginScreen';
import {Drawer} from '../Drawer/Drawer';
import EnterPhoneScreen from '../../screens/start/EnterPhoneScreen';
import ChangePhoneScreen from '../../screens/start/ChangePhoneScreen';
import LoadingScreen from '../../screens/start/LoadingScreen';
import DrawerTutorial from '../../screens/start/DrawerTutorial';


export const StartNavigator = createBottomTabNavigator({
    loading: {
        screen: LoadingScreen,
    },
    tutorial: {
        screen: TutorialScreen,
    },
    drawerTutorial: {
        screen: DrawerTutorial,
    },
    login: {
        screen: LoginScreen,
    },
    signup: {
        screen: SignupScreen,
    },
    enterPhone: {
        screen: EnterPhoneScreen,
    },
    changePhone: {
        screen: ChangePhoneScreen
    },
    drawer: {
        screen: Drawer
    },
},{
    transitionConfig: () => {zoomIn()},
    navigationOptions: {
        tabBarVisible: false,
    }
})