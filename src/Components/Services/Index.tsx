import React, { Component } from 'react'
import { connect } from "react-redux"
import { Text, SafeAreaView, StatusBar, Button } from "react-native"

type Props = { navigation: any }
type State = {}


class Services extends Component<Props, State> {
  static navigationOptions = {
    headerTitle: "Services",
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text onPress={() => {
          this.props.navigation.popToTop()
        }}>
          Services
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

export default connect(mapStateToProps)(Services)
