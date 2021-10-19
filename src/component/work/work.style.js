import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    workButton:{
        bottom: 100,
        right:'10%',
        zIndex: 1,
        height: 70,
        borderRadius:50,
        elevation:5,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#2B8A3E',
    },
    workText:{
        fontSize:16,
        color:'white',
        fontFamily : 'Poppins-Medium',
    }
})

export default styles