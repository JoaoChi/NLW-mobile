import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";
import { Step } from "@/components/step";
import { Button } from "@/components/button";

export default function Index(){
    return(
        <View style={styles.container}>
            <Welcome/>
            <Steps/>
            <Button>
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