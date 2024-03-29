import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {AppBar, DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReusableBtn} from "../../components";
import {COLORS, SIZES, TEXT} from "../../constants/theme";
import React from "react";
import styles from "./hotelDetails.style";
import ReusableText from "../../components/Reusable/ReusableText";
import reusable from "../../components/Reusable/reusable.style";
import {Rating} from "react-native-stock-star-rating/index";
import {Feather} from "@expo/vector-icons";
import ReviewsList from "../../components/Hotel/ReviewsList";


export default function HotelDetails({navigation}) {
    const route = useRoute();
    var id = route.params

    const hotel = {
        "availability": {
            "start": "2023-08-20T00:00:00.000Z",
            "end": "2023-08-25T00:00:00.000Z"
        },
        "id": "64c675793cfa5e847bcd5436",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Urban Chic Boutique Hotel",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
        "contact": "64c5d95adc7efae2a45ec376",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
        "rating": 4.8,
        "reviewsApp": [
            {
                "image": "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707696000&semt=ais",
                "username": "Mesut",
                "ratingRew":4.1,
                "text":"02/02/2024",
                "reviewText":"Quality hotel, good accommodation."
            },
            {
                "image": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
                "username": "William",
                "ratingRew":4.7,
                "text":"23/10/2023",
                "reviewText":"Perfect hotel. Thanks for everything."
            }
        ],
        "review": "2312 Reviews",
        "location": "San Francisco, CA",
        "latitude": 37.7749,
        "longitude": -122.4194,
        "price": 400,
        "facilities": [
            {
                "wifi": true,
                "_id": "64c675793cfa5e847bcd5437"
            }
        ],

        "__v": 0
    }

    let coordinates = {
        id: hotel._id,
        title: hotel.title,
        latitude: hotel.latitude,
        longitude: hotel.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }

    return (
        <ScrollView>
            <View style={{height: 80}}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    title={hotel.title}
                    color={COLORS.white}
                    icon={"search1"}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => {
                    }}
                />
            </View>

            <View>
                <View style={styles.container}>
                    <NetworkImage source={hotel.imageUrl} width={"100%"} height={220} radius={25}/>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleColumn}>
                            <ReusableText
                                text={hotel.title}
                                family={'medium'}
                                size={SIZES.xLarge}
                                color={COLORS.black}
                                align={"center"}
                            />

                            <HeightSpacer height={10}/>

                            <ReusableText
                                text={hotel.location}
                                family={'medium'}
                                size={SIZES.large}
                                color={COLORS.black}
                                align={"center"}
                            />
                            <HeightSpacer height={15}/>

                            <View style={reusable.rowWithSpace("space-between")}>
                                <Rating
                                    maxStars={5}
                                    stars={hotel.rating}
                                    bordered={false}
                                    color={"#FD9942"}
                                />
                                <ReusableText
                                    text={`(${hotel.review})`}
                                    family={'medium'}
                                    size={SIZES.medium}
                                    color={COLORS.black}
                                    align={"center"} s
                                />

                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.container, {paddingTop: 90}]}>
                    <ReusableText
                        text={"Description"}
                        family={'medium'}
                        size={SIZES.large}
                        color={COLORS.black}
                        align={"center"}
                    />
                    <HeightSpacer height={10}/>

                    <DescriptionText text={hotel.description}/>
                    <HeightSpacer height={10}/>

                    <ReusableText
                        text={"Location"}
                        family={'medium'}
                        size={SIZES.large}
                        color={COLORS.black}
                        align={"center"}
                    />
                    <HeightSpacer height={15}/>

                    <ReusableText
                        text={hotel.location}
                        family={'regular'}
                        size={SIZES.small + 2}
                        color={COLORS.gray}
                        align={"center"}
                    />
                    <HotelMap coordinates={coordinates}/>

                    <View style={reusable.rowWithSpace("space-between")}>
                        <ReusableText
                            text={"Reviews"}
                            family={"medium"}
                            size={SIZES.large}
                            color={COLORS.black}
                        />

                        <TouchableOpacity
                            onPress={() =>{}}
                        >
                            <Feather name="list" size={20} />
                        </TouchableOpacity>
                    </View>

                    <HeightSpacer height={10} />
                <ReviewsList reviewsList={hotel.reviewsApp} />
                </View>
                <View style={[reusable.rowWithSpace("space-between"), styles.bottom]}>
                    <View>
                        <ReusableText
                            text={`\$ ${hotel.price}`}
                            family={"medium"}
                            size={SIZES.large}
                            color={COLORS.black}
                        />
                        <HeightSpacer height={5} />

                        <ReusableText
                            text={"Jan 01 - Dec 25"}
                            family={"medium"}
                            size={SIZES.medium}
                            color={COLORS.gray}
                        />
                    </View>

                    <ReusableBtn
                        onPress={() => navigation.navigate("SelectRoom")}
                        btnText={"Select Room"}
                        width={(SIZES.width - 50) / 2.2}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                </View>
            </View>


        </ScrollView>
    );
}



