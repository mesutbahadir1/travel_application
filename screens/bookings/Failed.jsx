import {View} from "react-native";
import {AssetImage, HeightSpacer, ReusableBtn, ReusableTile} from "../../components";
import ReusableText from "../../components/Reusable/ReusableText";
import {COLORS, SIZES, TEXT} from "../../constants/theme";
import React from "react";
export default function Failed({navigation}){
    const hotel = {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Hotel 1",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    }
    return (
        <View>
            <View style={{marginTop: "40%"}}>
                <AssetImage
                    data={require("../../assets/images/Falied.png")}
                    width={"100%"}
                    height={200}
                    mode={"contain"}
                />
                <HeightSpacer height={40}/>

                <View style={{alignItems: "center"}}>
                    <ReusableText
                        text={"Booking Failed"}
                        family={'medium'}
                        size={TEXT.xLarge}
                        color={COLORS.black}
                    />
                    <HeightSpacer height={20}/>
                    <ReusableText
                        text={"You can find your booking details below"}
                        family={'regular'}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />
                    <HeightSpacer height={20}/>

                </View>

                <View style={{margin:20}}>
                    <ReusableText
                        text={"Room Details"}
                        family={'bold'}
                        size={SIZES.medium}
                        color={COLORS.dark}
                    />
                    <HeightSpacer height={20}/>

                    <ReusableTile
                        item={hotel}
                        onPress={()=>navigation.navigate("HotelDetails")}
                    />
                    <HeightSpacer height={40}/>

                    <ReusableBtn
                        onPress={() => navigation.goBack()}
                        btnText={"Try Again"}
                        width={SIZES.width - 50}
                        backgroundColor={COLORS.red}
                        borderColor={COLORS.red}
                        borderWith={0}
                        textColor={COLORS.white}
                    />

                </View>

            </View>
        </View>
    );
}

