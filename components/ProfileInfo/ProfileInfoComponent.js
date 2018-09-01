import React from 'react';
import { View, Image, Text } from 'react-native';

export const ProfileInfoComponent = (props) => (
    <View style={styles.containerStyles}>
        <View style={styles.horContainerSrtyles}>
            <Image 
                style={styles.profilePic} 
                source={{ uri: props.profileImage }} 
            />
            <View>
                <Text style={styles.userName}>
                    {props.userName}
                </Text>
                <Text style={styles.userId}>
                    {props.userId}
                </Text>
            </View>
        </View>
        <View style={styles.followRow}>
            <View style={styles.followContainersStyles}>
                <Text style={styles.followTextStyles}>
                    {props.followersNo}
                </Text>
                <Text>
                    Followers
                </Text>
            </View>
            <View style={styles.followContainersStyles}>
                <Text style={styles.followTextStyles}>
                    {props.followingNo}
                </Text>
                <Text>
                    Following
                </Text>
            </View>
            <View style={styles.followContainersStyles}>
                <Text style={styles.followTextStyles}>
                    {props.resturentsNo}
                </Text>
                <Text>
                    Resturents
                </Text>
            </View>
        </View>
    </View>
)

const styles = {
    profilePic: {
        height: 80,
        width: 80,
        marginLeft: 10,
        marginRight: 10
    },
    containerStyles:{
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: 'rgba(25,25,25,0.1)',
        borderBottomWidth: 1,
    },
    horContainerSrtyles:{
        flexDirection: 'row'
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#252525'
    },
    userId: {
        color: '#7a7a7a'
    },
    followRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
    followContainersStyles:{
        alignItems: 'center'
    },
    followTextStyles:{
        fontSize: 30,
        fontWeight: 'bold'
    }
}