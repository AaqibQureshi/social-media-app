import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signUpText: {
        marginHorizontal: 10,
    },
    nameInputsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    firstNameInputStyle: {
        width: '45%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    birthDateText: {
        fontSize: 17,
        color: COLORS.WHITE,
        marginLeft: 10,
        marginVertical: 5
    },
    birthMonthYearInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    birthDateInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        paddingHorizontal: 15,
    },
    birthYearInputContainer: {
        width: '40%',
        paddingHorizontal: 20,
    },
    genderText: {
        fontSize: 17,
        color: COLORS.WHITE,
        marginLeft: 10,
        marginVertical: 5
    },
    mailInputContainer:{
        width: '25%',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    femaleInputContainer:{
        width: '30%',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    othersInputContainer:{
        width: '30%',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    agreeTextView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginVertical: 5,
    },
    agreeTextStyle:{
        fontSize: 17,
        color: COLORS.WHITE,
        marginLeft: 10,
    },
    privacyText:{
        fontSize: 17,
        color: COLORS.BLUE,
    },
    policyText:{
        fontSize: 17,
        color: COLORS.BLUE,
    },
    alreadyHaveAccountView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    alreadyHaveAccountText:{
        fontSize: 17,
        color: COLORS.WHITE,
    },
    signInText:{
        fontSize: 17,
        color: COLORS.BLUE,
    },
});

export default styles;