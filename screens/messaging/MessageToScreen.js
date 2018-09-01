import React, {Component} from 'react';
import {View, ScrollView, KeyboardAvoidingView, Dimensions, Platform} from 'react-native';

import {Message} from '../../components/Messaging/Message';
import Background from '../../components/repeating_background/BackgroundLight';
import {MessageHeader} from '../../components/Messaging/MessagingHeader'
import MessageSend from '../../components/Messaging/MessageSend'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
//Dummy data
import messages from '../../data/message_dummy_data/MessageData';


class MessageToScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [
                {
                  _id: 1,
                  text: 'Hello developer',
                  createdAt: new Date(),
                  user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                  },
                },
            ]
        }
    }
    
    componentWillMount(){
        this.messageArray = messages.map((message, i) => {
            return(
                <Message key={i} message={message} userName='@lazzy07'/>
            )
        })
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <Background />
                <View style={{
                    position: 'absolute', 
                    left: 0, 
                    top: 0, 
                    width: Dimensions.get('window').width}}>
                    <MessageHeader 
                        userName='@lazzy07'
                        firstName= 'Lasantha'
                        lastName= 'Madushan'
                        profileImage= 'https://i.imgur.com/K3KJ3w4h.jpg'
                    />
                </View>
                <View style={{
                    flex: 1,
                    position: 'absolute',
                    top: 75,
                    left: 0,
                    alignItems: 'center',
                    justifyContent: 'center'}}
                >
                    <View style={{flex: 1, height: Dimensions.get('window').height - 120}}>
                        <KeyboardAwareScrollView 
                            enableOnAndroid
                            enableAutomaticScroll
                            keyboardOpeningTime={0}
                            extraHeight={Platform.select({ android: 100 })}
                        >
                            {[this.messageArray]}
                        </KeyboardAwareScrollView>
                    </View>
                </View>
                <KeyboardAvoidingView 
                    style={{
                        flex: 1,
                        // height: Dimensions.get('window').height,
                        // width: Dimensions.get('window').width,
                        position: 'absolute',
                        bottom: 0,
                        justifyContent: 'flex-end',
                    }} 
                    behavior="padding" 
                    enabled
                >
                    <MessageSend/>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default MessageToScreen;