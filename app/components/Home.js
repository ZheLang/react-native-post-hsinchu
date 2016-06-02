import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GuestActions } from '../components'

class Home extends Component {
  availableActions = () => {
    return <GuestActions />
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Post Hsinchu</Text>
        <View>
          {this.availableActions()}
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent:"space-around",
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontSize: 30,
    fontWeight: "100",
  }
})

export default Home
