import React, {Component} from 'react';
import {ListView, View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import DisplayCard from '../../components/Card/DisplayCard'


const openDrawer = (navigator) =>{
    navigator.openDrawer();
}



//Logging in and arithmetic
login = async () => {
    try{
        let uid = Expo.Constants.deviceId;
        let userName = await AsyncStorage.getItem('userName');
        let phone = await AsyncStorage.getItem('phone');

        
    }catch(err){
        alert("Kamu app is having problems : " + err);
    }
}

class NewsfeedScreen extends Component{
    componentWillMount(){
        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });
    }

    render(){
        return (
            <View>
                <Header 
                    left={
                        <TouchableOpacity 
                            onPress={() => openDrawer(this.props.navigation)}
                        >
                            <Icon name="ios-menu" size={24}/>
                        </TouchableOpacity>
                    }
                    center={
                        <Image 
                            source={require('../../icons/logo/kamu_logo_small.png')}
                            style={{resizeMode: 'contain', height: 30, justifyContent: 'center'}}
                        />
                    }
                    right={
                        <Icon name="ios-search" size={24}/>
                    }    
                />
                <DisplayCard 
                    profileImage='https://i.imgur.com/K3KJ3w4h.jpg'
                    userName='Lasantha Madushan'
                    userId='@lazzy07'
                    description='kamu app creation dummy text 1,s see later homie its working now so let ammte dsislke like not unlike'
                    postImage='https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg'
                    location={{lat: 12.345}}
                />
            </View>
        )
    }
}

export default NewsfeedScreen;