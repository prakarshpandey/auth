import React from 'react'
import { View } from 'react-native'

export class CardSection extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
}