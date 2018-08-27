import React, { Component, ReactPropTypes } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { connect } from 'react-redux'
import {style} from './Styles'


type Props = {
    counter: any,
    dispatch: any,
    navigation:any
}

type State = {

}


export class Counter extends Component<Props, State> {

    static navigationOptions = {
        title: 'Counter',
      };
    

    constructor(props: Props) {
        super(props)
    }

    a = (action: boolean) => {

        setTimeout(() => {
            this.props.dispatch({
                type: "INC",
                payload: 2
            })
        },2000)
    }

    render() {

        return (
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
                    this.props.navigation.popToTop()
                }}>
                    <Text>CLick</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        dispatch: dispatch
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    console.log(state,"[]")
    return {
        counter: state.CounterReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)