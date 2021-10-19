import axios from 'axios'
import moment from 'moment'
import { Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native"

// import Navigation from '../navigation'
// import {Logout, Work, In} from '../../component'
// import {Header} from '../../component'

import styles from './register.style'

const Register =({_registerClose})=>{

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
            onPress={_registerClose} 
            style={styles.buttonLogin}>
                <Text style={styles.loginText}>Register</Text>

            </TouchableOpacity>
        </View>
    );
}
export default Register