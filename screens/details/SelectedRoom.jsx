import {View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {
    AppBar,
    AssetImage,
    HeightSpacer,
    NetworkImage,
    Rating,
    ReusableBtn,
    WidthSpacer,
    ReusableText,
    Counter
} from "../../components";
import {COLORS, SIZES} from "../../constants/theme";
import React from "react";
import reusable from "../../components/Reusable/reusable.style";

export default function SelectedRoom({navigation}) {
    const router = useRoute()
    const {item} = router.params
    console.log(item)
    return (
        <View>
            <View style={{height: 100}}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    title={item.title}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={{marginHorizontal: 20}}>
                <View style={{backgroundColor: COLORS.lightWhite, borderRadius: 16}}>
                    <NetworkImage
                        source={item.imageUrl}
                        width={"100%"}
                        height={200}
                        radius={16}
                    />
                    <HeightSpacer height={20}/>
                    <View style={{marginHorizontal: 10}}>
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReusableText
                                text={item.title}
                                family={'medium'}
                                size={16}
                                color={COLORS.black}
                            />
                            <View style={reusable.rowWithSpace("flex-start")}>
                                <Rating rating={item.rating}/>
                                <WidthSpacer width={10}/>
                                <ReusableText
                                    text={`(${item.review})`}
                                    family={'regular'}
                                    size={SIZES.medium}
                                    color={COLORS.black}
                                />
                            </View>
                        </View>
                        <HeightSpacer height={10}/>
                        <ReusableText
                            text={item.location}
                            family={'medium'}
                            size={16}
                            color={COLORS.gray}
                        />

                        <View style={{borderWidth: 0.5, borderColor: COLORS.lightGrey, marginVertical: 15}}>
                        </View>

                        <ReusableText
                            text={"Room Requirements"}
                            family={'medium'}
                            size={16}
                            color={COLORS.gray}
                        />
                        <HeightSpacer height={30}/>
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReusableText
                                text={"Price per night"}
                                family={'medium'}
                                size={16}
                                color={COLORS.black}
                            />
                            <ReusableText
                                text={"$ 400"}
                                family={'medium'}
                                size={16}
                                color={COLORS.black}
                            />
                        </View>
                        <HeightSpacer height={15}/>
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReusableText
                                text={"Payment Method"}
                                family={'medium'}
                                size={16}
                                color={COLORS.black}
                            />

                            <View style={reusable.rowWithSpace("flex-start")}>
                                <AssetImage
                                    mode={'contain'}
                                    width={30}
                                    height={20}
                                    data={require('../../assets/images/Visa.png')}
                                />
                                <ReusableText
                                    text={"Visa"}
                                    family={'medium'}
                                    size={16}
                                    color={COLORS.black}
                                />
                            </View>
                        </View>
                        <HeightSpacer height={15}/>
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReusableText
                                text={"4 Guest"}
                                family={'medium'}
                                size={16}
                                color={COLORS.black}
                            />
                            <Counter/>
                        </View>
                        <HeightSpacer height={30}/>
                        <ReusableBtn
                            onPress={() => navigation.navigate('Success', {item})}
                            btnText={"Book Now"}
                            width={SIZES.width - 50}
                            backgroundColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWith={0}
                            textColor={COLORS.white}
                        />
                    </View>

                </View>

            </View>
        </View>
    );
}

