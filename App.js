import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Icon, Text} from 'native-base';

import AddTask from "./AddTask/AddTask";

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button iconCenter bordered primary style={{marginLeft: 280, marginTop: 500}}
                    onPress={() => navigation.navigate('AddTask')}>
                <Icon name='add' primary/>
            </Button>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="AddTask" component={AddTask}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
