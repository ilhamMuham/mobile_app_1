import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        bottom: 0,
        height: 70,
        padding: 10,
        // borderTopWidth: 2,
        elevation:10,
        // elevation:5,
        borderColor : '#EDEDED',
        borderWidth: 1,
        // borderTopColor: 'black',
        width: '100%',
        position: 'absolute',
        flexDirection : 'row',
        backgroundColor: '#FFFFFF',
    },
    toCenter:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        width: 30,
        height: 30,
        tintColor: '#ABAABA'
    //   tintColor: 'black',
    //   backgroundColor: 'black'
    }

})

export default styles