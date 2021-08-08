import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native'
import Button from '../components/Button';
class Todo extends Component {
    state = { 
        todoData: {}
    }

    componentDidMount = () => {
        axios.get(`http://15.206.174.86:4000/todo/${this.props.route.params.id}`).then(res => {
            this.setState({ todoData: res.data });
        })
    }

    handleDelete = () => {
        Alert.alert(
          "Delete",
          `Are you sure you want to delete todo: ${this.state.todoData.title}`,
          [
            {
              text: "Cancel",
            },
            { text: "Delete", onPress: () => {
                axios.delete(`http://15.206.174.86:4000/todo/${this.props.route.params.id}`).then(res => {
                    if (res.status === 200) {
                        this.props.navigation.goBack();
                    }
                })
            } }
          ]
        );
    }

    render() {
        const { title, description, time, done, id } = this.state.todoData;
        return ( 
            <View>
                {!!Object.keys(this.state.todoData).length && (
                    <View style = {{ padding: 20 }} >
                        <Text style = {{ fontWeight: 'bold', marginBottom: 10 }} >{ `${time.slice(11, 19)}  |  ${time.slice(0, 10)}` }</Text>
                        <Text style = {{ fontSize: 24, fontWeight: 'bold',  }} >{ title }</Text>
                        <Text style = {{ fontSize: 20 }} >{ description }</Text>
                        <Text>{ done }</Text>
                        <Button title = 'Delete' style = {{ width: '100%', backgroundColor: '#c0392b' }} onPress = { this.handleDelete } />
                    </View>
                )}
            </View>
        );
    }
}
 
export default Todo;