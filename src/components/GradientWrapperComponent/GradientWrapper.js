import React from 'react';
import {View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {MAIN_GRADIANT_COLORS} from '../../constants/colors';

const GradientWrapper = ({children}) => {
    return (
        <LinearGradient style={{flex: 1}} colors={MAIN_GRADIANT_COLORS}>
            <View style={{flex: 1, marginHorizontal: 20}}>{children}</View>
        </LinearGradient>
    );
};

export default GradientWrapper;