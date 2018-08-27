import React, { Component } from 'react'
import { Text, SafeAreaView, StatusBar, Button } from "react-native"
import { connect } from 'react-redux'

type Props = { navigation: any }
type State = {}


class ScreenTwo extends Component<Props, State> {

  static navigationOptions = {
    headerTitle:"Screen 2",
  }
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'maroon', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={{fontSize:20}} onPress={() => {
          this.props.navigation.push("Screen3")
        }}>
          Screen 2
        </Text>
      </SafeAreaView>
    )
  }
}


const mapStateToProps = (state: any, ownProps: any) => {
  return {
    counter: state.CounterReducer
  }
}

export default connect(mapStateToProps)(ScreenTwo)

