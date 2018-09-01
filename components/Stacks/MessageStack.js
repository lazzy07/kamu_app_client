import React from 'react';
import {createStackNavigator} from 'react-navigation';

import MessageToScreen from '../../screens/messaging/MessageToScreen';

export const MessageStack = createStackNavigator({
    messagePrivate: {
        screen: MessageToScreen
    }
})