import React, {Component} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';

import {ButtonCustom} from '../../components/Button/Button';
import {TutorialScreens} from '../../data/tutorial_screens/TutorialScreens';

class TutorialScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            button : null,
        }
    }

    navigationHandle = () => {
        this.props.navigation.navigate('login');
    }

    onIndexChanged = (index) => {
        if(index === TutorialScreens.length - 1){
            this.setState({
                button : (
                    <View 
                        style={{
                            position: 'absolute', 
                            bottom: 0, 
                            right: 0, 
                            marginRight: 20, 
                            marginBottom: 40}}
                    >
                        <ButtonCustom 
                            color='#fff' 
                            large
                            title="Let's Start !" 
                            onPress={() => this.navigationHandle()}
                        />
                    </View>
                )
            })
        }
    }

    componentWillMount(){
        //this.isUserLoggedIn();
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Swiper dotColor='#7a7a7a' onIndexChanged={(index) => this.onIndexChanged(index)} loop={false} activeDotColor='#e8232d' showsPagination>
                    {TutorialScreens}
                </Swiper>
                {this.state.button}
            </View>
        );
    }
}

export default TutorialScreen;