import { Button } from 'native-base'
import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from "react-native"

import styles from './in.style'

const In = ({calcelWork}) => {
    const [work, setWork] = useState(false)

    const click =()=>{
        setWork(true)
        console.log('work : ',work)
    }
    console.log('work : ',work)

    // async function quickstart() {
    //     // Imports the Google Cloud client library
    //     const vision = require('@google-cloud/vision');
      
    //     // Creates a client
    //     const client = new vision.ImageAnnotatorClient();
      
    //     // Performs label detection on the image file
    //     const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
    //     const labels = result.labelAnnotations;
    //     console.log('Labels:');
    //     labels.forEach(label => console.log(label.description));
    //   }

    return(
        <Modal transparent={true}
        visible={true}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Let's work</Text>
                    <View style={styles.lineTop}/>
                    <Text style={styles.descText}>Are You Ready?</Text>
                    <View style={styles.bundleButton}>
                        <TouchableOpacity 
                        onPress={calcelWork}
                        id='cancel_confirm_btn'
                        testID='cancel_confirm_btn'
                        style={styles.buttonCancel}>
                        <Text style={styles.buttonCancelText}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        // onPress={quickstart}
                        id='yes_confirm_btn'
                        testID='yes_confirm_btn'
                        accessibilityLabel='yes_confirm_btn'
                        style={styles.buttonYes}>
                        <Text style={styles.buttonYesText}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
export default In