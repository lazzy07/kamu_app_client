import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Camera, Permissions} from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';


class Camera extends Component{
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back
    }

    async componentWillMount(){
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission : status === 'granted'});
    }

    render(){
        const {hasCameraPermission} = this.state;

        if(hasCameraPermission === null){
            return <View/>
        }else if(hasCameraPermission === false){
            return <Text>No Access To Camera</Text>
        }else{
            return(
                <View style={{flex: 1}}>
                    <Camera style={{flex: 1}}/>
                    <View style={{
                        flex:1, 
                        flexDirection: 'row',
                        position: 'absolute', 
                        backgroundColor: 'rgba(0,0,0,0)',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        marginBottom: 10,
                        marginLeft: 15 ,
                        alignItems: 'flex-end',
                        justifyContent: 'space-between'
                    }}>
                        <Icon name="ios-images-outline" style = {{margin: 10}} color="#fff" size={40}/>
                        <FAIcon name="qrcode" color="#fff" style = {{margin: 10}} size={40}/>
                        <Icon name="ios-aperture" style = {{margin: 10}} color="#fff" size={80}/>
                        <Icon name="ios-flash" style = {{margin: 10}} color="#fff" size={40}/>
                        <Icon name="ios-reverse-camera-outline" style = {{margin: 10}} color="#fff" size={40}/>
                    </View>
                </View>
            )
        }
    }
}

export default Camera;