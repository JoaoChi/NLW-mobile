import { View, Alert } from "react-native";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";

export default function Home() {

    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")

        async function fetchCategories(){
            try {
                const { data } = await api.get("/categories")
                setCategories(data)
                setCategory(data[0].id)
            } catch (error) {
                console.log(error)
                Alert.alert("Categorias", "Não foi possível carregar as categorias.")
            }
        }

        async function FetchMarkets(){
            try {
                if(!category){
                    return 
                }
                const {data} = await api.get("/markets/category/" + category)
            } catch (error) {
                console.log(error)
                Alert.alert("Locais", "Não foi possível carregar os locais")
            }
        }

        useEffect(() => {
            fetchCategories()
        }, [])

    return (
        <View style={{flex: 1}}>
            <Categories data={categories} onSelect={setCategory} selected={category}/>
        </View>
    )
}