import {StyleSheet, Text, View} from "react-native";
import React from "react";
import styles from "./review.style";
import reusable from "../../Reusable/reusable.style";
import NetworkImage from "../../Reusable/NetworkImage";
import WidthSpacer from "../../Reusable/WidthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import {COLORS, SIZES} from "../../../constants/theme";
import Rating from "../../Reusable/Rating";
import DescriptionText from "../../Reusable/DescriptionText";

const ReviewTle = ({reviewOne}) => {
    return (
        <View style={styles.reviewBorder}>
            <View style={reusable.rowWithSpace("space-between")}>
                <View style={reusable.rowWithSpace("flex-start")}>
                    <NetworkImage
                        source={reviewOne.image}
                        width={54}
                        height={54}
                        radius={10}
                    />

                    <WidthSpacer width={20}/>

                    <View style={{width: "80%"}}>
                        <View style={reusable.rowWithSpace("space-between")}>
                            <ReusableText
                                text={reviewOne.username}
                                family={"medium"}
                                size={SIZES.small + 2}
                                color={COLORS.black}
                            />
                            <WidthSpacer width={"30%"}/>

                            <View style={reusable.rowWithSpace("space-between")}>
                                <Rating rating={reviewOne.ratingRew}/>
                                <WidthSpacer width={10}/>
                                <ReusableText
                                    text={reviewOne.text}
                                    family={"medium"}
                                    size={SIZES.small + 2}
                                    color={COLORS.black}
                                />
                            </View>
                        </View>

                        <DescriptionText text={reviewOne.reviewText} lines={2}/>
                    </View>


                </View>
            </View>
        </View>
    );
};

export default ReviewTle;
