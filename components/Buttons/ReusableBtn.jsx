import {Text, StyleSheet, TouchableOpacity} from "react-native";
import {SIZES} from "../../constants/theme";
export default function ReusableBtn({onPress,btnText,textColor,width,backgroundColor,borderWith, borderColor}){
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle(width,backgroundColor,borderWith,borderColor)}
        >
           <Text style={styles.textStyle(textColor)}> {btnText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle:(textColor)=>({
        fontFamily:"medium",
        fontSize:SIZES.medium,
        color:textColor
    }),
    btnStyle:(width,backgroundColor,borderWith, borderColor)=>({
        width:width,
        backgroundColor:backgroundColor,
        borderWith:borderWith,
        borderColor:borderColor,
        alignItems:"center",
        justifyContent:"center",
        height:45,
        borderRadius:SIZES.small
    }),
})
