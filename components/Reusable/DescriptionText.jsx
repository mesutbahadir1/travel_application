import {StyleSheet, Text} from "react-native";
import {TEXT} from "../../constants/theme";
export default function DescriptionText({lines,text}){

    return (
            <Text numberOfLines={lines} style={styles.description}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    description:{
        paddingVertical:10,
        fontFamily:"regular",
        textAlign:"justify",
        fontSize:TEXT.medium
    }
})
