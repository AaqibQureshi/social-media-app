import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import {AppNavigator} from "./src/navigation/AppNavigator";
import {COLORS} from "./src/constants/colors";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
    return (
        // <NavigationContainer>
        // <LinearGradient  colors={COLORS}>
        <View style={styles.container}>
              <AppNavigator />
                {/*<StatusBar style="auto" />*/}
        </View>
        // </LinearGradient>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
