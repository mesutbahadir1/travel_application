import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Profile, LocationPage, Chat} from "../screens";
import {Ionicons} from "@expo/vector-icons"
import {COLORS} from "../constants/theme";
import TopTab from "./TopTab";

const Tab = createBottomTabNavigator()

const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
}

export default function BottomTabNavigation() {

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            activeColor={"#EB6A58"}
            tabBarHideKeyBoard={true}
            headerShown={false}
            inactiveColor={"#3E2465"}
            barStyle={{paddingBottom: 48}}
        >

            <Tab.Screen
                name={"Home"}
                component={Home}
                options={
                    {
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <Ionicons
                                name={focused ? "grid" : "grid-outline"}
                                size={26}
                                color={focused ? COLORS.red : COLORS.gray}
                            />
                        }
                    }
                }
            />

            <Tab.Screen
                name={"Location"}
                component={LocationPage}
                options={
                    {
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <Ionicons
                                name={focused ? "location" : "location-outline"}
                                size={26}
                                color={focused ? COLORS.red : COLORS.gray}
                            />
                        }
                    }
                }
            />


            <Tab.Screen
                name={"Profile"}
                component={TopTab}
                options={
                    {
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({focused}) => {
                            return <Ionicons
                                name={focused ? "person" : "person-outline"}
                                size={26}
                                color={focused ? COLORS.red : COLORS.gray}
                            />
                        }
                    }
                }
            />
        </Tab.Navigator>
    );
}

