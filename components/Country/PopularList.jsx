import {FlatList, Text, View} from "react-native";
import ReusableTile from "../Reusable/ReusableTile";
import {useNavigation} from "@react-navigation/native";
import {SIZES} from "../../constants/theme";
import Country from "../Tiles/Country/Country";
export default function PopularList({data}){
    const navigation=useNavigation()

    return (
        <FlatList
            data={data}
            keyExtractor={(item)=>item._id}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View style={{marginBottom:10}}>
                    <ReusableTile item={item} onPress={()=>navigation.navigate("PlaceDetails",item._id)}/>
                </View>
            )}
        />
    );
}

