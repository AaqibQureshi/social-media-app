import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from "../../constants/colors";

const ButtonComponent = ({ title, onPress , buttonStyle={}}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}  style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.GRAY,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.WHITE,
        fontSize: 22,
        // fontWeight: 'bold',
        lineHeight: 28
    },
});

export default ButtonComponent;