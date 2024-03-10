import {StyleSheet, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {COLORS, SIZES, TEXT} from "../../../constants/theme";
import NetworkImage from "../../Reusable/NetworkImage";
import React from "react";
import HeightSpacer from "../../Reusable/HeightSpacer";
import ReusableText from "../../Reusable/ReusableText";
import Rating from "../../Reusable/Rating";

export default function HotelCard({item, margin,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card(margin)}>
            <View>
                <View style={styles.imageContainer}>
                    <NetworkImage source={item.imageUrl} width={'90%'} height={'100%'} radius={16}/>
                </View>

                <HeightSpacer height={5}/>

                <View style={{padding: 10}}>
                    <ReusableText
                        text={item.title}
                        family={'medium'}
                        size={TEXT.medium}
                        color={COLORS.black}
                    />
                    <HeightSpacer height={5}/>

                    <ReusableText
                        text={item.location}
                        family={'medium'}
                        size={TEXT.medium}
                        color={COLORS.gray}
                    />
                    <HeightSpacer height={5}/>

                    <Rating rating={item.rating}/>

                </View>


            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
        card: (margin) => ({
            width: SIZES.width / 2.2,
            height: 250,
            borderRadius: 16,
            backgroundColor: COLORS.lightWhite,
            marginRight: margin
        }),
        imageContainer: {
            alignItems: "center",
            marginTop: 10,
            height: 150
        }

    }
)
