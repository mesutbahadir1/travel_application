import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import reusableStyle from "./reusable.style";
import {COLORS, SIZES, TEXT} from "../../constants/theme";
import NetworkImage from "./NetworkImage";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import React from "react";
import HeightSpacer from "./HeightSpacer";
import Rating from "./Rating";
export default function ReusableTile({item,onPress}){
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={reusableStyle.rowWithSpace("flex-start")}>
               <NetworkImage
                source={item.imageUrl}
                width={80}
                height={80}
                radius={12}
               />
               <WidthSpacer width={15}/>

               <View>
                   <ReusableText
                       text={item.title}
                       family={'medium'}
                       size={16}
                       color={COLORS.black}
                   />

                  <HeightSpacer height={8}/>

                   <ReusableText
                       text={item.location}
                       family={'medium'}
                       size={14}
                       color={COLORS.gray}
                   />

                   <HeightSpacer height={8}/>

                   <View style={reusableStyle.rowWithSpace("flex-start")}>
                       <Rating rating={item.rating}/>
                       <WidthSpacer width={5}/>
                       <ReusableText
                           text={` (${item.review})`}
                           family={'medium'}
                           size={14}
                           color={COLORS.gray}
                       />
                   </View>



               </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:COLORS.lightWhite,
        borderRadius:12
    }
})
