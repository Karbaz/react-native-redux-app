import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from "react-native"

type Props = { navigation: any }
type State = {}


export class AboutUs extends Component<Props, State> {
  static propTypes = {

  }

  render() {
    return (
      <Text onPress={() => {
        this.props.navigation.push("AboutUs")
      }}
        style={{ marginTop: 100 }}>Hello From Home</Text>
    )
  }
}

export default AboutUs
