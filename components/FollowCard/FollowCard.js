import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = {
    viewStyles: {
        flexDirection: 'row',
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(25,25,25,0.1)',
    },
    imageStyles: {
        resizeMode: 'contain', 
        height: 60,
        width: 60,
        margin: 10
    },
    infoContainerStyles: {

    },
    userNameStyles: {
        color: '#252525',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 10,
        marginBottom: 5
    },
    userIdStyles: {
        color: '#7a7a7a',
        marginLeft: 10
    },
    iconStyles: {
        color: '#252525',
        marginRight: 10
    },
    iconContainerStyles: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
}

export const FollowCard = (props) => {
    let stopFollow = null;
    if(props.stopFollow == true){
        stopFollow = (
            <View style={styles.iconContainerStyles}>
                <Icon style={styles.iconStyles} name="ios-close-circle-outline" size={35}/>
            </View>
        )
    }

    return(
        <View style={styles.viewStyles}>
            <Image 
                source={{uri: props.profileImage}}
                style={styles.imageStyles}
            />
            <View style={styles.infoContainerStyles}>
                <Text style={styles.userNameStyles}>
                    {props.userName}
                </Text>
                <Text style={styles.userIdStyles}>
                    {props.userId}
                </Text>
            </View>
            {stopFollow}
        </View>
    )
}