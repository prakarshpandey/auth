import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export class Button extends React.Component {

  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#007AFF'
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  }
}