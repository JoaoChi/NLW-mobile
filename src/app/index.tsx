import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}> Salve gurizada </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    texto: {
        fontSize: 20
    }
})