import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackPramList={
  Home: undefined
  Details: {product: Product}        //this means that in the details, we are expecting product to come that is of the datatype Product, so now lets create Product datatype, so lets create interface in index.d.ts, so remember whenever we have make some custom datatype, we have to go for making up the interface
}

//creating stack navigator!
const Stack=createNativeStackNavigator<RootStackPramList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title:"Trending Products"
        }}
        />
        <Stack.Screen 
        name='Details'
        component={Details}
        options={{
          title:"Product Details"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

