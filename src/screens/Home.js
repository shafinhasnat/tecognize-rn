import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import Button from '../components/Button';
import TodoCard from '../components/TodoCard';

class Home extends Component {
    state = { 
        todoData: [],
        loading: false
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
        this.setState({ loading: true });
        axios.get('http://15.206.174.86:4000/todo').then(res => {
            const data = Object.values(res.data)
            this.setState({ todoData: data.reverse(), loading: false });
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
                <FlatList 
                    data = { this.state.todoData }
                    keyExtractor = {(item) => item.id}
                    showsVerticalScrollIndicator = {false}
                    onRefresh={this.fetchData}
                    refreshing={this.state.loading}
                    ListFooterComponent = {<View style = {{ marginBottom: 80 }} ></View>}
                    renderItem = {(item) => {
                        const { title, time, done, id } = item.item;
                        return (
                            <TodoCard title = { title } time = { `${time.slice(11, 19)}  |  ${time.slice(0, 10)}` } done = { done } onPress = {() => this.handleTodoPress(id) } />
                        )
                    }}
                />
            </View>
        );
    }
}
 
export default Home;