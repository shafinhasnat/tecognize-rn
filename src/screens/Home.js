import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import Button from '../components/Button';

class Home extends Component {
    state = {  }
    handleButtonPress = () => {
        this.props.navigation.navigate('Todo')
        // console.log('Button Pressed')
    }
    render() { 
        return ( 
            <View style = {{ paddingHorizontal: 20, paddingTop: 20 }}>
                <Button title = '+ Add new' style = {{ width: '100%' }} onPress = { () => this.props.navigation.navigate('Create') }/>
                {/* <Button title = 'Create' onPress = { () => this.props.navigation.navigate('Create') }/> */}
            </View>
        );
    }
}
 
export default Home;