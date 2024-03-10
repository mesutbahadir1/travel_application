import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ReviewTle from '../Tiles/Reviews/ReviewTle'

const ReviewsList = ({reviewsList}) => {
    return (
        <FlatList
            data={reviewsList}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={{marginBottom: 10}}>
                    <ReviewTle reviewOne={item}/>
                </View>
            )}
        />



    )
}

export default ReviewsList

const styles = StyleSheet.create({})
