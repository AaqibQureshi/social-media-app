import {Image, ImageBackground, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from "./styles";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import {APP_STRINGS} from "../../constants/strings";
import {BOTTOM_GRADIANT_COLORS} from "../../constants/colors";
import {IMAGES} from "../../constants/images";
import ImageComponent from "../../components/ImageComponent/ImageComponent";


export default function WelcomeScreen({navigation}) {
    const onPressGetStarted = () => {
        navigation.navigate('SignInScreen')
    }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='cover' source={IMAGES.WELCOME_SCREEN}
                             style={styles.backgroundImage}>
                <LinearGradient colors={BOTTOM_GRADIANT_COLORS.map(item => item.color)}
                                locations={BOTTOM_GRADIANT_COLORS.map(item => parseFloat(item.percent) / 100)}
                                style={styles.bottomContainer}>
                    <Text style={styles.welcomeText}>{APP_STRINGS.WELCOME}</Text>
                    <Text style={styles.subTitle}>{APP_STRINGS.EXPERIENCE_A_WONDERFUL_MOMENT_WITH}
                        <View style={styles.logoContainer}>
                            <ImageComponent source={IMAGES.APP_LOGO} style={styles.logoImage}/>
                        </View>
                    </Text>
                    <ButtonComponent title={APP_STRINGS.GET_STARTED} onPress={onPressGetStarted}/>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

