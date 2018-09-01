import React, {Component} from 'react';
import {View, Text, Image, Platform, Dimensions} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {DangerZone} from 'expo';
import axios from 'axios';
import Expo from 'expo';

let {Lottie} = DangerZone;

import BackgroundLight from '../../components/repeating_background/BackgroundLight';
import TextInput from '../../components/TextInput/TextInput';
import {ButtonCustom} from '../../components/Button/Button';
import {FIREBASE_FUNCTION_URL} from '../../firebase/firebase_config';

class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            input: '',
            loading: false,
            mainText: '',
            phoneNo: ''
        }
    }

    signupNavigationHandler = () => {
        this.props.navigation.navigate('signup');
    }

    onChangePhone(text){
        this.setState({
            errorMessage: '',
            input: text,
        })
    }

    setRefPhone = (input) => {
        this.phoneInput = input;
    }

    login = async (pn) => {
        try{
            let res = await axios.post(FIREBASE_FUNCTION_URL+'/login', {
                phone: pn
            });
            if(res.status === 200){
                //console.log(res.data);
                this.props.navigation.navigate('enterPhone', {
                    phone : this.state.input, 
                    userName: res.data.userName,
                    type: "login"
                });
            }else if(res.status === 201){
                this.setState({
                    errorMessage: 'Cannot find an account assigned to this phone number'
                })
                this.phoneInput.shake();
            }else{
                this.setState({
                    mainText: 'Unknown error: try again later'
                })
            }
            this.setState({
                loading: false
            })
        }catch(err){
            this.setState({
                loading: false,
                mainText: 'Error: '+ err
            })
        }
    }

    loginHandler = () => {
        if(this.state.loading === false){
            this.setState({
                mainText: '',
                errorMessage: ''
            })
            if(this.state.input.length === 10){
                let isnum = /^\d+$/.test(this.state.input);
                if(isnum){
                    let pn = this.state.input.substring(1);
                    pn = "+94"+pn;

                    this.setState({
                        loading: true
                    })
                    this.login(pn);
                }else{
                    this.setState({
                        errorMessage: 'Can contain numbers only eg: 0771231234'
                    })
                    this.phoneInput.shake();
                }
            }else{
                this.setState({
                    errorMessage: 'Please enter your number like eg: 0771231234'
                })
                this.phoneInput.shake();
            }
        }
    }

    componentDidMount(){
        // this.animation.play();
        // this.phoneInput.focus();
    }

    render(){
        return(
           <View style={{flex: 1}}>
                <BackgroundLight/>
                <View style={{
                    top: 0,
                    width: Dimensions.get('screen').width,
                    height: Dimensions.get('screen').height,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0.5
                }}>
                        {/* <Lottie
                            resizeMode='cover'
                            style={{
                                width: '100%',
                                height: '50%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            ref={animation => {
                                this.animation = animation;
                            }}
                            source={require('../../Animations/background_anim/data.json')}
                        /> */}
                </View>
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
                    <View style={{
                        flex: 1,
                        margin: 30,
                        marginBottom: 10,
                    }}>
                        <TextInput 
                            label='Phone'
                            setRef = {this.setRefPhone}
                            errorMessage={this.state.errorMessage}
                            placeHolder='enter your phone number eg- 0773601305'
                            keyboardType='numeric'
                            returnKeyType='done'
                            maxLength={10}
                            onChangeText={(text) => this.onChangePhone(text)}
                            value={this.state.input}
                            onSubmitEditing= {() => this.loginHandler()}
                        />
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#e8232d',
                            padding: 5,
                            textAlign: 'center'
                        }}>
                            {this.state.mainText}
                        </Text>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 5, marginBottom: 35}}>
                        <View style={{width: '50%'}}>
                            <ButtonCustom 
                                title="LOGIN" 
                                color='#252525' 
                                borderWidth = {2}
                                onPress={() => this.loginHandler()}
                                loading={this.state.loading}
                            />
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text>
                            Don't have an account?
                        </Text>
                        <View style={{width: '50%'}}>
                            <ButtonCustom 
                                title="SIGN UP" 
                                color='#252525'
                                large
                                onPress={() => this.signupNavigationHandler()}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const styles = {
    imageStyles: {
        width: 120,
        height: 60,
        resizeMode: 'contain'
    },
    imageContainerStyles: {
        margin: 40,
        alignItems: 'center',
    },
    titleStyles: {
        fontSize: 30,
    },
    titleContainerStyles: {
        margin: 10,
        alignItems: 'center',
    }
}


export default LoginScreen;