
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native"

import {Logout} from '../../component'
import { Images } from '../../assets'


import styles from './navigation.style'

const Navigation = ({_logout}) => {
  const [logout, setLogout] = useState(false)

  const toLogout = () => {
    setLogout(true)
    console.log('logout : ',logout)
  }

  const cancelLogout = () => {
    setLogout(false)
  }

  console.log('logout : ',logout)

    return (
      <View>
        {logout ? <Logout _logout={_logout} cancelLogout={cancelLogout}/> : null}
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.toCenter}>
                <Image
                  style={styles.icon}
                  source={Images.User}
                />
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toCenter}>
                <Image
                  style={styles.icon}
                  source={Images.Home1}
                />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={
              ()=>{
                toLogout()
              }
            }
            style={styles.toCenter}>
                <Image
                  style={styles.icon}
                  source={Images.Out}
                />
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}
export default Navigation