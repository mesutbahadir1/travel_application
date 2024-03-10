import {ScrollView, View} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Registration, SignIn} from "../screens";
import {COLORS} from "../constants/theme";
import {AssetImage, HeightSpacer} from "../components";

const Tab = createMaterialTopTabNavigator();
export default function AuthTopTab() {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <ScrollView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
                <HeightSpacer height={80}/>
                <AssetImage
                    data={require('../assets/images/bg2.png')}
                    mode={'contain'}
                    width={'100%'}
                    height={250}
                />
                <View style={{height:600}}>
                    <Tab.Navigator>
                        <Tab.Screen
                            name={"Signin"}
                            component={SignIn}
                        />
                        <Tab.Screen
                            name={"Registration"}
                            component={Registration}
                        />
                    </Tab.Navigator>
                </View>
            </ScrollView>
        </View>
    );
}

