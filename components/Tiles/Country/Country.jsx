import {Text, TouchableOpacity, View} from "react-native";
import {COLORS, TEXT} from "../../../constants/theme";
import ReusableText from "../../Reusable/ReusableText";
import React from "react";
import NetworkImage from "../../Reusable/NetworkImage";
import HeightSpacer from "../../Reusable/HeightSpacer";
import {useNavigation} from "@react-navigation/native";
export default function Country({item}){
    const navigation=useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("CountryDetails", {item})}>
            <View>
                <NetworkImage source={item.imageUrl} width={85} height={85} radius={12}/>
                <HeightSpacer height={5}/>
                <ReusableText
                    text={item.country}
                    family={'medium'}
                    size={TEXT.medium}
                    color={COLORS.black}
                    align={"center"}
                />
            </View>
        </TouchableOpacity>
    );
}

