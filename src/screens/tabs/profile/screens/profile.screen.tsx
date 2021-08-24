import {Button, ScrollView, Text, View} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthenticationActions} from "../../../../store/authentication/authentication.actions";
import {UserSelector} from "../../../../store/user/user.selector";
import {Theme} from "../../../../styles/style";


const ProfileScreen = () => {

    const dispatch = useDispatch()

    const {user} = useSelector(UserSelector.getUser)

    return (
        <ScrollView>
            <View style={{padding: 16}}>
                <Text style={Theme.Styles.body}>{user?.firstName}</Text>
                <Text style={Theme.Styles.body}>{user?.email}</Text>
                <Button title={"Logout"} onPress={() => dispatch(AuthenticationActions.signOut())} color={"red"} />
            </View>
        </ScrollView>
    )
}

export default ProfileScreen
