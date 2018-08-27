import React, { Component, ReactPropTypes } from 'react'
import { Text, Button, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"
import { connect } from 'react-redux'
import { style } from './Styles'


type Props = {
    counter: any,
    dispatch: any,
    navigation: any
}

type State = {

}


export class Counter extends Component<Props, State> {
    static navigationOptions = {
        headerTitle: "Counter",
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    }

    constructor(props: Props) {
        super(props)
    }

    a = (action: boolean) => {
        this.props.dispatch({
            type: "INC",
            payload: 2
        })
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                <View style={{ marginTop: 100 }}>
                    <TouchableOpacity onPress={() => {
                        this.a(true)
                    }}>
                        <Text>CLick</Text>
                    </TouchableOpacity>
                    <Text style={style.color}>
                        {
                            this.props.counter.count
                        }
                    </Text>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push("Services")
                    }}>
                        <Text>CLick</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        counter: state.CounterReducer
    }
}

export default connect(mapStateToProps)(Counter)