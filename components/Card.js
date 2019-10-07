import React from 'react';
import PropTypes from 'prop-types';
import {View, 
    Text, 
    Image, 
    TouchableHighlight, 
    StyleSheet} from 'react-native';

const Card = ({title, image, description}) => {
    const imageSource = {
        uri: image
    };
    const onPressButton = () => {
        console.log("Se preciono el boton");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Image style={styles.mainImage} source={imageSource} />
            <Text style={styles.description}>
                {description}
            </Text>
            <TouchableHighlight 
                style={styles.button}
                underlayColor="#EEE"
                onPress={onPressButton}>
                <Text style={styles.buttonText}>Ver mas</Text>
            </TouchableHighlight>
        </View>
    )
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: "#0F0",
        padding: 10,
    },
    title: {
        fontSize: 30
    },
    mainImage: {
        height: 190,      
    },
    button: {
        height: 30,
        marginTop: 10,
        backgroundColor: "#999", 
    },
    buttonText: {
        fontSize: 20,
        color: "#222",
    },
    description: {
        marginLeft: 10,
        fontSize: 13,
        color: "#EEE",
    }
});

export default  Card;// default porque va ser el unico componente generado