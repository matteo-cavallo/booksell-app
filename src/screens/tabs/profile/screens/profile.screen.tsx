import {Button, ScrollView, View} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {AuthenticationActions} from "../../../../store/authentication/authentication.actions";


const ProfileScreen = () => {

    const dispatch = useDispatch()

    return (
        <ScrollView>
            <View style={{padding: 16}}>
                <Button title={"Logout"} onPress={() => dispatch(AuthenticationActions.signOut())} color={"red"} />
            </View>
        </ScrollView>
    )
}

export default ProfileScreen
