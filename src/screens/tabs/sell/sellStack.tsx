import React from "react";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {SellScreen} from "./screens/sell.screen";

export type ExploreStackParams = {
    Sell: undefined
}

export const SellStackScreen = () => {

    const SellStack = createNativeStackNavigator<ExploreStackParams>()

    return (
        <SellStack.Navigator screenOptions={screenOptions}>
            <SellStack.Screen name={"Sell"} component={SellScreen} />
        </SellStack.Navigator>
    )
}

const screenOptions: NativeStackNavigationOptions = {
}
