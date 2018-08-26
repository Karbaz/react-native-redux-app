import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, Button , SafeAreaView, SafeAreaViewBase,StatusBar} from "react-native"
import { HeaderBackButton } from 'react-navigation';

type Props = { navigation: any, navigationOptions: any }
type State = {}

export class Home extends Component<Props, State> {

    constructor(props: any) {
        super(props)
    }

    static navigationOptions = {
        headerTitle: <Text>Hello</Text>,
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
        headerLeft:(
            <Button
            onPress={() => alert('This is a button!')}
            title="Save"
            color="red"
        />
        )
    }

    render() {
        return (
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae"/>
                <Text onPress={()=>{
                    this.props.navigation.push("AboutUs")
                }}>
                    Hello
                </Text>
            </SafeAreaView>
        )
    }
}

export default Home
