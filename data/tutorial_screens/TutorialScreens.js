import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {DangerZone} from 'expo';
const { Lottie } = DangerZone;


import BackgroundLight from '../../components/repeating_background/BackgroundLight';
import BackgroundDark from '../../components/repeating_background/BackgroundDark';



const winHeight = Dimensions.get('window').height;
const winWidth =  Dimensions.get('window').width;

const styles={
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: winHeight,
        width: winWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}


let Screen1 = (
    <View key={1} style={{height: winHeight, width: winWidth}}>
        <BackgroundLight/>
        <View style={styles.contentContainer}>
            <View style={{
                alignItems: 'center',
            }}>
                <Image 
                source={require('../../icons/logo/kamu_logo_small.png')}
                style={{
                    width: 200,
                    height: 120,
                    resizeMode: 'cover',
                }}/>
                <Text style={{
                    marginTop: 30,
                    fontSize: 24,
                    color: '#252525',
                    fontWeight: 'bold'
                }}>
                    Connecting Food Lovers Together
                </Text>
                <Text style={{
                    margin: 20,
                    fontSize: 18,
                    color: '#252525',
                    textAlign: 'center'
                }}>
                    Kamu is the best app to find best resturents around you, share your food experiences with your friends and to find food offers!
                </Text>
            </View>
        </View>
    </View>
)

let Screen2 = (
    <View key={2} style={{height: winHeight, width: winWidth}}>
        <BackgroundDark/>
        <View style={styles.contentContainer}>
            <View style={{
                alignItems: 'center',
            }}>
                <Image 
                source={require('../../images/tutorial/map_icon.png')}
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'cover',
                }}/>
                <Text style={{
                    marginTop: 30,
                    fontSize: 24,
                    color: '#fff',
                    fontWeight: 'bold'
                }}>
                    Find Offers Near You
                </Text>
                <Text style={{
                    margin: 20,
                    fontSize: 18,
                    color: '#fff',
                    textAlign: 'center'
                }}>
                    Wherever you go, app will help you to find resturents near you using the map view and advanced search engine, and offers you can get!
                </Text>
            </View>
        </View>
    </View>
)

let Screen3 = (
    <View key={3} style={{height: winHeight, width: winWidth}}>
        <BackgroundLight/>
        <View style={styles.contentContainer}>
            <View style={{
                alignItems: 'center',
            }}>
                <Image 
                source={require('../../images/tutorial/message_icon.png')}
                style={{
                    width: 230,
                    height: 190,
                    resizeMode: 'cover',
                }}/>
                <Text style={{
                    marginTop: 30,
                    fontSize: 24,
                    color: '#252525',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Ask for more Information
                </Text>
                <Text style={{
                    margin: 20,
                    fontSize: 18,
                    color: '#252525',
                    textAlign: 'center'
                }}>
                    Use the in app message system to ask more information about offers and also to message your friends
                </Text>
            </View>
        </View>
    </View>
)


let Screen4 = (
    <View key={4} style={{height: winHeight, width: winWidth}}>
        <BackgroundDark/>
        <View style={styles.contentContainer}>
            <View style={{
                alignItems: 'center',
            }}>
                <Image 
                source={require('../../images/tutorial/price_icon.png')}
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'cover',
                }}/>
                <Text style={{
                    marginTop: 30,
                    fontSize: 24,
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Compare Prices and find the best resturent
                </Text>
                <Text style={{
                    margin: 20,
                    fontSize: 18,
                    color: '#fff',
                    textAlign: 'center'
                }}>
                    Use map view to find nearest resturents and compare prices using search filters
                </Text>
            </View>
        </View>
    </View>
)

export const TutorialScreens = [
    Screen1,
    Screen2,
    Screen3,
    Screen4
]