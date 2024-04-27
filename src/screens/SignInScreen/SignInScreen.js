import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import TextInputComponent from "../../components/TextInputComponent/TextInputComponent";
import {LinearGradient} from "expo-linear-gradient";
import {MAIN_GRADIANT_COLORS} from "../../constants/colors";
import {APP_STRINGS} from "../../constants/strings";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import {IMAGES} from "../../constants/images";
import GradientWrapper from "../../components/GradientWrapperComponent/GradientWrapper";
import CheckBoxButton from "../../components/CheckBoxButton/CheckBoxButton";


export default function SignInScreen() {
    const [rememberMe, setRememberMe] = useState(false);

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
                <Text style={styles.signIn}>Sign in</Text>
                <TextInputComponent placeholder={APP_STRINGS.EMAIL_PHONE_NUMBER}/>
                <TextInputComponent placeholder={APP_STRINGS.PASSWORD} isLeftIcon={true}/>
                <View style={styles.rememberForgotContainer}>
                    <CheckBoxButton isChecked={true} onPress={toggleRememberMe}/>
                    <Text style={styles.rememberMeTextStyle}>{APP_STRINGS.REMEMBER_ME}</Text>
                    <Text style={styles.forgotTextStyle}>{APP_STRINGS.FORGOT_PASSWORD}</Text>
                </View>
                <ButtonComponent title={APP_STRINGS.SIGN_IN}/>
                <Text style={styles.orSignInTextStyle}>{APP_STRINGS.OR_SIGN_IN_WITH}</Text>
                <View style={styles.socialIconContainer}>
                    <ImageComponent source={IMAGES.FACEBOOK} style={styles.socialIconStyle}/>
                    <ImageComponent source={IMAGES.TWITTER} style={styles.socialIconStyle}/>
                    <ImageComponent source={IMAGES.GOOGLE} style={styles.socialIconStyle}/>
                </View>
                <View style={styles.bottomTextView}>
                    <Text style={styles.dontHaveAccountTextStyle}>{APP_STRINGS.DONT_HAVE_AN_ACCOUNT}</Text>
                    <Text style={styles.signInLinkStyle}>{APP_STRINGS.SIGN_IN}</Text>

                </View>
            </View>
        </GradientWrapper>
    );

}



