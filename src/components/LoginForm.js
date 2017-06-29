import React from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'
import * as firebase from 'firebase'
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loading: false
    }
  }

  onButtonPress = () => {
    this.setState({
      errorMessage: '',
      loading: true
    })
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch((err) => {
        console.log(err)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  onLoginSuccess = ()  => {
    this.setState({
      email: '',
      password: '',
      errorMessage: '',
      loading: false
    })
  }

  onLoginFail = () => {
    this.setState({
      loading: false,
      errorMessage: 'Login Failed'
    })
  }

  renderButton() {
    if(this.state.loading) {
      return (
        <Spinner size="small"/>
      )
    }
    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    )
  }

  render() {
    console.log(this.state)
    return (
      <Card>
        <CardSection>
          <Input
            placeHolder="user@example.com"
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            placeHolder="password"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            label="Password"
            secureTextEntry
          />
        </CardSection>

        <Text style={{fontSize: 20, color: 'red', alignSelf: 'center'}}>
          {this.state.errorMessage}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}