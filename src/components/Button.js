import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
const Button = (props) => {
    const { title, onPress, style, disabled } = props;
    return ( 
        <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity disabled = { disabled } style = {[{ height: 50, backgroundColor: '#108377', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }, style]} onPress = { onPress }>
                <Text style = {{ fontSize: 20, color: '#fff' }}>
                    { title }
                </Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default Button;