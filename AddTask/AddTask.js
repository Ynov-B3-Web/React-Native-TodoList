import React from 'react';
import {View} from "react-native";
import {Button, Text} from 'native-base';

const AddTask = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Here you can add a Task ! 🥳</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default AddTask;
