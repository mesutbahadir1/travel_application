import {Image, StyleSheet} from "react-native";
import {SIZES} from "../../constants/theme";

export default function NetworkImage({source,width,height,radius}){
    return (
           <Image
               source={{uri: source}}
               style={styles.image(width,height,radius)}
           />
    );
}


const styles = StyleSheet.create({
    image:(width,height,radius)=>({
        width:width,
        height:height,
        borderRadius:radius,
        resizeMode:"cover"
    })
})
