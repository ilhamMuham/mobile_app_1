/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {Home, Login, Register} from './src/container'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [login, setLogin] = useState(false)
  const [regis, setRegis] = useState(false)

  const _login = () => {
    setLogin(true)
  }

  const _logout = () => {
    setLogin(false)
  }

  const _register = () => {
    setRegis(true)
    console.log('regis : ',regis)
  }

  const _registerClose = () => {
    setRegis(false)
  }

  return (
    <View>
      {login ? <Home _logout={_logout} _register={_register}/> : regis ? <Register _registerClose={_registerClose}/> : <Login _login={_login} _register={_register}/>}
      {/* <Register/> */}
    </View>
  );
};



export default App;
