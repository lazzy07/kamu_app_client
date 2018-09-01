import React, {Component} from 'react';
import {View, Image, Text, Platform, Dimensions, AsyncStorage} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CountDown from 'react-native-countdown-component';
import axios from 'axios';
import Expo from 'expo'

import TextInput from '../../components/TextInput/TextInput';
import BackgroundLight from '../../components/repeating_background/BackgroundLight';
import {ButtonCustom} from '../../components/Button/Button';
import {FIREBASE_FUNCTION_URL} from '../../firebase/firebase_config';


const styles = {
    headerStyle: {
        color: '#252525'
    },
    imageStyles: {
        width: 120,
        height: 60,
        resizeMode: 'contain'
    },
    imageContainerStyles: {
        margin: 40,
        marginBottom: 10,
        alignItems: 'center',
    },
    titleStyles: {
        fontSize: 30,
    },
    titleContainerStyles: {
        margin: 20,
        marginTop: 10,
        alignItems: 'center',
    },
}

class EnterPhoneScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            code : "",
            errCode : "",
            loading: false,
            changerType : "timer",
            changer: this.display,
        }
    }

    display = (<CountDown
        until={120}
        digitTxtColor="#fff"
        digitBgColor="#252525"
        timeTxtColor="#252525"
        timeToShow={['M','S']}
        size={18}
        onFinish={() => this.changeDisplay()}
    />)

    changeCode = (text) =>{
        this.setState({
            code : text,
            errCode: ''
        })
    }

    setRefCode = (input) => {
        this.codeInput = input;
    }

    sendCodeAgain = async () => {
        this.changeDisplay();
        let pn = this.props.navigation.state.params.phone.substring(1);
        pn = "+94"+pn;
        try{
            let res = await axios.post(FIREBASE_FUNCTION_URL+'/login', {
                phone: pn,
            });
        }catch(err){
            this.setState({
                errCode: err + "\nTry again later"
            })
        }
    }

    changeDisplay = () => {
        if(this.state.changerType === 'button'){
            this.setState({
                changerType: 'timer',
                changer : (
                    <CountDown
                        until={120}
                        digitTxtColor="#fff"
                        digitBgColor="#252525"
                        timeTxtColor="#252525"
                        timeToShow={['M','S']}
                        size={18}
                        onFinish={() => this.changeDisplay()}
                    />
                )
            })
        }else{
            this.setState({
                changerType: 'button',
                changer: (
                    <View style={{width: '50%'}}>
                        <ButtonCustom 
                            title="Send Code Again" 
                            color='#252525'
                            large
                            onPress={() => this.sendCodeAgain()}
                        />
                    </View>
                )
            })
        }
    }

    changePhone = () => {
        const phone = this.props.navigation.state.params.phone;
        const userName = this.props.navigation.state.params.userName;
        const type = this.props.navigation.state.params.type;

        if(type === "login"){
            this.props.navigation.navigate("login")
        }else{
            this.props.navigation.navigate("changePhone", {
                phone: phone, 
                userName: userName,
            })
        }
    }

    auth = async () =>{
        if(this.state.loading === false){
            let isnum = /^\d+$/.test(this.state.code);
            if(isnum){
                let pn = this.props.navigation.state.params.phone.substring(1);
                pn = "+94"+pn;
                this.setState({
                    loading : true,
                    errCode: ""
                })
                try{
                    let res = await axios.post(FIREBASE_FUNCTION_URL+'/authuser', {
                        phone: pn,
                        code: this.state.code,
                        userName: this.props.navigation.state.params.userName,
                        uid: Expo.Constants.deviceId
                    });

                    if(res.status === 200){
                        //console.log(res.data);
                        try{
                            await AsyncStorage.setItem("isLoggedIn", "true");
                            await AsyncStorage.setItem("phone", res.data.phone);
                            await AsyncStorage.setItem("userName", res.data.userName);
                            this.props.navigation.navigate('loading', {
                                user : res.data.user
                            });
                        }catch(err){
                            console.log("Saving Failed");
                            alert("Kamu app cant save data to the phone, Restart the app");
                        }

                    }else if(res.status === 201){
                        this.setState({
                            errCode: 'Incorrect code, check again'
                        })
                        this.codeInput.shake();
                    }else if(res.status === 202){
                        this.setState({
                            errCode: 'Code have been expired! Try resend code'
                        })
                        this.codeInput.shake();
                    }else{
                        this.setState({
                            errCode: 'Unknown error: try again later'
                        })
                    }
                    this.setState({
                        loading: false
                    })
                }catch(err){
                    this.setState({
                        loading: false,
                        errCode: 'Error: '+ err
                    })
                }
            }else{
                this.setState({
                    errCode: 'Only numbers are possible eg: 123456'
                })
            }
        }
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <BackgroundLight/>
                {/* <View style={{
                    top: 0,
                    width: Dimensions.get('screen').width,
                    height: Dimensions.get('screen').height,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}> */}
                    <KeyboardAwareScrollView
                        enableOnAndroid
                        enableAutomaticScroll
                        keyboardOpeningTime={0}
                        extraHeight={Platform.select({ android: 100 })}
                    >
                        <View style = {styles.imageContainerStyles}>
                            <Image 
                            style={styles.imageStyles} 
                            source={require('../../icons/logo/kamu_logo_small.png')}
                            />
                        </View>
                        <View style={styles.titleContainerStyles}>
                            <Text style={styles.titleStyles}>
                                KAMU Login
                            </Text>
                        </View>
                        <View>
                            <View style={{
                                padding: 20
                            }}>
                                <TextInput 
                                    setRef = {this.setRefCode}
                                    label='Enter the code we sent you via SMS :'
                                    errorMessage={this.state.errCode}
                                    placeHolder='eg : 123456'
                                    autoCapitalize = 'none'
                                    maxLength={10}
                                    keyboardType='numeric'
                                    returnKeyType='done'
                                    onChangeText={(text) => {this.changeCode(text)}}
                                    onSubmitEditing= {() => this.auth()}
                                />
                            </View>
                            <View style={{alignItems: 'center', marginTop: 5, marginBottom: 35}}>
                                <View style={{width: '50%'}}>
                                    <ButtonCustom 
                                        title="Done !" 
                                        color='#252525' 
                                        borderWidth = {2}
                                        loading = {this.state.loading}
                                        onPress = {() => this.auth()}
                                    />
                                </View>
                            </View>
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <Text>
                                    Didn't Recieve any code? Please wait
                                </Text>
                                {this.state.changer}
                            </View>
                            <View style={{
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Text style= {{
                                    textAlign: 'center'
                                }}>
                                    Your phone : {this.props.navigation.state.params.phone}, incorrect?
                                </Text>
                                <View>
                                    <ButtonCustom 
                                        title="Change Phone No" 
                                        color='#252525'
                                        large
                                        onPress={() => this.changePhone()}
                                    />
                                </View>
                            </View>
                            <View style={{alignItems: 'center', flex: 1}}>
                                <Text style={{
                                    color: '#e8232d',
                                    padding: 5,
                                    textAlign: 'center'
                                }}>
                                    {this.state.errorMessage}
                                </Text>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                {/* </View> */}
            </View>
        )
    }
}

export default EnterPhoneScreen;