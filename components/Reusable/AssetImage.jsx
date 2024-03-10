import {StyleSheet, Image} from "react-native";

export default function AssetImage({data, width, height, radius, mode}) {
    return (
        <Image
            source={data}
            style={styles.image(width, height, radius, mode)}
        />
    );
}

const styles = StyleSheet.create({
    image: (width, height, radius, mode) => ({
        width: width,
        height: height,
        borderRadius: radius,
        resizeMode: mode
    })


})
