import React, {Component} from 'react'
import {View, Text, Image} from 'react-native';
import {ProfileInfoComponent} from '../../components/ProfileInfo/ProfileInfoComponent'
import HeaderTitle from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileInfo from '../../DataRenders/ProfileInfo';

const openDrawer = (navigator) =>{
    navigator.openDrawer();
}

class InfoScreen extends Component{
    componentWillMount(){

    }
    
    render(){
        return(
            <View style={{flex: 1}}>
                <HeaderTitle 
                    center={
                        <Text 
                            style={{fontWeight: 'bold', fontSize: 20, color: '#252525'}}>
                            My Profile
                        </Text>
                    }
                    left={<Icon name="ios-menu" size={24} 
                        onPress={() => openDrawer(this.props.navigation)}
                    />}
                    right={
                        <Image 
                            source={require('../../icons/logo/kamu_logo_small.png')}
                            style={{resizeMode: 'contain' ,height: 30, width:50}}
                        />
                    }
                />
                <ProfileInfoComponent 
                    profileImage='https://i.imgur.com/K3KJ3w4h.jpg'
                    userName='Lasantha Madushan'
                    userId='@lazzy07'
                    followersNo='200'
                    followingNo='10'
                    resturentsNo='2'
                />
                <ProfileInfo/>
            </View>
        )
    }
}

export default InfoScreen;