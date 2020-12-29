import React, {useState, useEffect} from 'react';
import {Button, Icon, Container, Title, Content, Form, Item, Input, Picker, Text, Right} from 'native-base';

const Details = (props) => {

    useEffect(() => {
        console.log(props.item);
    }, []);

    return(
        <Container>
         {/*Afficher Titre, Description, Importance. Pouvoir Supp et modifier.*/}
        </Container>
    )
};

export default Details;
