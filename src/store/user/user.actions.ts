import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../config";
import {FBFirestore} from "../../firebase/firebase.config";
import {User} from "../../model/user.model";
import {setUser} from "./userSlice";


export const fetchUser = createAsyncThunk("fetchUser", async (arg: {userId: string}, {dispatch}) => {

    const {userId} = arg

    // Grab User from Firebase and put it into the store
    const userRef = FBFirestore.collection("users").doc(userId)

    const userData = await userRef.get()

    if (userData.exists) {
        const user: User = userData.data() as User

        dispatch(setUser(user))
    }
})
