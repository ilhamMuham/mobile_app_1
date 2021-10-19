import axios from 'axios'
import moment from 'moment'
import { Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native"

import Navigation from '../navigation'
import {Logout, Work, In} from '../../component'
// import {Header} from '../../component'

import styles from './login.style'

const Login =({_login, _register})=>{

    const [sign, setSign] = useState(false)

    const daftar=()=>{
        setSign(true)
        _register
        console.log('sign : ', sign)
    }

    return (
        <View style={styles.container}>
            <TextInput 
            placeholder='Email'
            style={styles.email}>

            </TextInput>
            <TextInput 
            placeholder='Password'
            style={styles.password}>

            </TextInput>
            <TouchableOpacity
            onPress={_login} 
            style={styles.buttonLogin}>
                <Text style={styles.loginText}>LOGIN</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={_register} 
            style={styles.signUp}>
                <Text 
                
                style={styles.signUpText}>Sign Up!</Text>

            </TouchableOpacity>
        </View>
    );
}
export default Login