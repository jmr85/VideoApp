import React from 'react';
import {View, Text} from 'react-native';

const Items = ['Item 1','Item 2','Item 3']

const CardSet = () => (
    <View>
        {
            Items.map(item => <Text>{item}</Text>)
        }
    </View>
);

export default CardSet;