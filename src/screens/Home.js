import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import Button from '../components/Button';
import TodoCard from '../components/TodoCard';

class Home extends Component {
    state = { 
        todoData: []
    }

    componentDidMount = () => {
        this.fetchData();
        this.willFocusSubscription = this.props.navigation.addListener(
            'focus',
            () => {
                this.fetchData();
            }
        );
    }
    
    componentWillUnmount = () => {
        this.willFocusSubscription();
    }
    
    fetchData = () => {
        axios.get('http://15.206.174.86:4000/todo').then(res => {
            const data = Object.values(res.data)
            this.setState({ todoData: data.reverse() });
        })
    }

    handleButtonPress = () => {
        this.props.navigation.navigate('Todo')
        // console.log('Button Pressed')
    }

    handleTodoPress = (id) => {
        this.props.navigation.navigate('Todo', { id })
    }

    render() { 
        return ( 
            <View style = {{ paddingHorizontal: 20, paddingTop: 20 }}>
                <Button title = '+ Add new' style = {{ width: '100%', marginBottom: 10 }} onPress = { () => this.props.navigation.navigate('Create') }/>
                {/* <Button title = 'Create' onPress = { () => this.props.navigation.navigate('Create') }/> */}
                <FlatList 
                    data = { this.state.todoData }
                    keyExtractor = {(item) => item.id}
                    showsVerticalScrollIndicator = {false}
                    ListFooterComponent = {<View style = {{ marginBottom: 80 }} ></View>}
                    renderItem = {(item) => {
                        const { title, time, done, id } = item.item;
                        return (
                            <TodoCard title = { title } time = { time } done = { done } onPress = {() => this.handleTodoPress(id) } />
                        )
                    }}
                />
            </View>
        );
    }
}
 
export default Home;