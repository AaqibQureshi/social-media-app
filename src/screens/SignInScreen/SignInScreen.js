import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import TextInputComponent from "../../components/TextInputComponent/TextInputComponent";
import {APP_STRINGS} from "../../constants/strings";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import {IMAGES} from "../../constants/images";
import GradientWrapper from "../../components/GradientWrapperComponent/GradientWrapper";
import CheckBoxButton from "../../components/CheckBoxButton/CheckBoxButton";
import ButtonBottomComponent from "../../components/ButtonBottomComponent/ButtonBottomComponent";
import {COLORS} from "../../constants/colors";


export default function SignInScreen({navigation}) {
    const [rememberMe, setRememberMe] = useState(false);

    const onPressSingUp = () => {
        navigation.navigate('SignUpScreen')
    }
    const onPressForgotPassword = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <GradientWrapper>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/images/ciao.png')} style={styles.image}
                           resizeMode={'contain'}/>
                </View>
                <Text style={styles.signIn}>{APP_STRINGS.SIGN_IN}</Text>
                <TextInputComponent placeholder={APP_STRINGS.EMAIL_PHONE_NUMBER}/>
                <TextInputComponent placeholder={APP_STRINGS.PASSWORD} isRightIcon={true} iconName={IMAGES.EYE_SLASH}/>
                <View style={styles.rememberForgotContainer}>
                    <CheckBoxButton isChecked={rememberMe} onPress={toggleRememberMe}/>
                    <Text style={styles.rememberMeTextStyle}>{APP_STRINGS.REMEMBER_ME}</Text>
                    <ButtonComponent buttonTextStyle={styles.forgotTextStyle} title={APP_STRINGS.FORGOT_PASSWORD} onPress={onPressForgotPassword} />
                </View>
                <ButtonBottomComponent title={APP_STRINGS.SIGN_IN}/>
                <Text style={styles.orSignInTextStyle}>{APP_STRINGS.OR_SIGN_IN_WITH}</Text>
                <View style={styles.socialIconContainer}>
                    <ImageComponent source={IMAGES.FACEBOOK} style={styles.socialIconStyle}/>
                    <ImageComponent source={IMAGES.TWITTER} style={styles.socialIconStyle}/>
                    <ImageComponent source={IMAGES.GOOGLE} style={styles.socialIconStyle}/>
                </View>
                <View style={styles.bottomTextView}>
                    <Text style={styles.dontHaveAccountTextStyle}>{APP_STRINGS.DONT_HAVE_AN_ACCOUNT}</Text>
                    <ButtonComponent style={styles.signInLinkStyle} title={APP_STRINGS.SIGN_UP}
                                     onPress={onPressSingUp} buttonTextStyle={{color:COLORS.BLUE}}/>
                </View>
            </View>
        </GradientWrapper>
    );

}



