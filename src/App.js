import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Create from './screens/Create'
import Home from './screens/Home'
import Todo from './screens/Todo'
const Stack = createNativeStackNavigator();
const ScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Home' component = {Home} />
      <Stack.Screen name = 'Create' component = {Create} />
      <Stack.Screen name = 'Todo' component = {Todo} />
    </Stack.Navigator>
  )
}
export default App = () => {
  return(
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  )
}
