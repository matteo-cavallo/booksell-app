import {StyleSheet} from "react-native";

const Colors = {
    accent: "#43D267",
    primary: "#555",
    lightGray: "rgba(120, 120, 128, 0.16)"
}

const Styles = StyleSheet.create({
    // Typography
    body: {
        fontSize: 17
    },
    largeTitle: {
        fontSize: 34,
        fontWeight: "bold"
    },

    // Components
    textField: {
        fontSize: 17,
        backgroundColor: "rgba(120, 120, 128, 0.16)",
        height: 50,
        borderRadius: 16,
        paddingHorizontal: 12,
        marginBottom: 8
    },
})

export const Theme = {
    Colors,
    Styles
}
