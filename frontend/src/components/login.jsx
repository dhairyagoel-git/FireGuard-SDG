import React from "react";
import {AuthForm, AuthPage} from './loginComponents'
export function Login(){
    return(

        <>
        <div className="w-full items-center flex flex-col ">

        <AuthPage/>
        <AuthForm/>
        </div>
        
        </>
    )
}