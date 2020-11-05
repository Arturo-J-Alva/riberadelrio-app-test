import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import Membresias from './views/membresias'
import Cronograma from './views/cronograma'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Membresias"
            screenOptions={{
                headerStyle:{
                    backgroundColor:"#FFDA00",
                },
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                headerTitleAlign:"center",
                headerTintColor:"#000"
            }}>
                <Stack.Screen name="Membresias" component={Membresias}
                options={{
                    title:"Membresías"
                }}/>
                <Stack.Screen name="Cronograma" component={Cronograma}
                options={{
                    title:"Cronograma"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
