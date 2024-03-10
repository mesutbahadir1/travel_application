import {Text, View} from "react-native";
import {ProfileTile} from "../../components";

export default function TopInfo({navigation}) {
    return (
        <View style={{margin: 20}}>
            <ProfileTile
                title={"Personal Information"}
                icon={'user'}
                onPress={()=>navigation.navigate('AuthTop')}
            />

            <ProfileTile
                title={"Payment"}
                icon={'creditcard'}
                onPress={()=>navigation.navigate('Payments')}
            />

            <ProfileTile
                title={"Settings"}
                icon={'setting'}
                onPress={()=>navigation.navigate('Settings')}
            />
        </View>
    );
}

