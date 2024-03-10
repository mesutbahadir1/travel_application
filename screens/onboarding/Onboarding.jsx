import {StyleSheet,FlatList} from "react-native";
import Slides from "../../components/Onboard/Slides";

export default function Onboarding(){
    const slides=[
        {
            id:1,
            image:require('../../assets/images/1.png'),
            title:"Find the perfect place to stay"
        },
        {
            id:2,
            image:require('../../assets/images/2.png'),
            title:"Discover the world"
        },
        {
            id:3,
            image:require('../../assets/images/3.png'),
            title:"Find the best Hotels in the world"
        }
    ]


    return (
       <FlatList
           pagingEnabled
           horizontal
           showsHorizontalScrollIndicator={false}
           data={slides}
           keyExtractor={(item)=>item.id}
           renderItem={({item})=><Slides item={item}/>}
       />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
