import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {NotificationComponent} from '../../components/Notification/NotificationComponent'


const openDrawer = (navigator) =>{
    navigator.openDrawer();
}

class NotificationScreen extends Component{
    render(){
        return (
            <View>
                <Header 
                    right={
                        <Image 
                            source={require('../../icons/logo/kamu_logo_small.png')}
                            style={{resizeMode: 'contain' ,height: 30, width:50}}
                        />
                    }
                    center={
                    <Text 
                        style={{fontWeight: 'bold', fontSize: 20, color: '#252525'}}>
                        Notifications
                    </Text>
                    }
                    left={<Icon name="ios-menu" size={24}
                        onPress={() => openDrawer(this.props.navigation)}
                    />}
                />

                <NotificationComponent 
                    text='lazzy liked your post on KFCs new offer, sure not sure wth road franklin lol offer yo wth not given all the time'
                    image='https://i.imgur.com/K3KJ3w4h.jpg'
                    title='@lazzy07'
                    isRead={false}
                />
                
                <NotificationComponent 
                    text='lazzy liked your post on KFCs new offer, sure not sure wth road franklin lol offer yo wth not given all the time'
                    image='https://i.imgur.com/K3KJ3w4h.jpg'
                    title='@lazzy07'
                    isRead={false}
                />
                <NotificationComponent 
                    text='lazzy liked your post on KFCs new offer'
                    image='https://i.imgur.com/K3KJ3w4h.jpg'
                    title='@lazzy07'
                    isRead={false}
                />
            </View>
        )
    }
}

export default NotificationScreen;