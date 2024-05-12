import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from "./styles";
import {APP_STRINGS} from "../../constants/strings";
import GradientWrapper from "../../components/GradientWrapperComponent/GradientWrapper";
import Header from "../../components/HeaderComponent/Header";
import UnderlineTextInputComponent from "../../components/UnderlineTextInputComponent";
import ButtonBottomComponent from "../../components/ButtonBottomComponent/ButtonBottomComponent";

export default function VerifyPhoneNumberScreen({navigation}) {

    const onPressArrowIcon = () => {
        navigation.goBack()
    };

    const onPressNext = () => {
        // navigation.goBack()
    };

    return (
        <GradientWrapper>
            <View style={styles.container}>
                <Header title={APP_STRINGS.VERIFY_YOUR_NUMBER} onPressBackArrow={onPressArrowIcon}
                        description={APP_STRINGS.PLEASE_ENTER_YOUR_COUNTRY_AND_YOUR_PHONE_NUMBER}/>
                <View style={styles.inputsView}>
                    <UnderlineTextInputComponent placeholder={'Country'} containerStyle={{width: '30%'}}/>
                    <UnderlineTextInputComponent placeholder={'+1234567'} containerStyle={{width: '60%'}}
                                                 placeholderStyle={{letterSpacing: 1}} keyboardType={'phone-pad'}/>
                </View>

                <ButtonBottomComponent containerStyle={{marginTop: 100}} title={APP_STRINGS.NEXT}
                                       onPress={onPressNext}/>
            </View>
        </GradientWrapper>
    );

}



