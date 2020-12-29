import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Icon, Text, Right, Header, Left, SwipeRow, Container, Content, List} from 'native-base';

import AddTask from "./AddTask/AddTask";
import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import Details from "./Details/Details"

// import AppHeader from "./AppHeader/AppHeader";

function HomeScreen({navigation}) {
    const [tasks, setTasks] = useState([]);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@Task', jsonValue)
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@Task')
            setTasks(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch (e) {
            // error reading value
        }
    };

    const removeItem = taskId => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        // Store the Result
    };

    useEffect(() => {
        getData();
        console.log(tasks);
    }, []);

    return (
        <Container>
            <Header/>
            <Content scrollEnabled={false}>

                <FlatList scrollEnabled={false}
                          data={tasks}
                          renderItem={({item}) => <SwipeRow
                              leftOpenValue={75}
                              rightOpenValue={-75}
                              disableRightSwipe={true}
                              body={
                                  <Content>
                                      <TouchableOpacity
                                          onPress={() => navigation.navigate('Details')}
                                          style={{flex: 1}}>
                                          <Text style={{paddingLeft: 15}}>{item.title}{item.id}</Text>
                                      </TouchableOpacity>
                                  </Content>
                              }
                              right={
                                  <Button danger onPress={() => removeItem(item.id)}>
                                      <Icon active name="trash"/>
                                  </Button>
                              }
                          />}
                />
            </Content>
            <Right>
                <Button iconCenter bordered primary
                        onPress={() => navigation.navigate('AddTask')}>
                    <Icon name='add' primary/>
                </Button>
            </Right>
        </Container>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            {/*<AppHeader/>*/}
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={Details}/>
                <Stack.Screen name="AddTask" component={AddTask}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
