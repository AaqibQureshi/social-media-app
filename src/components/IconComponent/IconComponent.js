import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../../constants/colors";

const IconComponent = ({name, size = 15, color = COLORS.WHITE}) => {
    return (
        <Ionicons name={name} size={size} color={color}/>
    );
};

export default IconComponent;