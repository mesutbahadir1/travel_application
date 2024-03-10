import {SafeAreaView, TouchableOpacity, View} from "react-native";
import reusable from "../../components/Reusable/reusable.style";
import {BestHotels, HeightSpacer, Places, ReusableText} from "../../components";
import {COLORS, SIZES, TEXT} from "../../constants/theme";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
import styles from "../home/home.style"
import Recommendations from "../../components/Home/Recommendations";

export default function Home({navigation}) {
    return (
        <SafeAreaView style={reusable.container}>
            <View>

                <View style={reusable.rowWithSpace("space-between")}>
                    <ReusableText
                        text={"Hey User!"}
                        family={'regular'}
                        size={TEXT.large}
                        color={COLORS.black}
                    />
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => navigation.navigate("Search")}

                    >
                        <AntDesign
                            name={"search1"}
                            size={26}
                        />
                    </TouchableOpacity>
                </View>

                <HeightSpacer height={SIZES.xLarge}/>

                <ReusableText
                    text={"Places"}
                    family={'medium'}
                    size={TEXT.large}
                    color={COLORS.black}
                />

                <Places/>

                <HeightSpacer height={15}/>
                <Recommendations/>

                <HeightSpacer height={30}/>

                <BestHotels/>
            </View>
        </SafeAreaView>
    );
}

