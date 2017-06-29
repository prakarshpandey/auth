import React from 'react'
import { View, Text } from 'react-native'
import * as firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'
export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyANdqk6pymH4FYv00V5SGbY-zMuj3SUJcQ",
      authDomain: "authentication-5d8ff.firebaseapp.com",
      databaseURL: "https://authentication-5d8ff.firebaseio.com",
      projectId: "authentication-5d8ff",
      storageBucket: "authentication-5d8ff.appspot.com",
      messagingSenderId: "938000118223"
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    )
  }
}