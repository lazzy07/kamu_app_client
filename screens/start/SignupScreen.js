import React, {Component} from 'react';
import {View, Image, Text, Platform, Dimensions} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Expo from 'expo';

import BackgroundLight from '../../components/repeating_background/BackgroundLight';
import TextInput from '../../components/TextInput/TextInput';
import {ButtonCustom} from '../../components/Button/Button';
import {FIREBASE_FUNCTION_URL} from '../../firebase/firebase_config';
import axios from 'axios';

const styles = {
    titleStyles: {
        fontSize: 30,
    },
    titleContainerStyles: {
        margin: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    textInputStyles: {

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
}


class SignupScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            errFirstName: '',
            lastName: '',
            errLastName: '',
            userName: '',
            errUserName: '',
            phone: '',
            errPhone: '',
            mainMessage: '',
            mainMessageCol: '#252525',
            loading: false
        }
    }

    
    setCharAt = (str,index,chr) => {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    signUp = async (data) => {
        try{
            let res = await axios.post(FIREBASE_FUNCTION_URL+'/signup', data);
            
            this.setState({
                loading: false,
            })

            if(res.status == 200){
                this.props.navigation.navigate('enterPhone',{
                    phone: res.data.phone,
                    userName: res.data.userName
                });
            }else if(res.status == 202){
                this.setState({
                    errUserName: "Username already exists"
                })
            }else if(res.status == 201){
                this.setState({
                    errPhone: "Account with same phone number found"
                })
            }
        }catch(err){
            console.log("ERROR ::: " + err);
            this.setState({
                mainMessageCol: '#e8232d',
                mainMessage: "ERROR ::: Connection Error, Check Your Internet Connection",
                loading: false
            })
        }
        
    }

    loginNavigationHandler = () => {
        this.props.navigation.navigate('login');
    }

    signUpHandler = () => {
        this.setState({
            errPhone: "",
            errUserName: "",
            errFirstName: '',
            errLastName: "",
            mainMessage: ''
        })

        let fName = this.state.firstName;
        let lName = this.state.lastName;
        let uName = this.state.userName;

        if(this.state.firstName.charAt(this.state.firstName.length-1) === ' '){
            fName = this.state.firstName.slice(0, this.state.firstName.length-1);
            this.setState({
                firstName: fName,
            })
        }
        if(this.state.lastName.charAt(this.state.lastName.length-1) === ' '){
            lName = this.state.lastName.slice(0, this.state.lastName.length-1);
            this.setState({
                lastName: lName,
            })
        }
        if(this.state.userName.charAt(this.state.userName.length-1) === ' '){
            uName = this.state.userName.slice(0, this.state.userName.length-1);
            this.setState({
                userName: uName,
            })
        }

        if(this.state.loading === false){
            if(this.state.firstName.length > 0){
                if(this.state.lastName.length > 0){
                    if(this.state.userName.charAt(0) === '@'){
                        if(this.state.userName.length >= 4 && this.state.userName.length <= 15){
                            if(this.state.userName.replace("@", "").indexOf("@") === -1){
                                let re = /^\w+$/;
                                if(re.test(this.state.userName.replace("@", ""))){
                                    if(this.state.phone.length === 10){
                                        if(!isNaN(this.state.phone)){
                                            let pn = this.state.phone.substring(1);
                                            pn = "+94" + pn;
                                            this.signUp({
                                                phone: pn,
                                                userName: uName,
                                                firstName: fName,
                                                lastName: lName,
                                            });
                                            this.setState({
                                                loading: true,
                                                mainMessage: ''
                                            })
                                        }else{
                                            this.setState({
                                                errPhone: 'Phone number must be a number eg: 0771234123'
                                            })
                                            this.phoneInput.shake();
                                        }
                                    }else{
                                        this.setState({
                                            errPhone: "Phone number must have 10 digits ex: 0771234123" 
                                        })
                                        this.phoneInput.shake();
                                    }
                                }else{
                                    this.setState({
                                        errUserName: "Username can only consists of '_', '@' at the front, letters and numbers  eg: @lazzy_07"
                                    })
                                    this.uNameInput.shake();
                                }
                            }else{
                                this.setState({
                                    errUserName: "Username can only consists of one @ at the front eg: @lazzy_07"
                                })
                                this.uNameInput.shake();
                            }
                        }else{
                            this.setState({
                                errUserName: "Username length must be between 4 and 15 eg: @lazzy07" 
                            })    
                            this.uNameInput.shake();
                        }
                    }else{
                        this.setState({
                            errUserName: "Username must start with '@' eg: @lazzy07" 
                        })
                        this.uNameInput.shake();
                    }
                }else{
                    this.setState({
                        errLastName: "Last name can't be empty" 
                    })
                    this.lNameInput.shake();
                }    
            }else{
                this.setState({
                    errFirstName: "First name can't be empty" 
                })
                this.fNameInput.shake();
            }
        }
    }

    firstNameChange = (text) => {
        this.setState({
            firstName: text,
            errFirstName: ""
        })
    }

    lastNameChange = (text) => {
        this.setState({
            lastName: text,
            errLastName: ''
        })
    }

    userNameChange = (text) => {
        let uName = text;
        if(text.charAt(text.length-1) == ' '){
            uName = text.slice(0, text.length-1);
        }
        this.setState({
            userName: uName,
            errUserName: ''
        })
    }

    phoneChange = (text) => {
        this.setState({
            phone: text,
            errPhone: ''
        })
    }

    setRefFName = (input) => {
        this.fNameInput = input;
    }

    setRefLName = (input) => {
        this.lNameInput = input;
    }

    setRefUName = (input) => {
        this.uNameInput = input;
    }
    
    setRefPhone = (input) => {
        this.phoneInput = input;
    }

    componentDidMount(){
        // this.animation.play();
        // this.fNameInput.focus();
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
                            KAMU Sign Up
                        </Text>
                    </View>
                    <View style={styles.textInputStyles}>
                        <TextInput
                            setRef={this.setRefFName} 
                            label='First Name'
                            errorMessage={this.state.errFirstName}
                            placeHolder='eg- Lasantha'
                            maxLength={20}
                            returnKeyType='next'
                            onChangeText={(text) => this.firstNameChange(text)}
                            value={this.state.firstName}
                            onSubmitEditing={() => this.lNameInput.focus()}
                        />
                    </View>
                    <View style={styles.textInputStyles}>
                        <TextInput 
                            setRef={this.setRefLName} 
                            label='Last Name'
                            errorMessage={this.state.errLastName}
                            placeHolder='eg- Senanayake'
                            maxLength={20}
                            returnKeyType='next'
                            onChangeText={(text) => this.lastNameChange(text)}
                            value={this.state.lastName}
                            onSubmitEditing={() => this.uNameInput.focus()}
                        />
                    </View>
                    <View style={styles.textInputStyles}>
                        <TextInput 
                            setRef={this.setRefUName} 
                            label='User Name'
                            errorMessage={this.state.errUserName}
                            placeHolder='eg - @lazzy07'
                            maxLength={15}
                            autoCapitalize='none'
                            returnKeyType='next'
                            onChangeText={(text) => this.userNameChange(text)}
                            value={this.state.userName}
                            onSubmitEditing={() => this.phoneInput.focus()}
                        />
                    </View>
                    <View style={styles.textInputStyles}>
                        <TextInput 
                            setRef={this.setRefPhone}
                            label='Phone'
                            errorMessage={this.state.errPhone}
                            placeHolder='eg : 0771234123'
                            autoCapitalize = 'none'
                            maxLength={10}
                            keyboardType='numeric'
                            returnKeyType='done'
                            onChangeText={(text) => this.phoneChange(text)}
                            value={this.state.phone}
                            onSubmitEditing={() => this.signUpHandler()}
                        />
                    </View>
                    <View style={{alignItems: 'center', margin: 25, marginBottom: 35}}>
                        <Text style={{padding: 10, color: this.state.mainMessageCol}}>
                            {this.state.mainMessage}
                        </Text>
                        <View style={{width: '50%'}}>
                            <ButtonCustom 
                                title="Sign Up" 
                                color='#252525' 
                                borderWidth = {2}
                                loading = {this.state.loading}
                                onPress={()=> this.signUpHandler()}
                            />
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text>
                            Already have an account?
                        </Text>
                        <View style={{width: '50%', marginBottom: 30}}>
                            <ButtonCustom 
                                title="LOGIN" 
                                color='#252525'
                                large
                                onPress={() => this.loginNavigationHandler()}
                            />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default SignupScreen;