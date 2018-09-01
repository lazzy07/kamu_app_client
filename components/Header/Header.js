import React, {Component} from 'react';
import {Header} from 'react-native-elements';


class HeaderTitle extends Component{
    render(){
        return(
            <Header backgroundColor='#fff'
                      leftComponent= {this.props.left}
                      centerComponent={this.props.center}
                      rightComponent={this.props.right}     
            />
        )
    }
}

export default HeaderTitle;