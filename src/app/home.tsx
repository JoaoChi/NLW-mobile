import { View, Alert, Text } from "react-native";
import { api } from "@/services/api";
import { colors, fontFamily } from "@/styles/theme";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import MapView, { Callout, Marker } from "react-native-maps"
// import * as Location from 'expo-location';

type MarketProps = PlaceProps & {
    latitude: number
    longitude: number
}

const currentLocation = {
    latitude: -27.097801673004962,
    longitude: -52.60402094296817,
}

export default function Home() {

    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")
    const [markets, setMarkets] = useState<MarketProps[]>([])

    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias.")
        }
    }

    async function FetchMarkets() {
        try {
            if (!category) {
                return
            }
            const { data } = await api.get("/markets/category/" + category)
            setMarkets(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Locais", "Não foi possível carregar os locais")
        }
    }

    // async function getCurrentLocation(){
    //     try {
    //         const { granted } = await Location.requestForegroundPermissionsAsync

    //         if(granted){
    //             const location = await Location.getCurrentPositionAsync
    //             console.log(location)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        // getCurrentLocation()
        fetchCategories()
    }, [])

    useEffect(() => {
        FetchMarkets()
    }, [category])

    return (
        <View style={{ flex: 1 }}>
            <Categories data={categories} onSelect={setCategory} selected={category} />
            <MapView style={{ flex: 1 }}
                initialRegion={
                    {
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }
                } >
                <Marker
                    identifier="current"
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude
                    }}
                    icon={require("@/assets/pin.png")}
                />

                {
                    markets.map((item) => (
                        <Marker
                            key={item.id}
                            identifier={item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude
                            }}
                            icon={require("@/assets/location.png")}
                        >
                            <Callout>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: colors.gray[600],
                                            fontFamily: fontFamily.medium
                                        }}
                                    >{item.name}</Text>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: colors.gray[600],
                                            fontFamily: fontFamily.regular
                                        }}
                                    >{item.address}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))
                }
            </MapView>
            <Places data={markets} />
        </View>
    )
}