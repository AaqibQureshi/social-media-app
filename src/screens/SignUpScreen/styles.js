import {StyleSheet} from "react-native";
import {COLORS} from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signUpText: {
        marginTop: 60,
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.WHITE
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
        marginLeft: 5,
        marginVertical: 10,
    },
    agreeTextStyle:{
        fontSize: 17,
        color: COLORS.WHITE,
        marginLeft: 10,
        marginVertical: 5

    },
    privacyText:{
        fontSize: 17,
        color: COLORS.BLUE,
        marginLeft: 10,
        marginVertical: 5
    },
    policyText:{
        fontSize: 17,
        color: COLORS.BLUE,
        marginLeft: 10,
        marginVertical: 5
    },
});

export default styles;