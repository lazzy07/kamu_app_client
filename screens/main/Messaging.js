import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HeaderTitle from '../../components/Header/Header';
import {MessageInfo} from '../../components/Messaging/MessageInfo';

const openDrawer = (navigator) =>{
    navigator.openDrawer();
}

class MessagingScreen extends Component{
    render(){
        return(
            <View>
                <HeaderTitle 
                    center={
                        <Text 
                            style={{fontWeight: 'bold', fontSize: 20, color: '#252525'}}>
                            Messages
                        </Text>
                    }
                    left={<Icon name="ios-menu" size={24} 
                        onPress={() => openDrawer(this.props.navigation)}
                    />}
                    right={
                        <Icon name="ios-search" size={24}/>
                    }
                />

                <MessageInfo 
                    userName="Lasantha Madushan"
                    lastMessage='Lol Its working fine you moron'
                    profileImage = 'https://i.imgur.com/K3KJ3w4h.jpg'
                    unreadMessages= {10}
                />
                <MessageInfo 
                    userName="Lasantha Madushan"
                    lastMessage='Lol Its working fine you moron'
                    profileImage = 'https://i.imgur.com/K3KJ3w4h.jpg'
                    unreadMessages= {null}
                />
                <MessageInfo 
                    userName="Lasantha Madushan"
                    lastMessage='Lol Its working fine you moron'
                    profileImage = 'https://i.imgur.com/K3KJ3w4h.jpg'
                    unreadMessages= {0}
                />
                <MessageInfo 
                    userName="Lasantha Madushan"
                    lastMessage='Lol Its working fine you moron'
                    profileImage = 'https://i.imgur.com/K3KJ3w4h.jpg'
                    unreadMessages= {undefined}
                />
            </View>
        )
    }
}

export default MessagingScreen;