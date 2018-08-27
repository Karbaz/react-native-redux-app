import React, { Component } from 'react'
import { Text, Button , SafeAreaView,StatusBar} from "react-native"
import {connect} from "react-redux"

type Props = { navigation: any, navigationOptions: any,counter:any }
type State = {}

export class Home extends Component<Props, State> {

    constructor(props: any) {
        super(props)
    }

    static navigationOptions = {
        headerTitle: <Text>Home</Text>,
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
            <SafeAreaView style={{flex:1,backgroundColor:'blue',justifyContent: 'center',alignItems: 'center'}}>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae"/>
                <Text onPress={()=>{
                    this.props.navigation.push("AboutUs")
                }}>
                    Welcome to Home
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

export default connect(mapStateToProps)(Home)

