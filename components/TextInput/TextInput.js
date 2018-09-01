import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import {View} from 'react-native';

const styles = {
    containerStyles: {
        focused: {
            borderBottomColor: '#252525',
        },
        blurred: {
            borderBottomColor: 'rgba(122,122,122,0.4)'
        }
    },
    labelStyles: {
        color: '#7a7a7a',
        fontSize: 17,
    },
    warningStyles: {
        color: '#e8232d',
        fontSize: 17,
    },
    textStyles: {
        color: '#252525',
        fontSize: 17,
    } 
}

export default class TextInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: styles.containerStyles.blurred
        }
    }
    
    render(){
        return(
            <View>
                <FormLabel style={styles.labelStyles}>{this.props.label}</FormLabel>
                <FormInput
                    onBlur={() => {this.setState({containerStyle : styles.containerStyles.blurred})}}
                    onFocus={() => {
                            this.setState({
                                containerStyle : styles.containerStyles.focused
                            })
                        }
                    }
                    inputStyle={styles.textStyles}
                    underlineColorAndroid = '#252525'
                    containerStyle={this.state.containerStyle}
                    returnKeyType={this.props.returnKeyType} 
                    secureTextEntry={this.props.secureTextEntry}
                    placeholder={this.props.placeHolder}
                    placeholderTextColor='#7a7a7a'
                    selectionColor='#252525'
                    ref = {this.props.setRef}
                    autoCapitalize = {this.props.autoCapitalize}
                    onChangeText = {this.props.onChangeText}
                    maxLength={this.props.maxLength}
                    keyboardType={this.props.keyboardType}
                    defaultValue={this.props.defaultValue}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    onSubmitEditing={this.props.onSubmitEditing}
                /> 
                <FormValidationMessage style={styles.warningStyles}>
                    {this.props.errorMessage}
                </FormValidationMessage>
            </View>
        )
    }
}