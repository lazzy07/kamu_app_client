import React, {Component} from 'react';
import {View, ActivityIndicator, Text, Image, Dimensions, AsyncStorage} from 'react-native';
import BackgroundLight from '../../components/repeating_background/BackgroundLight';
import {AppLoading, Constants} from 'expo';
import axios from 'axios';

import {FIREBASE_FUNCTION_URL} from '../../firebase/firebase_config';


class LoadingScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            isReady : false,
            err: '',
        }
    }

    //handling user logged in?
    isUserLoggedIn = async () => {
        try{
            const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
            if(isLoggedIn === "true"){
                const userName = await AsyncStorage.getItem('userName');
                const uid = Constants.deviceId;
                try{
                    const res = await axios.post(FIREBASE_FUNCTION_URL+'fetchdata', {
                        userName,
                        uid
                    })
    
                    if(res.status === 200){
                        const tutScreen = await AsyncStorage.getItem('tutScreen');
                        if(tutScreen === null){
                            this.props.navigation.navigate('drawerTutorial');
                            await AsyncStorage.setItem("tutScreen", "true");
                        }else{
                            this.props.navigation.navigate('drawer');
                        }
                    }else if(res.status === 201){
                        this.setState({
                            err: 'Someone has logged in via another device, login again! Loading login page...'
                        })
                    }else{
                        this.setState({
                            err: 'Server error, try again later'
                        })
                    }
                }catch(err){
                    this.setState({
                        err: err,
                    })
                }
            }else{
                this.props.navigation.navigate('tutorial');
            }
        }catch(err){
            console.log('Error while Getting loggedin data : '+ err);
        }
    }

    componentDidMount(){
        this.isUserLoggedIn();
    }

    render(){
        //if(this.state.isReady){
            return(
                <View>
                    <BackgroundLight/>
                    <View style={{
                        position: "absolute",
                        flex: 1,
                        height: Dimensions.get('screen').height,
                        width: Dimensions.get('screen').width,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image 
                            style={{
                                width: 120,
                                height: 60,
                                resizeMode: 'contain',
                                paddingBottom: 20,
                            }} 
                            source={require('../../icons/logo/kamu_logo_small.png')}
                        />
                        <Text style={{
                            textAlign: 'center',
                            color: '#252525',
                            padding: 10
                        }}>
                            Connecting food lovers together
                        </Text>
                        <ActivityIndicator size='large' color='#e8232d'/>
                        <Text style={{
                            textAlign: 'center',
                            color: '#e8232d',
                            padding: 10
                        }}>
                            {this.state.err}
                        </Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        flex: 1,
                        height: Dimensions.get('screen').height,
                        width: Dimensions.get('screen').width,
                        alignItems: "flex-start",
                        justifyContent: 'flex-end',
                        padding: 10
                    }}>
                        <Text>
                            Cyborg Studios Production
                        </Text>
                        <Text>
                            Created by @lazzy07
                        </Text>
                        <Text>
                            Copyright 2018
                        </Text>
                    </View>
                </View>
            )
        // }else{
        //     return(
        //         <AppLoading
        //             startAsync={this.isUserLoggedIn}
        //             onFinish = {() => {
        //                 this.setState({isReady: true});
        //             }}
        //             onError={alert}
        //         />
        //     )
        // }
    }
}
export default LoadingScreen;