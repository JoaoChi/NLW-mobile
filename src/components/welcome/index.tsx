import { Image, Text, View } from "react-native";
import { s } from "./styles";

export function Welcome(){
    return <View>
        <Image source={require("@/assets/splash-icon.png")} style={s.logo} />

        <Text style={s.title}>Boas vindas! </Text>
        <Text style={s.subtitle}>
            Tenha cupons exclusivos para utilizar nos seus restaurantes favoritos!
            :D
        </Text>
    </View>
}