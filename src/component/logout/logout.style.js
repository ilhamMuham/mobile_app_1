import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#00000026',
    },
    card:{
        width:275,
        height:150,
        paddingTop:10,
        borderRadius:8,
        borderWidth: 1,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#00000026',
        backgroundColor: '#FFFFFF',
    },
    title:{
        top:5,
        marginBottom: 10,
        fontWeight:'bold',
        textAlign:'center',
        color: 'blue',
        fontFamily : 'Poppins-Medium',
        fontSize: 14,
    },
    lineTop:{
        top:5,
        height:1,
        width: '100%',
        backgroundColor : '#E6E6E6'
    },
    descText:{
        // margin: 10,
        fontSize:24,
        color:'#505050',
        textAlign:'center',
        marginTop: 20,
        fontFamily : 'Poppins-Medium',
    },
    bundleButton:{
        bottom:-10,
        marginTop: 10,
        marginBottom: 5,
        height:40,
        width: '100%',
        borderWidth: 1,
        // alignSelf:'stretch',
        flexDirection : 'row',
        borderColor:'transparent',
        borderTopColor: '#E6E6E6',
    },
    buttonCancel:{
        width: '50%',
        // height:'315%',
        // backgroundColor: 'green'
    },
    buttonCancelText:{
        marginTop:5,
        textAlign:'center',
        color: 'blue',
        fontSize:16,
        fontWeight:'bold',
        fontFamily : 'Poppins-Medium',
    },
    verticalLine:{
        width: 1,
        // backgroundColor: '#E6E6E6',
        // backgroundColor: '#E6E6E6',
        backgroundColor: 'black',
    },
    buttonYes:{
        height:'90%',
        width:'50%',
        borderLeftWidth:1,
        borderLeftColor : '#E6E6E6',
        // backgroundColor: 'green'
        // borderLeftColor : 'black',
    },
    buttonYesText:{
        marginTop:5,
        fontWeight:'bold',
        textAlign:'center',
        color: 'blue',
        fontSize:16,
        fontFamily : 'Poppins-Medium',
    }
    

})

export default styles