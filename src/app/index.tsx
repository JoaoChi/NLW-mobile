import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Button } from "@/components/button";
import { router } from "expo-router";

export default function Index(){
    return(
        <View style={styles.container}>
            <Welcome/>
            <Steps/>
            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Iniciar</Button.Title>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        gap: 40
    },  
    texto: {
        fontSize: 20
    }
})