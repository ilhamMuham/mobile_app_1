import { StyleSheet } from 'react-native'
// import { Colors, FontSize } from '../../styles'

const styles = StyleSheet.create({
    containerHeader:{
        height: 180,
        backgroundColor: '#0a66ad'
    },
    headerName:{
        padding:5,
        paddingLeft:15,
        height: 30,
        left:-10,
        shadowOpacity: 10,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,  
        elevation: 5,
        borderRadius: 20,
        maxWidth:200,
        marginTop:20,
        backgroundColor: '#0A81AD'
    },
    containerOption:{
        margin : 5,
        height: 90,
        margin : 20,
        borderWidth:5,
        marginTop: 20,
        borderRadius:10,
        flexDirection : 'row',
        borderColor:'#95C123',
        backgroundColor: 'white',
    },
    optionTotalPegawai:{
        // flex: 1,
        width: 80,
        height: 70,
        margin : 5,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A81AD',
    },
    optionPegawaiMasuk:{
        width: 125,
        height: 60,
        borderRadius:10,
        marginTop : 10,
        margin: 5,
        backgroundColor: '#2B8A3E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionPegawaiNotMasuk:{
        width: 125,
        height: 60,
        borderRadius:10,
        marginTop : 10,
        margin: 5,
        backgroundColor: '#F59F00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardNotEnd: {
        margin : 20,
        marginBottom:'20%',
        height: 90,
        elevation:5,
        backgroundColor: 'white',
        borderColor : '#EDEDED',
        borderWidth: 1,
        borderRadius: 6,
        flexDirection : 'row',
    },
    cardEnd:{
        margin : 20,
        marginBottom:0,
        height: 90,
        elevation:5,
        borderColor : '#EDEDED',
        borderWidth: 1,
        borderRadius: 6,
        flexDirection : 'row',
        backgroundColor: 'white',
    },
    pasFoto:{
        margin: 10,
        width: 70,
        height: 70,
        // backgroundColor: 'white',
        borderColor: '#EDEDED',
        borderWidth: 2
    },
    lineAfterPasFoto:{
        margin: 10,
        height: 70,
        width:2,
        backgroundColor: 'black',
    },
    status:{
        width: 90,
        borderRadius: 5,
        height: 20,
        backgroundColor: '#2B8A3E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    jam:{
        marginLeft: '25%',
        width: 90,
        borderRadius: 5,
        height: 20,
        backgroundColor: '#95C123',
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default styles