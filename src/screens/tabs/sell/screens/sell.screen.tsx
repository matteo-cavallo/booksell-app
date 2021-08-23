import {ScrollView, Text, View} from "react-native";
import React from "react";
import {Theme} from "../../../../styles/style";
import {useSelector} from "react-redux";
import {UserSelector} from "../../../../store/user/user.selector";

export const SellScreen = () => {

    const user = useSelector(UserSelector.getUser)

    return (
        <ScrollView>
            <View style={{padding: 16}}>
                <Text style={Theme.Styles.body}>Sell</Text>
                <Text style={Theme.Styles.body}>{user.user?.userID}</Text>
                <Text>{user.user?.isAnonymous ? "Anonimo": ""}</Text>
            </View>
        </ScrollView>
    )
}
