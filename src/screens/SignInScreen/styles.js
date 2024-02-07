import {StyleSheet} from "react-native";
import {COLORS, colors} from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 155

    },
    logoContainer:{
        width: 100,
        height: 50,
    },
    image:{
        width: '100%',
        height: '100%',
    },

    signIn:{
        alignSelf:'flex-start',
        marginHorizontal: 40,
        marginVertical: 30,
        textAlign: 'right',
        fontSize:30,
        fontWeight:'bold',
        color: colors.WHITE
    },
});

export default styles;