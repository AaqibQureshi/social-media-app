import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 155,
        // marginHorizontal: 20,
    },
    logoContainer: {
        alignSelf: 'center',
        width: 100,
        height: 50,
    },
    image: {
        width: '100%',
        height: '100%',
    },

    signIn: {
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 30,
        textAlign: 'right',
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.WHITE
    },
    rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    rememberMeTextStyle: {
        color: COLORS.WHITE,
        fontSize: 17,
        marginRight: 16,
    },
    forgotTextStyle: {
        color: COLORS.BLUE,
        fontSize: 17,
    },
    orSignInTextStyle: {
        alignSelf: 'center',
        color: COLORS.WHITE,
        fontSize: 17,
        marginVertical: 10,
    },
    socialIconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIconStyle: {
        width: 32,
        height: 32,
        borderRadius: 8,
        marginHorizontal: 12,
        marginVertical: 10,
    },
    bottomTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    dontHaveAccountTextStyle: {
        color: COLORS.WHITE,
        fontSize: 17,
    },
    signInLinkStyle: {
        color: COLORS.BLUE,
        fontSize: 17,
    },
});

export default styles;