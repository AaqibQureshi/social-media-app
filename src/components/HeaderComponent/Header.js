import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_STRINGS} from "../../constants/strings";
import {COLORS} from "../../constants/colors";
import IconComponent from "../IconComponent/IconComponent";

export default function Header({
                                   headerContainer = {},
                                   isBackArrow = true,
                                   onPressBackArrow,
                                   title = '',
                                   description = ''
                               }) {
    const renderDescription = () => {
        if (description) {
            return (
                <Text
                    style={styles.descriptionText}>
                    {description}
                </Text>)
        }
        return null
    }

    return (
        <>
            <View style={[styles.headerView, headerContainer]}>
                {isBackArrow &&
                    <TouchableOpacity activeOpacity={0.3} style={styles.leftArrowView} onPress={onPressBackArrow}>
                        <IconComponent name={'md-arrow-back'} size={24}/>
                    </TouchableOpacity>
                }
                <Text style={styles.headerTextStyle}>{title}</Text>
            </View>
            {renderDescription()}
        </>
    );

}
const styles = StyleSheet.create({
    headerView: {
        // flex: 1,
        marginTop: 50,
        height: 70,
    },
    leftArrowView: {},
    headerTextStyle: {
        alignSelf: 'flex-start',
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.WHITE
    },
    descriptionText: {
        color: COLORS.WHITE,
        marginTop: 12,
        paddingRight: 10,
        lineHeight: 20,
    },
});




