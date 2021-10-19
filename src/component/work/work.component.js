import { Button } from 'native-base'
import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from "react-native"

import styles from './work.style'

const Work = ({clickWork}) => {
    
    return(
        <TouchableOpacity 
        onPress={
            ()=>{
                clickWork()
            }
        }
        style={styles.workButton}>
            <Text style={styles.workText}>Work!</Text>

        </TouchableOpacity>
    );
}
export default Work