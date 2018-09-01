import React from 'react';
import {View, Text} from 'react-native';

const styles = {
    containerStyles: {
        marginTop: 20
    },
    topicStyles: {
        paddingLeft: 10,
        color: '#7a7a7a',
        fontSize: 16,
    },
    textStyles: {
        paddingLeft: 30,
        color: '#252525',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    }
}

export const InfoArea = (props) =>{
 return(
     <View style={styles.containerStyles}>
         <Text style={styles.topicStyles}>
             {props.topic}
         </Text>
         <Text style={styles.textStyles}>
             {props.text}
         </Text>
     </View>
 )
}