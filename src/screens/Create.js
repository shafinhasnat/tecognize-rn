import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Button from '../components/Button';
import IonIcons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

class Create extends Component {
    state = { 
        title: '',
        description: '',
        done: false
    }
    // componentDidUpdate = () => {
    //     console.log(this.state.description)
    // }
    handleSubmit = () => {
        console.log(this.state)
        axios.post('http://15.206.174.86:4000/todo', this.state).then((res) => console.log(res))
    }
    render() { 
        const { title, description, done } = this.state;
        return ( 
            <View style = {{ paddingHorizontal: 20, paddingTop: 20, justifyContent: 'space-between' }} >
                <View style = {{  }} >
                    <View style = {{ marginBottom: 40 }} >
                        <Text style = {{ fontSize: 20, color: '#707070' }} >Title</Text>
                        <TextInput style = {{ borderBottomWidth: 1, borderColor: '#108377', fontSize: 16 }} onChangeText = { (e) => this.setState({ title: e }) } />
                    </View>
                    <View style = {{ marginBottom: 40 }} >
                        <Text style = {{ fontSize: 20, color: '#707070' }} >Description</Text>
                        <TextInput style = {{ borderBottomWidth: 1, borderColor: '#108377', fontSize: 16 }}  onChangeText = { (e) => this.setState({ description: e }) }/>
                    </View>
                    <TouchableOpacity style = {{ flexDirection: 'row' }} onPress = { () => {this.setState((prev) => ({ done: !prev.done }) )} } >
                        <Text style = {{ fontSize: 20, color: '#707070', marginRight: 10 }} >Done</Text>
                        <IonIcons name = { !done ? 'checkbox-outline' : 'checkbox' } size = {27} color = '#108377' />
                    </TouchableOpacity>
                </View>
                <View style = {{ marginTop: 40 }} >
                    <Button title = 'Submit' style = {{ width: '100%' }} onPress = { this.handleSubmit } />
                </View>
            </View>
        );
    }
}
 
export default Create;