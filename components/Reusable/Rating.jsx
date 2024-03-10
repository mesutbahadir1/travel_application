import {Text, View} from "react-native";
import reusableStyle from "./reusable.style";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import {COLORS, TEXT} from "../../constants/theme";
import React from "react";

export default function Rating({rating}){
    return (
        <View style={reusableStyle.rowWithSpace("flex-start")}>
           <MaterialCommunityIcons
               name={"star"}
               size={20}
               color={"#FD9942"}
           />
            <WidthSpacer width={5}/>

            <ReusableText
                text={rating}
                family={'medium'}
                size={15}
                color={"#FD9942"}
            />
        </View>
    );
}

