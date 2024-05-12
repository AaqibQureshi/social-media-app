import React, {useState} from 'react';
import {View} from 'react-native';
import styles from "./styles";
import {APP_STRINGS} from "../../constants/strings";
import GradientWrapper from "../../components/GradientWrapperComponent/GradientWrapper";
import Header from "../../components/HeaderComponent/Header";
import UnderlineTextInputComponent from "../../components/UnderlineTextInputComponent";
import ButtonBottomComponent from "../../components/ButtonBottomComponent/ButtonBottomComponent";

export default function ForgotPasswordScreen({navigation}) {
    const [rememberMe, setRememberMe] = useState(false);

    const onPressArrowIcon = () => {
        navigation.goBack()

    };

    const onPressForgotPassword = () => {
        navigation.navigate('VerifyPhoneNumberScreen')
    };

    return (
        <GradientWrapper>
            <View style={styles.container}>
                <Header title={APP_STRINGS.FORGOT_PASSWORD} onPressBackArrow={onPressArrowIcon}
                        description={APP_STRINGS.ENTER_YOUR_EMAIL_AND_WE_WILL_SEND_YOU_THE_INSTRUCTIONS}/>
                <UnderlineTextInputComponent placeholder={APP_STRINGS.ENTER_YOUR_EMAIL_ADDRESS}/>
                <ButtonBottomComponent containerStyle={styles.recoverPasswordButton}
                                       title={APP_STRINGS.RECOVER_PASSWORD} onPress={onPressForgotPassword}/>
            </View>
        </GradientWrapper>
    );

}



