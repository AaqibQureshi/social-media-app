import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from "../../constants/colors";

const ButtonComponent = ({ title, onPress , containerStyle={}}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}  style={[styles.buttonContainer, containerStyle]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 50,
        backgroundColor: COLORS.GRAY,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:8,
        alignSelf:'center'

    },
    buttonText: {
        color: COLORS.WHITE,
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 28
    },
});

export default ButtonComponent;