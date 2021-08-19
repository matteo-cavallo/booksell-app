import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Theme} from "../../styles/style";
import React from "react";

export const SplashScreen = () => {

    return (
        <SafeAreaView style={{backgroundColor: Theme.Colors.accent, flex: 1}}>
            <View style={styles.container}>
                <Text style={[Theme.Styles.largeTitle, styles.text]}>Bookshare</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#FFF"
    }
})
