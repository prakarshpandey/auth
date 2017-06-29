import React from 'react'
import { Text, View } from 'react-native'

export class Header extends React.Component {
  render () {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 20
  },

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
}
