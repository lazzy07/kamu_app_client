import React, {Component} from 'react'
import {View, Text, Image} from 'react-native';
import HeaderTitle from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {FollowCard} from '../../components/FollowCard/FollowCard';

const openDrawer = (navigator) =>{
    navigator.openDrawer();
}

class FollowersScreen extends Component{
    render(){
        return(
            <View style={{marginTop: 18}}>
                <FollowCard 
                    profileImage='https://i.imgur.com/K3KJ3w4h.jpg'
                    userName='Lasantha Madushan'
                    userId='@lazzy07'
                    stopFollow= {true}
                />
                <FollowCard 
                    profileImage='https://i.imgur.com/K3KJ3w4h.jpg'
                    userName='Lasantha Madushan'
                    userId='@lazzy07'
                />
                <FollowCard 
                    profileImage='https://i.imgur.com/K3KJ3w4h.jpg'
                    userName='Lasantha Madushan'
                    userId='@lazzy07'
                />
            </View>
        )
    }
}


export default FollowersScreen;