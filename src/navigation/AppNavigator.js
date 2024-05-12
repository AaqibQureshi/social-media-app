import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerifyPhoneNumberScreen from "../screens/VerifyPhoneNumberScreen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'WelcomeScreen'}>
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{title: 'Welcome Screen', headerShown:false}}
                />
                <Stack.Screen name="SignInScreen" component={SignInScreen} options={{title: 'Sign In', headerShown:false}} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{title: 'Sign Up', headerShown:false}} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{title: 'Forgot Password', headerShown:false}} />
                <Stack.Screen name="VerifyPhoneNumberScreen" component={VerifyPhoneNumberScreen} options={{title: 'Verify Your Password', headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};