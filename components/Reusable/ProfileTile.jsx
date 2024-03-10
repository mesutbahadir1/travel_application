import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import reusable from "./reusable.style";
import {AntDesign} from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import React from "react";

export default function ProfileTile({icon,onPress,title}) {
    return (
        <TouchableOpacity style={styles.tile} onPress={onPress}>
            <View style={reusable.rowWithSpace("space-between")}>
                <View style={reusable.rowWithSpace("flex-start")}>
                    <AntDesign
                        name={icon}
                        size={20}
                    />
                    <WidthSpacer width={15}/>

                    <ReusableText
                        text={title}
                        family={'regular'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />
                </View>

                <AntDesign
                    name={"right"}
                    size={20}
                />

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tile: {
        backgroundColor: COLORS.lightWhite,
        width: "100%",
        height: 60,
        justifyContent:"center",
        padding: 10,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 15
    }
})
