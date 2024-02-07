import {Image, ImageBackground, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const COLORS= [
    {color: '#8C64D5', percent: '100%'},
    {color: '#000000', percent: '100%' },
    {color: '#FFFFFF', percent: '100%'},
    { color: '#000000', percent: '20%' },
    { color: '#CB98EB', percent: '80%' },
    { color: '#FEFDF8', percent: '100%' },
    { color: '#FEFDFB', percent: '100%' },
]

export default function WelcomeScreen({navigation}) {
   const onPressGetStarted =()=>{
       navigation.navigate('SignInScreen')
   }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='cover' source={require('../../../assets/images/welcomeScreen.png')} style={styles.backgroundImage}>
                <LinearGradient colors={COLORS.map(item => item.color)}
                                locations={COLORS.map(item => parseFloat(item.percent) / 100)}
                                style={styles.bottomContainer}>
                    <Text style={styles.welcomeText}>Welcome !</Text>
                    <Text style={styles.subTitle}>Experience a wonderful moment with
                        <View style={styles.logoContainer}>
                            <Image source={require('../../../assets/images/ciao.png')} style={styles.logoImage}
                                   resizeMode={'contain'}/>
                        </View>
                    </Text>
                    <ButtonComponent title="Get Started" onPress={onPressGetStarted} />
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

