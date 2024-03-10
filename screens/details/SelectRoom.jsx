import {FlatList, Text, View} from "react-native";
import {AppBar, AssetImage, HeightSpacer, ReusableBtn, ReusableTile} from "../../components";
import {COLORS, SIZES} from "../../constants/theme";
import React from "react";

export default function SelectRoom({navigation}) {
    const rooms = [
        {
            "_id": "64c631650298a05640539adc",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Walt Disney World",
            "location": "U.S.A New York",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
            "rating": 4.7,
            "review": "1204 Reviews"
        },
        {
            "_id": "64d062a3de20d7c932f1f70a",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Statue of Liberty",
            "location": "U.S.A New York",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
            "rating": 4.8,
            "review": "1452 Reviews"
        },
        {
            "_id": "64d09e3f364e1c37c8b4b13c",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Golden Gate Bridge",
            "location": "U.S.A New York",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
            "rating": 4.6,
            "review": "2145 Reviews"
        },
        {
            "_id": "64d09f90364e1c37c8b4b140",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Yellowstone National Park",
            "location": "U.S.A New York",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "rating": 4.8,
            "review": "24455 Reviews"
        }
    ];
    return (
        <View>
            <View style={{height: 100}}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    title={"Select Room"}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <FlatList
                data={rooms}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <View style={{marginHorizontal: 20, marginBottom: 10}}>
                        <View style={{backgroundColor: COLORS.lightWhite, borderRadius: 12}}>
                            <ReusableTile item={item}/>
                            <HeightSpacer height={10}/>
                            <View style={{marginHorizontal: 10, alignItems: "center"}}>
                                <ReusableBtn
                                    onPress={() => navigation.navigate('SelectedRoom',{item})}
                                    btnText={"Select Room"}
                                    width={SIZES.width - 50}
                                    backgroundColor={COLORS.green}
                                    borderColor={COLORS.green}
                                    borderWith={0}
                                    textColor={COLORS.white}
                                />
                            </View>

                        </View>
                    </View>
                )}
            />
        </View>
    );
}

