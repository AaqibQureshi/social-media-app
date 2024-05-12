import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import TextInputComponent from "../../components/TextInputComponent/TextInputComponent";
import {APP_STRINGS} from "../../constants/strings";
import GradientWrapper from "../../components/GradientWrapperComponent/GradientWrapper";
import {COLORS} from "../../constants/colors";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import CheckBoxButton from "../../components/CheckBoxButton/CheckBoxButton";
import {IMAGES} from "../../constants/images";
import ButtonBottomComponent from "../../components/ButtonBottomComponent/ButtonBottomComponent";
import Header from "../../components/HeaderComponent/Header";

export default function SignUpScreen({navigation}) {
    const [rememberMe, setRememberMe] = useState(false);



    const onPressSignIn = () => {
        navigation.navigate('SignInScreen')
    }
    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <GradientWrapper>
            <View style={styles.container}>
                <Header isBackArrow={false} title={APP_STRINGS.SIGN_UP} headerContainer={styles.signUpText} />
                <View style={styles.nameInputsView}>
                    <TextInputComponent containerStyle={styles.firstNameInputStyle}
                                        placeholder={APP_STRINGS.FIRST_NAME} iconName={IMAGES.EYE_SLASH}/>
                    <TextInputComponent containerStyle={styles.firstNameInputStyle}
                                        placeholder={APP_STRINGS.LAST_NAME} iconName={IMAGES.EYE_SLASH}/>
                </View>
                <TextInputComponent placeholder={APP_STRINGS.EMAIL_PHONE_NUMBER}/>
                <TextInputComponent placeholder={APP_STRINGS.PASSWORD} isRightIcon={true} iconName={IMAGES.EYE_SLASH}/>
                <TextInputComponent placeholder={APP_STRINGS.CONFIRM_PASSWORD} isRightIcon={true}
                                    iconName={IMAGES.EYE_SLASH}/>
                <Text style={styles.birthDateText}>{APP_STRINGS.BIRTH_OF_DATE}</Text>
                <View style={styles.birthMonthYearInputView}>
                    <TextInputComponent containerStyle={styles.birthDateInputContainer}
                                        placeholder={APP_STRINGS.DATE_MONTH} isRightIcon={true}
                                        iconName={IMAGES.ARROW_BOTTOM}/>
                    <TextInputComponent containerStyle={styles.birthYearInputContainer}
                                        placeholder={APP_STRINGS.YEAR}
                                        isRightIcon={true} iconName={IMAGES.ARROW_BOTTOM}/>
                </View>
                <Text style={styles.genderText}>{APP_STRINGS.GENDER}</Text>
                <View style={styles.birthMonthYearInputView}>
                    <TextInputComponent containerStyle={styles.mailInputContainer}
                                        placeholder={APP_STRINGS.MALE}/>
                    <TextInputComponent containerStyle={styles.femaleInputContainer}
                                        placeholder={APP_STRINGS.FEMALE}
                    />
                    <TextInputComponent containerStyle={styles.othersInputContainer}
                                        placeholder={APP_STRINGS.OTHERS}
                    />
                </View>
                <View style={styles.agreeTextView}>
                    <CheckBoxButton isChecked={rememberMe} onPress={toggleRememberMe}/>
                    <Text style={styles.agreeTextStyle}>
                        {APP_STRINGS.I_AGREE_WITH}{' '}
                        <Text style={styles.privacyText}>
                            {APP_STRINGS.PRIVACY}{' '}
                        </Text>
                        and{' '}
                        <Text style={styles.policyText}>
                            {APP_STRINGS.POLICY}
                        </Text>
                    </Text>
                </View>
                <ButtonBottomComponent title={APP_STRINGS.SIGN_UP}/>
                <View style={styles.alreadyHaveAccountView}>
                    <Text style={styles.alreadyHaveAccountText}>
                        {APP_STRINGS.ALREADY_HAVE_AN_ACCOUNT}
                    </Text>
                    <ButtonComponent title={APP_STRINGS.SIGN_IN} buttonTextStyle={{color:COLORS.BLUE}} onPress={onPressSignIn} />
                </View>
            </View>
        </GradientWrapper>
    );

}



