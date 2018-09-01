import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FormInput} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

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
    },
    iconStyles: {
        paddingRight: 10
    }
}

export default class MessageSend extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerStyle: styles.containerStyles.blurred
        }
    }

    render(){
        return(
            <View>
                <View style={{flexDirection: 'row', backgroundColor: '#fff', padding: 10}}>
                    <View style={{width: '92%'}}>
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
                            placeholder='Enter your message'
                            placeholderTextColor='#7a7a7a'
                            selectionColor='#252525'
                            multiline
                            maxLength={100}
                        />
                    </View>
                    <Icon style={styles.iconStyles} name="md-send" size={35}/>
                </View>
            </View>
        )
    }
}