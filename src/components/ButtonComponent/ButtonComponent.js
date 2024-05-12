import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from "../../constants/colors";

const ButtonComponent = ({title, onPress, containerStyle = {}, buttonTextStyle={}}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={containerStyle} onPress={onPress}>
            <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        color: COLORS.WHITE,
        fontSize: 17,
    },
});

export default ButtonComponent;