import {StyleSheet, Text, View} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {COLORS, SIZES} from "../../constants/theme";
import * as Location from "expo-location"
import {useEffect, useState} from "react";
export default function LocationPage(){
    const [location, setLocation]=useState({
        latitude:35.3232,
        longitude:142.6884,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }
    )

    const userLocation=async ()=>{
        let {status}= await Location.requestForegroundPermissionsAsync()
        if(status !=='granted'){
            console.log("Please grant location permissions");
            return;
        }

        let currentLocation= await Location.getCurrentPositionAsync({})
        setLocation({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });
    }

    useEffect(()=>{
        userLocation()
    })


    return (
       <MapView style={styles.mapStyle} initialRegion={location} region={location}>
           <Marker coordinate={location}/>
       </MapView>
    );
}

const styles = StyleSheet.create({
    mapStyle:{
        ...StyleSheet.absoluteFill
    }
})
