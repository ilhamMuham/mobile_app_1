import React from 'react'
import { View, Text } from "react-native"

const Header = (props) => {
    console.log('props : ',props)
    return (
        <View style={{
            height: 180,
            backgroundColor: '#0a66ad'
        }}>
            <View style={{
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
            }}>
                <Text style={{
                    color: 'white'
                }}>Hello, Ilham Muhamad</Text>

            </View>
            <View style={{
                height: 90,
                marginTop: 20,
                borderRadius:10,
                margin : 20,
                backgroundColor: '#95C123',
            }}>
                <View style={{
                    height: 80,
                //  marginTop: 10,
                    borderRadius:10,
                    margin : 5,
                    backgroundColor: 'white',
                    flexDirection : 'row',
                }}>
                    <View 
                    onPress={props.allPegawai}
                    style={{
                        // flex: 1,
                        width: 80,
                        height: 70,
                        margin : 5,
                        borderRadius:10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0A81AD',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25
                        }}>20</Text>
                        <Text style={{
                            color: 'white',
                            fontSize:14
                        }}>Pegawai</Text>
                    </View>
                    <View style={{
                        width: 125,
                        height: 60,
                        borderRadius:10,
                        marginTop : 10,
                        margin: 5,
                        backgroundColor: '#2B8A3E',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25
                        }}>10</Text>
                        <Text style={{
                            color: 'white',
                            fontSize:14
                        }}>Masuk</Text>
                    </View>

                    <View style={{
                        width: 125,
                        height: 60,
                        borderRadius:10,
                        marginTop : 10,
                        margin: 5,
                        backgroundColor: '#F59F00',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25
                        }}>10</Text>
                        <Text style={{
                            color: 'white',
                            fontSize:14
                        }}>Belum Masuk</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Header