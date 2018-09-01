import React, {Component} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import BackgroundLight from '../../components/repeating_background/BackgroundLight';
import {ButtonCustom} from '../../components/Button/Button'

export default class DrawerTutorial extends Component{
    render(){
        return(
            <View style= {{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.7)",
            }}>
                <View style={{
                    flex: 10,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row', 
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <Image 
                            style={{
                                height: 150,
                                width: 100,
                                resizeMode: 'contain',
                                padding: 10
                            }} 
                            source={require('../../images/drawer_tut/swipe_hand.png')}
                        />
                        <View style={{
                            flex: 1,
                            alignItems: 'center'
                        }}>
                        <Text style={{
                            color: '#fff',
                            padding: 10,
                            paddingLeft: 0,
                            textAlign: 'center',
                            fontSize: 18
                        }}>
                            Swipe from left corner to right to open the settings drawer
                        </Text>
                        </View>
                    </View>
                </View>
                <View style= {{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    paddingRight: 10
                }}>
                    <ButtonCustom 
                        title="Got It >>" 
                        color='#fff'
                        large
                        borderWidth = {0}
                        onPress={() => this.props.navigation.navigate('drawer')}
                    />
                </View>
            </View>
        )
    }
}