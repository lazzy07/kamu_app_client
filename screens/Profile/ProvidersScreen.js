import React, {Component} from 'react'
import {View, Text, Image} from 'react-native';
import HeaderTitle from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const openDrawer = (navigator) =>{
    navigator.openDrawer();
}

class ProvidersScreen extends Component{
    render(){
        return(
            <View>
                <HeaderTitle 
                    center={
                        <Text 
                            style={{fontWeight: 'bold', fontSize: 20, color: '#252525'}}>
                            My Resturents
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
            </View>
        )
    }
}


export default ProvidersScreen;