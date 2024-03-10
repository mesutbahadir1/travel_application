import {Image, StyleSheet, View} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {TopBookings, TopInfo, TopTrips} from "../screens";
import {COLORS, SIZES} from "../constants/theme";
import {AppBar, HeightSpacer, NetworkImage} from "../components";
import React from "react";
import ReusableText from "../components/Reusable/ReusableText";

const Tab = createMaterialTopTabNavigator()
export default function TopTab({navigation}) {
    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: COLORS.lightWhite}}>
                <View>
                    <NetworkImage
                        source={"https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg"}
                        width={'100%'}
                        height={300}
                        radius={0}
                    />

                    <AppBar
                        top={40}
                        left={20}
                        right={20}
                        color={COLORS.white}
                        icon={"logout"}
                        color1={COLORS.white}
                        onPress={() =>navigation.navigate('Onboard')}
                        onPress1={() => {
                        }}
                    />

                    <View style={styles.profile}>
                        <Image
                            source={{uri: "https://www.visafirst.com/blog/wp-content/uploads/2010/09/a-couple-of-backpackers.jpg"}}
                            style={styles.image}
                        />

                        <HeightSpacer height={5}/>

                        <View style={styles.name}>
                            <ReusableText
                                text='Mesut Bahadır'
                                family={'medium'}
                                size={SIZES.medium}
                                color={COLORS.white}
                            />
                        </View>

                        <HeightSpacer height={5}/>

                        <View>
                            <ReusableText
                                text='mesutbahadir1@gmail.com'
                                family={'medium'}
                                size={SIZES.medium}
                                color={COLORS.white}
                            />
                        </View>

                    </View>
                </View>
            </View>
            <Tab.Navigator>
                <Tab.Screen
                    name={"Bookings"}
                    component={TopBookings}
                />
                <Tab.Screen
                    name={"Trips"}
                    component={TopTrips}
                />
                <Tab.Screen
                    name={"Info"}
                    component={TopInfo}
                />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 110,
        alignItems: "center"
    },
    image: {
        resizeMode: "cover",
        width: 100,
        height: 100,
        borderColor: COLORS.lightWhite,
        borderWidth: 2,
        borderRadius: 90
    },
    name: {
        backgroundColor:COLORS.lightGrey,
        padding: 5,
        borderRadius: 12
    }
})
