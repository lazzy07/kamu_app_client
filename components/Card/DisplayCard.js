import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import React, {Component} from 'react';
import FullWidthImage from 'react-native-fullwidth-image';


export default class DisplayCard extends Component {
    render(){
        let locationIcon = null;
        if(this.props.location){
            locationIcon = (<Icon name="ios-pin" color='#e8232d' size={50}/>)
        }
        let Styles = {
            iconStyles: {
                margin: 10
            }
        }

        return(
            <View style={{
                borderBottomColor: 'rgba(25,25,25,0.1)',
                borderBottomWidth: 1,
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 5,
                    marginTop: 10,
                    marginBottom: 2
                }}>
                    <Image
                        source={{uri: this.props.profileImage}}
                        style={{
                            resizeMode: 'contain', 
                            height: 60,
                            width: 60
                        }}
                    />
                    <View style={{
                        marginLeft: 20, 
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.props.userName}</Text>
                        <Text style={{color : '#7a7a7a'}}>{this.props.userId}</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        marginRight: 15
                    }}>
                        {locationIcon}
                    </View>
                </View>
                <Text style={{
                    margin: 10
                }}>
                    {this.props.description}
                </Text>
                <View >
                <FullWidthImage  
                    source={{uri: this.props.postImage}}
                />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignContent: 'space-between',
                        marginTop: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 5
                    }}>
                        <Icon style={Styles.iconStyles} name="ios-heart-outline" size={35}/>
                        <Icon style={Styles.iconStyles} name="ios-chatboxes-outline" size={35}/>
                        <Icon style={Styles.iconStyles} name="ios-share-outline" size={35}/>
                    </View>
                </View>
            </View>
        )
    }
}