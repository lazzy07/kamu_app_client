import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HeaderTitle from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const openDrawer = (navigator) =>{
    navigator.openDrawer();
}

class OffersScreen extends Component{

    render(){
        return (
            <View>
                <HeaderTitle 
                    center={
                        <Text 
                            style={{fontWeight: 'bold', fontSize: 20, color: '#252525'}}>
                            Offers
                        </Text>
                    }
                    left={<Icon name="ios-menu" size={24} 
                        onPress={() => openDrawer(this.props.navigation)}
                    />}
                    right={
                        <Icon name="ios-search" size={24}/>
                    }
                />
                <Text>
                    OffersScreen
                </Text>
            </View>
        )
    }
}

export default OffersScreen;