import {Button, SafeAreaView, Text, View} from "react-native";
import React from "react";
import {FBAuth} from "../../firebase/firebase.config";
import {Theme} from "../../styles/style";

export const HomeScreen = () => {

    return (
        <SafeAreaView>
            <View style={{padding: 16}}>
                <Text style={Theme.Styles.largeTitle}>Home</Text>
                <Button title={"Logout"} onPress={() => FBAuth.signOut()} />
            </View>
        </SafeAreaView>
    )
}
