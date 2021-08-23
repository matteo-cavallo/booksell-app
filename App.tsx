import React, {useContext, useEffect, useState} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/store/config";
import {AuthProvider} from "./src/firebase/authProvider";
import {Root} from "./src/Root";



export default function App(){

    return (
            <Provider store={store}>
                <AuthProvider>
                    <Root />
                </AuthProvider>
            </Provider>
  );
}

