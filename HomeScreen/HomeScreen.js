import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Icon, Text, Footer, FooterTab, Right, Header, Left, SwipeRow, Container, Content, List} from 'native-base';

import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";

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

    const removeItem = async taskId => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        await storeData(updatedTasks);
    };

    useEffect(() => {
        getData().then();
    });

    return (
        <Container>
            <Header/>
            <Content>
                <FlatList scrollEnabled={false}
                          data={tasks}
                          renderItem={({item}) => <SwipeRow
                              key={item.id + item.name}
                              leftOpenValue={75}
                              rightOpenValue={-75}
                              disableRightSwipe={true}
                              body={
                                  <Content>
                                      <TouchableOpacity
                                          onPress={() => navigation.navigate('Details', {task: item})}
                                          style={{flex: 1, alignItems: 'center'}}>
                                          <Text style={{paddingLeft: 15}}>{item.title} - {item.importance}</Text>
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
                <Text>Pro tips, Swipe to delete 😉</Text>
            </Content>
            <Footer>
                <FooterTab>
                <Button style={{margin: 10}} iconCenter bordered primary
                        onPress={() => navigation.navigate('AddTask')}>
                    <Icon name='add' primary/>
                </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}

export default HomeScreen;
