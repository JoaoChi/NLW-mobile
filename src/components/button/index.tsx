import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & { isLoading ? : Boolean}

function Button({children, style, isLoading = false}: ButtonProps){
    return <TouchableOpacity style={[s.container, style]}>
        {
            isLoading ? <ActivityIndicator/> : children
        }
    </TouchableOpacity>
}

function Title({children}: TextProps){
    return <Text style={s.title}>
        {children}
    </Text>
}

Button.Title = Title

export {Button}