import React from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input } from './common'
import * as firebase from 'firebase'
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  onButtonPress = () => {
    this.setState({
      errorMessage: ''
    })
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .catch(() => {
            this.setState({errorMessage: 'Authentication failed'})
          })
      })
  }

  render() {
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
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}