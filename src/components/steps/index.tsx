import { View, Text } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
export function Steps(){
    return (
        <View style={s.container}>
            <Text style={s.title}> Veja como funciona: </Text>
            <Step title="Encontre Estabelecimentos"
            description="Veja locais perto de você que são nossos parceiros!"/>
            <Step title="Ative o Cupom com QR code"
            description="Escaneie o código para utilizar do benefício."/>
            <Step title="Garanta vantagens perto de você"
            description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos!"/>
        </View>
    )
}
