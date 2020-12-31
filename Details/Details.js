import React, {useState, useEffect} from 'react';
import {Button, Icon, Container, Title, Content, Form, Item, Input, Picker, Text, Right} from 'native-base';

const Details = ({route, navigation}) => {
    const { task } = route.params;

    return(
        <Container style={{ flex: 1, alignItems: 'center', paddingTop: 15 }}>
            <Title style={{paddingBottom: 15}}>{task.title}</Title>
            <Text>{task.description}</Text>
        </Container>
    )
};

export default Details;
