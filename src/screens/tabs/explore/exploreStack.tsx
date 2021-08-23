import React from "react";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {ExploreScreen} from "./screens/explore.screen";

export type ExploreStackParams = {
    Explore: undefined
}

export const ExploreStackScreen = () => {

    const ExploreStack = createNativeStackNavigator<ExploreStackParams>()

    return (
        <ExploreStack.Navigator screenOptions={screenOptions}>
            <ExploreStack.Screen name={"Explore"} component={ExploreScreen} />
        </ExploreStack.Navigator>
    )
}

const screenOptions: NativeStackNavigationOptions = {
}
