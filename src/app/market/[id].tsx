import { View, Text, Alert } from "react-native";
import { router, useLocalSearchParams, Redirect } from "expo-router";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Loading } from "@/components/loading";
import { Cover } from "@/components/market/cover";
import { PropsDetails } from "@/components/market/details";

export default function Market(){

    type DataProps = PropsDetails & {
        cover: string
    }

    const [data, setData] = useState<DataProps>()
    const [isLoading, setIsLoading] = useState(true)

    const params = useLocalSearchParams<{ id: string }>()

    async function fetchMarket(){
        try {
            const { data } = await api.get("/markets/" + params.id)
            setData(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível carregar os dados", [
                {text: "OK", onPress: () => router.back()},

            ])
        }
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id])

    if(isLoading) {
        return <Loading/>
    }

    if(!data){
        return <Redirect href="/home"/>
    }

    return (
        <View style={{ flex: 1 }}>
            <Cover uri={data?.cover}></Cover>
        </View>
    )
}