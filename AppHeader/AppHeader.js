import React from 'react';
import {Body, Button, Icon, Left, Right, Header, Title} from 'native-base';

const AppHeader = () => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='arrow-back'/>
                </Button>
            </Left>
            <Body>
                <Title>Reactive List</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='menu'/>
                </Button>
            </Right>
        </Header>
    );
};

export default AppHeader;
