import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const TodoCard = (props) => {
    const { style, title, time, done, onPress } = props;
    return ( 
        <TouchableOpacity style = {[{ backgroundColor: done ? '#27ae60' : '#34495e', height: 90, width: '100%', borderRadius: 10, justifyContent: 'center', paddingHorizontal: 10, marginVertical: 5 }, style]} onPress = { onPress } >
            <View style = {{}} >
                <Text style = {{ fontSize: 24, fontWeight: 'bold', color: '#fff' }} >{title}</Text>
                <Text style = {{ fontSize: 16, color: '#fff' }} >{time}</Text>
            </View>
        </TouchableOpacity>
     );
}
 
export default TodoCard;