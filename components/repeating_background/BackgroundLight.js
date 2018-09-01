import React,{Component} from 'react';
import {View, Image, Dimensions} from 'react-native';

export default class Background extends Component{
    render(){
        let images = [], imageWidth=180, winWidth=Dimensions.get('window').width;
        for(var i=0;i<Math.ceil(winWidth/imageWidth);i++){
            images.push((
                <Image key={i} source={require('../../images/backgrounds/pattern_light.png')} style={{
                    width: imageWidth,
                    height: imageWidth
                }} />
            ))
        }

        let views = [], imageHeight=180, winHeight=Dimensions.get('window').height;
        for(var i=0;i<Math.ceil(winHeight/imageHeight);i++){
            views.push((
                <View key={i} style={{flexDirection:'row'}}>
                    {[images]}
                </View>
            ))
        }

        return(
            <View style={{
                flex: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: winHeight,
                    height: winHeight
            }}>
                {[views]}
            </View>
        )
    }
}