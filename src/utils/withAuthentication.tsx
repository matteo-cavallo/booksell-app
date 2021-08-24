import React, {ComponentType} from "react";
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {UserSelector} from "../store/user/user.selector";
import {Theme} from "../styles/style";
import {ButtonComponent} from "../components/button.component";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthenticationSliceActions} from "../store/authentication/authenticationSlice";

export const withAuthentication =  (WrappedComponent: ComponentType) => {

    const {isAnonymous} = useSelector(UserSelector.getUser)
    const dispatch = useDispatch()

    const Component = () => (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 16}}>

            <Text style={Theme.Styles.largeTitle}>Esegui l'accesso</Text>
            <Text>Crea un account oppure esegui l'accesso.</Text>
                <ButtonComponent title={"Vai alla pagina di login"} customStyle={{width: '100%', marginTop: 16}}
                    onPress={() => dispatch(AuthenticationSliceActions.showAuthenticationScreen())}
                />
        </View>
    )

    if (isAnonymous) {
        return Component
    } else {
        return WrappedComponent
    }
}
