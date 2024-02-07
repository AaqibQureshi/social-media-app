import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import { colors } from "../../constants/colors";

const TextInputComponent = ({ title, onPress, inputStyle={} }) => {
    return (
        <TouchableOpacity activeOpacity={0.7}  style={[styles.input,inputStyle]} onPress={onPress}>
            <Text style={styles.inputText}>{title}</Text>
            {/*<View style={styles.logoContainer}>*/}
            {/*    <Image source={require('../../../assets/images/eye-slash.png')} style={styles.image} resizeMode={'contain'} />*/}
            {/*</View>*/}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.GRAY,
        paddingVertical: 10,
        paddingHorizontal: 110,
        borderRadius: 25,
        alignItems: 'center',
        // marginVertical: 10,
    },
    inputText: {
        color: colors.WHITE,
        fontSize: 22,
        // fontWeight: 'bold',
        // lineHeight: 28
    },
    imageContainer:{
        marginRight: 15,
        width: 24,
        height: 24,
    },
    image:{
        width: '100%',
        height: '100%',
    },
});

export default TextInputComponent;