import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from "react-native"

import styles from './logout.style'

const Logout = ({cancelLogout, _logout}) => {

    // const [logout, setLogout] = useState(false)

    const _yes = () => {
        console.log('masuk sini')
        // cancelLogout()
        _logout()
    }
    return(
        <Modal transparent={true}
        visible={true}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Log Out</Text>
                    <View style={styles.lineTop}/>
                    <Text style={styles.descText}>Are you sure?</Text>
                    <View style={styles.bundleButton}>
                        <TouchableOpacity 
                        onPress={cancelLogout}
                        id='cancel_confirm_btn'
                        testID='cancel_confirm_btn'
                        // accessibilityLabel='cancel_confirm_btn'
                        style={styles.buttonCancel}>
                        <Text style={styles.buttonCancelText}>No</Text>
                        </TouchableOpacity>
                        {/* <View style={styles.verticalLine}/> */}
                        <TouchableOpacity 
                        onPress={_yes}
                        id='yes_confirm_btn'
                        testID='yes_confirm_btn'
                        // accessibilityLabel='yes_confirm_btn'
                        style={styles.buttonYes}>
                        <Text style={styles.buttonYesText}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
export default Logout