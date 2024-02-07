import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};