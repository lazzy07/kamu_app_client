import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';



let styles = {
    outerContainer: {
        marginBottom: 15,
        flex: 1,
        width: Dimensions.get('window').width
    },
    outerContainerMine: {
        marginBottom: 15,
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'flex-end'
    },
    containerMine:{
        alignItems: 'flex-end',
    },
    containerOthers: {
        alignItems: 'flex-start',
    },
    textMine: {
        color: '#fff',
        backgroundColor: '#252525',
        margin: 10,
        marginRight: 20,
        fontSize: 20,
        padding: 10
    },
    textOthers: {
        color: '#252525',
        backgroundColor: '#fff',
        margin: 10,
        marginLeft: 20,
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(25,25,25,0.1)',
    },
    dateStyles: {
        marginLeft: 20,
        marginRight: 20,
        color: '#7a7a7a'
    }
}

export const Message = (props) => {
    let containerType = styles.containerOthers;
    let textType = styles.textOthers;
    let outerContainerType = styles.outerContainer;
    if(props.userName === props.message.sender){
        containerType = styles.containerMine;
        textType = styles.textMine;
        outerContainerType = styles.outerContainerMine;
    }
    return(
        <View style={outerContainerType}>
            <Text style={styles.dateStyles}>
                2018 12 31 24:00
            </Text>
            <View style={containerType}>
                <Text style={textType}>
                    {props.message.message}
                </Text>
            </View>
        </View>
    )
}