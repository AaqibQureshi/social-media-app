import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View, TextInput} from 'react-native';
import {COLORS} from "../../constants/colors";
import {IMAGES} from "../../constants/images";

const TextInputComponent = ({
                                placeholder,
                                onPress,
                                containerStyle = {},
                                placeholderStyle = {},
                                isRightIcon = false,
                                onChangeText,
                                iconName,
                            }) => {

    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.inputContainer, containerStyle]} onPress={onPress}>
            {/*<View style={styles.textContainer}>*/}
            <TextInput style={[styles.inputText, placeholderStyle]}
                       placeholder={placeholder}
                       placeholderTextColor={COLORS.WHITE}
                       underlineColorAndroid={COLORS.TRANSPARENT}
                       onChangeText={onChangeText}
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
        paddingVertical: 8,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 8,
        borderRadius: 35,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: COLORS.WHITE,


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

export default TextInputComponent;