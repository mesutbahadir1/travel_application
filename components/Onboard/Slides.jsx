import {View, Image} from "react-native";
import React from "react";
import styles from "./slide.styles";
import {HeightSpacer, ReusableBtn, ReusableText} from "../index";
import {COLORS, SIZES} from "../../constants/theme";
import {useNavigation} from "@react-navigation/native";

export default function Slides({item}){

    const navigation=useNavigation()
    return (
      <View>
          <Image source={item.image} style={styles.image}/>
          <View style={styles.stack}>
            <ReusableText
            text={item.title}
            family={'medium'}
            size={SIZES.xxLarge}
            color={COLORS.white}
            />

            <HeightSpacer height={40}/>
           <ReusableBtn
               onPress={()=>navigation.navigate('Bottom')}
               btnText={"Let's go"}
               width={(SIZES.width-50)/2.2}
               backgroundColor={COLORS.red}
               borderColor={COLORS.red}
               borderWith={0}
               textColor={COLORS.white}
           />
          </View>
      </View>
    );
}