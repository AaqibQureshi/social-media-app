import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View, TextInput} from 'react-native';
import {COLORS} from "../../constants/colors";
import {IMAGES} from "../../constants/images";

const TextInputComponent = ({placeholder, onPress, containerStyle = {}, isLeftIcon = false}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.inputContainer, containerStyle]} onPress={onPress}>
            <View style={styles.textContainer}>
                <TextInput style={styles.inputText}
                           placeholder={placeholder}
                           placeholderTextColor={COLORS.WHITE}
                           underlineColorAndroid={COLORS.TRANSPARENT}
                           onChangeText={() => {
                           }}
                />
            </View>
            {isLeftIcon &&
                <View style={styles.imageContainer}>
                    <Image source={IMAGES.EYE_SLASH} style={styles.image}
                           resizeMode={'contain'}/>

                </View>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginVertical: 8,
        borderRadius: 35,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: COLORS.WHITE,

    },
    textContainer: {
        flex: 1,
    },
    inputText: {
        fontSize: 22,
        // fontWeight: 'bold',
        // lineHeight: 28
    },
    imageContainer: {
        width: 24,
        height: 24,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default TextInputComponent;