import React from 'react'
import { View, Text } from 'react-native'
import * as firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: null
    }
  }

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyANdqk6pymH4FYv00V5SGbY-zMuj3SUJcQ",
      authDomain: "authentication-5d8ff.firebaseapp.com",
      databaseURL: "https://authentication-5d8ff.firebaseio.com",
      projectId: "authentication-5d8ff",
      storageBucket: "authentication-5d8ff.appspot.com",
      messagingSenderId: "938000118223"
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      }
      else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent = () => {
    if(this.state.loggedIn === true) {
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Logout
        </Button>
      )
    }
    else if(this.state.loggedIn === false) {
      return <LoginForm />
    }
    else {
      return <Spinner size="large"/>
    }
  }

  render() {
    var componentToRender = this.renderContent()
    return (
      <View>
        <Header headerText="Authentication"/>
        {componentToRender}
      </View>
    )
  }
}