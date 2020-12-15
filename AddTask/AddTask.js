import React from 'react';
import {Text, View, Button} from "react-native";

const AddTask = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Here you can add a Task ! 🥳</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('AddTask')}
            />
        </View>
    );
};

export default AddTask;
