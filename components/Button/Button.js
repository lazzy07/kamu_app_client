import React from 'react';
import {Button} from 'react-native-elements';


export const ButtonCustom = (props) => {
    return(
        <Button
            backgroundColor= 'rgba(0,0,0,0)'
            borderRadius= {50}
            buttonStyle= {{
                borderColor : props.color,
                borderWidth: props.borderWidth,
            }}
            color = {props.color}
            title = {props.title}
            icon={props.icon}
            large= {props.large}
            disabled={props.disabled}
            loading = {props.loading}
            onPress = {props.onPress}
        />
    )
}