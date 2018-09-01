import React from 'react';
import {View, Text, Image} from 'react-native';

const styles = {
    containerStyles: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        padding: 5,
        borderBottomColor: 'rgba(25,25,25,0.1)',
        borderBottomWidth: 1, 
    },
    userName: {
        color: '#252525',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
    lastMessage: {
        color: '#7a7a7a',
        margin: 5
    },
    textContainer: {
        marginLeft: 5,
        flex: 1,
    },
    unreadCountContainer: {
        justifyContent: 'center'
    },
    uContainer: {
        flex: -1,
        backgroundColor: '#e8232d',
        borderRadius: 100,
        marginRight: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unreadCount:{
        color: '#fff',
        alignSelf: 'center'
    }
}

export const MessageInfo = (props) =>{
    let unreadMessages = null;

    if(props.unreadMessages !== 0 && props.unreadMessages !== undefined && props.unreadMessages !== null){
        unreadMessages = (
            <View style={styles.unreadCountContainer}>
                <View style={styles.uContainer}>
                    <Text style={styles.unreadCount}>
                        {props.unreadMessages}
                    </Text>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.containerStyles}>
            <Image
                source={{uri: props.profileImage}}
                style={{
                    resizeMode: 'contain', 
                    height: 60,
                    width: 60
                }}
            />
            <View style={styles.textContainer}>
                <Text style = {styles.userName}>
                    {props.userName}
                </Text>
                <Text style={styles.lastMessage}>
                    {props.lastMessage}
                </Text>
            </View>
            {unreadMessages}
        </View>
    )
}