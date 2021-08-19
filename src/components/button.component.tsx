import React, {FC} from "react";
import {
    ColorValue,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle
} from "react-native";
import {Theme} from "../styles/style";

interface ButtonComponentProps extends TouchableOpacityProps{
    title: string;
    customStyle?: StyleProp<ViewStyle>;
    titleColor?: ColorValue
}

export const ButtonComponent: FC<ButtonComponentProps> = (props) => {

    // If provided, titleColor will be overwritten
    const titleColor = props.titleColor || "#FFF"

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.container, props.customStyle]}>
            <Text style={[styles.text, {color: titleColor}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: Theme.Colors.accent,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
    },
    text: {
        fontWeight: "bold",
        fontSize: 17
    }
})
