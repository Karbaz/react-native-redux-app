import React, { Component } from 'react'
import { Text, SafeAreaView, StatusBar, Button } from "react-native"
import { connect } from 'react-redux'

type Props = { navigation: any }
type State = {}


class ScreenOne extends Component<Props, State> {

  static navigationOptions = {
    headerTitle: "Screen 1",
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="black"
      />
    ),
  }
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={{fontSize:20}} onPress={() => {
          this.props.navigation.push("Screen2")
        }}>
          Screen 1
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

export default connect(mapStateToProps)(ScreenOne)

