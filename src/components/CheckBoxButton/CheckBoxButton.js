import {StyleSheet, TouchableOpacity, View} from "react-native";
import {COLORS} from "../../constants/colors";
import IconComponent from "../IconComponent/IconComponent";

const CheckBoxButton = ({isChecked, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <View style={styles.checkboxContainer}>
                {isChecked && <IconComponent name="checkmark-outline" size={15} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxContainer: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CheckBoxButton;