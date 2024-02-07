import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from "./styles";
import TextInputComponent from "../../components/TextInputComponent/TextInputComponent";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "../../constants/colors";



export default function SignInScreen() {
    return (
            <LinearGradient style={styles.container}
                            colors={COLORS}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/images/ciao.png')} style={styles.image} resizeMode={'contain'} />
                </View>
                <Text style={styles.signIn}>Sign in</Text>
                <TextInputComponent title={'Email/phone number'} buttonStyle={styles.textInput}/>
                {/*<TextInputComponent title={'Password'}/>*/}
            </LinearGradient>
    );
}

