import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";

export default function Index(){
    return(
        <View style={styles.container}>
            <Welcome/>
            <Steps/>
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