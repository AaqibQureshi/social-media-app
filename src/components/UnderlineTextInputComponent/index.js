import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View, TextInput} from 'react-native';
import {COLORS} from "../../constants/colors";
import {IMAGES} from "../../constants/images";

const UnderlineTextInputComponent = ({
                                         placeholder,
                                         onPress,
                                         containerStyle = {},
                                         placeholderStyle = {},
                                         isRightIcon = false,
                                         onChangeText,
                                         iconName,
                                         keyboardType='default'
                                     }) => {

    return (
        <TouchableOpacity activeOpacity={0.7}
                          style={[styles.inputContainer, containerStyle]} onPress={onPress}>
            {/*<View style={styles.textContainer}>*/}
            <TextInput style={[styles.inputText, placeholderStyle]}
                       placeholder={placeholder}
                       placeholderTextColor={COLORS.WHITE}
                       underlineColorAndroid={COLORS.TRANSPARENT}
                       onChangeText={onChangeText}
                       keyboardType={keyboardType}
            />
            {/*</View>*/}
            {isRightIcon &&
                <View style={styles.imageContainer}>
                    <Image source={iconName} style={styles.image}
                           resizeMode={'contain'}/>
                </View>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        // flex:1,
        height: 50,
        minWidth: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        marginVertical: 12,
        borderStyle: 'solid',
        borderBottomWidth: 1.5,
        borderColor: COLORS.GRAY,
        // marginHorizontal: 8,

    },
    // textContainer: {
    //     flex: 1,
    // },
    inputText: {
        fontSize: 16,
        // fontWeight: 'bold',
        // lineHeight: 28,
        // textAlign: 'center',
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

export default UnderlineTextInputComponent;