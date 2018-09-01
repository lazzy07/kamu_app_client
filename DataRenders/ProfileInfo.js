import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {InfoArea} from '../components/InfoArea/InfoArea';

class ProfileInfo extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                    <ScrollView>
                        <InfoArea 
                            topic='First Name'
                            text= 'Lasantha'
                        />
                        <InfoArea 
                            topic='Last Name'
                            text= 'Madushan'
                        />
                        <InfoArea 
                            topic='User Name'
                            text= '@lazzy07'
                        />
                        <InfoArea 
                            topic='Last Name'
                            text= 'Madushan'
                        />
                        <InfoArea 
                            topic='Location'
                            text= "Kandy"
                        />
                        <InfoArea 
                            topic='About Me'
                            text= "I'm the creator of this app, geek and an asshole who knows nothin"
                        />
                    </ScrollView>
            </View>
        )
    }
}

const styles = {

}

export default ProfileInfo;