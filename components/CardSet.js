import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';


const CardSet = ({items}) => (
    <ScrollView>
        <View style={styles.container}>
            {
                items.map(item => 
                    <View 
                        style={styles.cardStyle}
                        key={item.title}>
                        <Card                          
                            {...item}>
                        </Card>
                    </View>
                )
            }
        </View>
    </ScrollView>
    
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#E1E2E1',
    },
    cardStyle: {//borde por cada item
        marginBottom: 20,
    }
})

CardSet.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                title: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })).isRequired,
};
export default CardSet;