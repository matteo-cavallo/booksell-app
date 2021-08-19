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

    // Background color
    const backgroundColor = !props.disabled ? Theme.Colors.accent : Theme.Colors.accentDisabled


        return (
        <TouchableOpacity onPress={props.onPress}
                          style={[
                              {backgroundColor: backgroundColor},
                              styles.container,
                              props.customStyle,
                              ]}
                          {...props}
        >
            <Text style={[styles.text, {color: titleColor}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
    },
    text: {
        fontWeight: "bold",
        fontSize: 17
    }
})
