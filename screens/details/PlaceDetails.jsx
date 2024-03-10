import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {AppBar, DescriptionText, HeightSpacer, NetworkImage, PopularList, ReusableBtn} from "../../components";
import {COLORS, SIZES, TEXT} from "../../constants/theme";
import ReusableText from "../../components/Reusable/ReusableText";
import reusableStyle from "../../components/Reusable/reusable.style";
import {Feather} from "@expo/vector-icons";
import React from "react";
export default function PlaceDetails({navigation}){
    const route=useRoute();
    var id=route.params
    const place = {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Statue of Liberty",
        "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
        "contact_id": "64c5d95adc7efae2a45ec376",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
        "rating": 4.8,
        "review": "1452 Reviews",
        "latitude": 40.689247,
        "longitude": -74.044502,
        "location": "Liberty Island, New York Harbor",
        "popular": [
            {
                "_id": "64c675be3cfa5e847bcd5439",
                "title": "Family-Friendly Resort",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
                "rating": 4.6,
                "review": "12854 Reviews",
                "location": "Orlando, FL"
            },
            {
                "_id": "64c675793cfa5e847bcd5436",
                "title": "Urban Chic Boutique Hotel",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
                "rating": 4.8,
                "review": "2312 Reviews",
                "location": "San Francisco, CA"
            }
        ]
    }


    return (
        <ScrollView>
            <View>
                <NetworkImage
                    source={place.imageUrl}
                    width={"100%"}
                    height={350}
                    radius={30}
                />
                <AppBar
                    top={40}
                    left={20}
                    right={20}
                    title={place.title}
                    color={COLORS.white}
                    icon={"search1"}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => {
                    }}
                />
            </View>

            <View style={styles.description}>
                <ReusableText
                    text={place.location}
                    family={'medium'}
                    size={TEXT.xLarge}
                    color={COLORS.black}
                />
                <DescriptionText
                    text={place.description}

                />

                <View style={{alignContent: "center"}}>
                    <HeightSpacer height={20}/>
                    <View style={reusableStyle.rowWithSpace("space-between")}>
                        <ReusableText
                            text={"Popular Hotels"}
                            family={'medium'}
                            size={TEXT.large}
                            color={COLORS.black}
                        />
                        <TouchableOpacity onPress={() => {
                        }}>
                            <Feather
                                name={"list"}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    <HeightSpacer height={20}/>
                    <PopularList data={place.popular}/>
                    <ReusableBtn
                        onPress={() => navigation.navigate('HotelSearch',place._id)}
                        btnText={"Find Best Hotels"}
                        width={SIZES.width - 40}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWith={0}
                        textColor={COLORS.white}
                    />
                    <HeightSpacer height={50}/>
                </View>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F4F8",
    },
    description: {
        marginHorizontal: 20,
        paddingTop: 20
    }
})

