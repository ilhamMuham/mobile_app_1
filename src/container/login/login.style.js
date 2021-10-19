import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a66ad',
        // backgroundColor: 'red',
    },
    email:{
        width:275,
        height:50,
        borderRadius:8,
        borderWidth: 1,
        borderColor:'#00000026',
        backgroundColor: '#FFFFFF',
    },
    password:{
        width:275,
        height:50,
        marginTop:20,
        borderRadius:8,
        borderWidth: 1,
        borderColor:'#00000026',
        backgroundColor: '#FFFFFF',
    },
    buttonLogin:{
        width:275,
        height:50,
        marginTop:20,
        borderRadius:8,
        borderWidth: 1, 
        alignItems: 'center',
        borderColor:'#00000026',
        justifyContent: 'center',
        backgroundColor: '#95C123',
    },
    loginText:{
        fontWeight:'bold',
        fontFamily:'Poppins-Medium',
    },
    signUp:{
        width:275,
        height:50,
        marginTop:5,
        paddingRight: 10
        
    },
    signUpText:{
        fontWeight:'bold',
        textAlign: 'right', 
        textDecorationLine:'underline', 
    }

})

export default styles