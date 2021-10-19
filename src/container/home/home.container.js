import axios from 'axios'
import moment from 'moment'
import { Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from "react-native"

import Navigation from '../navigation'
import {Logout, Work, In} from '../../component'
// import {Header} from '../../component'

import styles from './home.style'

const Home = ({_logout}) => {
    const [show, setShow] = useState(2)
    const [work, setWork] = useState(false)
    const [dataItem, setDataItem] = useState()
    const [dataPegawaiMasuk, setDataPegawaiMasuk] = useState()
    const [pegawaiBelumMasuk, setPegawaiBelumMasuk] = useState()

    const clickWork =()=>{
        setWork(true)
        console.log('work : ',work)
    }

    const calcelWork =()=>{
        setWork(false)
    }

    const _getAllPegawai = () => {
        axios({
            method: 'get',
            url: 'http://6adc31f5d6d4.ngrok.io/getPegawai',
          })
            .then(function (response) {
                setDataItem(response.data)
            });
    }

    const _getPegawaiMasuk = () => {
        axios({
            method: 'get',
            url: 'http://6adc31f5d6d4.ngrok.io/getAbsen',
          })
            .then(function (response) {
                setDataPegawaiMasuk(response.data)
            });
    }

    const _getPegawaiBelumMasuk = () => {
        axios({
            method: 'get',
            url: 'http://6adc31f5d6d4.ngrok.io/getPegawaiBelumMasuk',
          })
            .then(function (response) {
                setPegawaiBelumMasuk(response.data)
            });
    }

    const _toPegawai = () => {
        setShow(1)
        _getAllPegawai()
        console.log('show : ',show)
    }

    const _toMasuk = () => {
        setShow(2)
        _getPegawaiMasuk()
        console.log('show : ',show)
    }

    const _toBelum = () => {
        setShow(3)
        _getPegawaiBelumMasuk()
        console.log('show : ',show)
    }

    const renderItem = (item, index) => {
        return(
            <View style={ index !== dataPegawaiMasuk.length-1 ? 
                styles.cardEnd
             : styles.cardNotEnd}>
                <View style={styles.pasFoto}>
                </View>
                <View style={styles.lineAfterPasFoto}>
                </View>
                <View style={{
                    marginTop: 10,
                }}>
                    <View style={{
                        flexDirection : 'row',
                    }}>
                        <View style={styles.status}>
                            <Text style={{
                                // marginLeft: 10,
                                color: 'white'
                            }}>Masuk</Text>
                        </View>
                        <View style={styles.jam}>
                            <Text style={{
                                // marginLeft: 10,
                                color: 'white'
                            }}>{moment(item.tanggal).format('HH:mm')}</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection : 'row',
                    }}>
                        <Text>Nama : </Text>
                        <Text>{item.nama}</Text>
                    </View>
                    <View style={{
                        // marginTop: 10,
                        flexDirection : 'row',
                    }}>
                        <Text>Alamat : </Text>
                        <Text>{item.alamat}</Text>
                    </View>
                </View>
            </View>
        );
    }

    const renderTotalPegawai = (item, index) => {
        return(
            <View style={ index !== dataItem.length-1 ? 
                styles.cardEnd
             : styles.cardNotEnd}>
                <View style={styles.pasFoto}>
                </View>
                <View style={styles.lineAfterPasFoto}>
                </View>
                <View style={{
                    marginTop: 10,
                }}>
                    <View style={{
                        flexDirection : 'row',
                    }}>
                        <View style={styles.status}>
                            <Text style={{
                                // marginLeft: 10,
                                color: 'white'
                            }}>Staff</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection : 'row',
                    }}>
                        <Text>Nama : </Text>
                        <Text>{item.nama}</Text>
                    </View>
                    <View style={{
                        // marginTop: 10,
                        flexDirection : 'row',
                    }}>
                        <Text>Alamat : </Text>
                        <Text>{item.alamat}</Text>
                    </View>
                </View>
            </View>
        );
    }

    const renderPegawaiBelumMasuk = (item, index) => {
        return(
            <View style={ index !== pegawaiBelumMasuk.length-1 ? 
                styles.cardEnd
             : styles.cardNotEnd}>
                <View style={styles.pasFoto}>
                </View>
                <View style={styles.lineAfterPasFoto}>
                </View>
                <View style={{
                    marginTop: 10,
                }}>
                    <View style={{
                        flexDirection : 'row',
                    }}>
                        <View style={styles.status}>
                            <Text style={{
                                // marginLeft: 10,
                                color: 'white'
                            }}>Absen</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flexDirection : 'row',
                    }}>
                        <Text>Nama : </Text>
                        <Text>{item.nama}</Text>
                    </View>
                    <View style={{
                        // marginTop: 10,
                        flexDirection : 'row',
                    }}>
                        <Text>Alamat : </Text>
                        <Text>{item.alamat}</Text>
                    </View>
                </View>
            </View>
        );
    }

    const _Header = () => {
        return (
            <View style={styles.containerHeader}>
                <View style={styles.headerName}>
                    <Text style={{
                        color: 'white'
                    }}>Hello, Ilham Muhamad</Text>
    
                </View>
                <View >
                    <View style={styles.containerOption}>
                        <TouchableOpacity 
                        onPress={()=>{
                            _toPegawai()
                          }}
                        style={styles.optionTotalPegawai}>
                            <Text style={{
                                color: 'white',
                                fontSize: 25
                            }}>{dataItem == undefined ? '0' : dataItem.length}</Text>
                            <Text style={{
                                color: 'white',
                                fontSize:14
                            }}>Pegawai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            _toMasuk()
                          }} style={styles.optionPegawaiMasuk}>
                            <Text style={{
                                color: 'white',
                                fontSize: 25
                            }}>{dataPegawaiMasuk == undefined ? '0' : dataPegawaiMasuk.length}</Text>
                            <Text style={{
                                color: 'white',
                                fontSize:14
                            }}>Masuk</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity  onPress={()=>{
                            _toBelum()
                          }}
                        style={styles.optionPegawaiNotMasuk}>
                            <Text style={{
                                color: 'white',
                                fontSize: 25
                            }}>{dataPegawaiMasuk == undefined || dataItem == undefined ? '0' : dataItem.length - dataPegawaiMasuk.length}</Text>
                            <Text style={{
                                color: 'white',
                                fontSize:14
                            }}>Belum Masuk</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    useEffect(() => {
        _getAllPegawai()
        _getPegawaiMasuk()
        _getPegawaiBelumMasuk()
      },[]);

    //   console.log('data item : ',dataItem.length)
    //   console.log('data pegawai masuk : ',dataPegawaiMasuk.length)
      

    return (
        <View style={{
            height:'100%',
            backgroundColor: '#EFFBFF'
            // backgroundColor: 'white'
        }}>
            {_Header()}
            <Work
            clickWork={clickWork}
            />
            {show == 2 && <FlatList 
                data={dataPegawaiMasuk}
                // ListFooterComponent={renderFooter}
                keyExtractor={(dataPegawaiMasuk, index) => {
                return  index.toString()
                }}
                renderItem={({ item, index }) => renderItem(item, index)}
            />}
            {show == 1 && <FlatList 
                data={dataItem}
                // ListFooterComponent={renderFooter}
                keyExtractor={(dataItem, index) => {
                return  index.toString()
                }}
                renderItem={({ item, index }) => renderTotalPegawai(item, index)}
            />}
            {show == 3 && <FlatList 
                data={pegawaiBelumMasuk}
                // ListFooterComponent={renderFooter}
                keyExtractor={(pegawaiBelumMasuk, index) => {
                return  index.toString()
                }}
                renderItem={({ item, index }) => renderPegawaiBelumMasuk(item, index)}
            />}
            {work ? <In calcelWork={calcelWork}/> : null}
            <Navigation _logout={_logout}/>
        </View>
    );
}
export default Home