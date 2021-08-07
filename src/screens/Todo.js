import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

class Todo extends Component {
    state = { 
        todoData: []
    }

    componentDidMount = () => {
        axios.get(`http://15.206.174.86:4000/todo/${this.props.route.params.id}`).then(res => {
            this.setState({ todoData: res.data });
        })
    }

    render() {
        const { title, description, time, done, id } = this.state.todoData;
        return ( 
            <View>
                {!!this.state.todoData && (
                    <View>
                        <Text>{ title }</Text>
                        <Text>{ description }</Text>
                        <Text>{ time }</Text>
                        <Text>{ done }</Text>
                    </View>
                )}
            </View>
        );
    }
}
 
export default Todo;