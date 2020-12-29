import React, {useState} from 'react';
import {Button, Icon, Container, Title, Content, Form, Item, Input, Picker, Text, Right} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTask = ({navigation}) => {
    const [TaskList, setTaskList] = useState([]);
    const [state, setState] = useState({
        id: 0,
        title: "",
        description: "",
        importance: "",
    });

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
            setTaskList(jsonValue != null ? JSON.parse(jsonValue) : null);
        } catch (e) {
            // error reading value
        }
    };

    const addTask = () => {
        getData().then(r =>
            setTaskList(TaskList => [...TaskList, state])
        );
    };

    const saveAndNavigate = async () => {
        addTask();
        setState({...state, id: TaskList.length + 1});
        await storeData(TaskList).then(
            // navigation.goBack()
        );
    };

    return (
        <Container style={{justifyContent: 'center'}}>
            <Title style={{alignItems: 'center'}}>Here you can add a Task ! 🥳</Title>
            <Button
                title="Go to Details"
                onPress={() => navigation.goBack()}
            />
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Task Title"
                               value={state['title']}
                               onChangeText={(value) => setState({...state, title: value})}
                        />
                    </Item>
                    <Item>
                        <Input placeholder="Task Description"
                               value={state['description']}
                               onChangeText={(value) => setState({...state, description: value})}
                        />
                    </Item>
                    <Item last picker>
                        <Picker
                            mode="dropdown"
                            style={{width: undefined}}
                            placeholder="Select the type of emergency"
                            selectedValue={state['importance']}
                            onValueChange={(value) => setState({...state, importance: value})}
                        >
                            <Picker.Item label="🟢 Minor" value="Minor"/>
                            <Picker.Item label="🔴 Urgent" value="Urgent"/>
                            <Picker.Item label="🔥 Express" value="Express"/>
                            <Picker.Item label="🧠 Do not forget" value="Do not forget"/>
                        </Picker>
                    </Item>
                    <Content>
                        <Button iconCenter bordered primary
                                onPress={() => saveAndNavigate()}>
                            <Text>Save new task</Text>
                            <Icon name='add' primary/>
                        </Button>
                    </Content>
                </Form>
            </Content>
        </Container>
    );
};

export default AddTask;
