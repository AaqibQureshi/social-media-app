import {StyleSheet} from "react-native";
import {colors} from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    backgroundImage:{
        // flex:1,
        width:'100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    bottomContainer:{
        width:'100%',
        height: 280,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        // backgroundColor: colors.PURPLE,
        justifyContent: 'space-evenly',
        paddingHorizontal:40,
    },
    welcomeText:{
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.WHITE,
        // textAlign: "justify"

    },
    subTitle:{
        fontSize: 20,
        fontWeight: 'normal',
        color: colors.WHITE,
        lineHeight: 28,
        paddingEnd: 20,
    },
    logoContainer:{
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        width: 80,
        height: 20,

    },
    logoImage:{
        width: '100%',
        height: '100%',
    },
});

export default styles;