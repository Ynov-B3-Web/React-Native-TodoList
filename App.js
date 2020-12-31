import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AddTask from "./AddTask/AddTask";
import Details from "./Details/Details";
import HomeScreen from "./HomeScreen/HomeScreen";
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={Details}/>
                <Stack.Screen name="AddTask" component={AddTask}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
