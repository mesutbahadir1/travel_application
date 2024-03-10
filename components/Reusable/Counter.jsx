import {View} from "react-native";
import React, {useState} from "react";
import reusable from "./reusable.style";
import {AntDesign} from "@expo/vector-icons";
import {COLORS} from "../../constants/theme";
import ReusableText from "./ReusableText";
export default function Counter(){
    const [count,setCount]=useState(1)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    return (
        <View style={reusable.rowWithSpace("flex-start")}>
            <AntDesign
                name={"minussquareo"}
                size={26}
                color={COLORS.gray}
                onPress={decrement}
            />
            <ReusableText
                text={` ${count} `}
                family={'medium'}
                size={16}
                color={COLORS.black}
            />
            <AntDesign
                name={"plussquareo"}
                size={26}
                color={COLORS.gray}
                onPress={increment}
            />
        </View>
    );
}

