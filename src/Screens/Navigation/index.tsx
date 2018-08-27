import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { tabOneStackNavigator } from "../TabOneNavigationStack/index"
import { tabTwoStackNavigator } from "../TabTwoNavigationStack/index"
import { tabThreeStackNavigator } from "../TabThreeNavigationStack/index"
import { tabFourStackNavigator } from "../TabFourNavigationStack/index"
import { tabFiveStackNavigator } from "../TabFiveNavigationStack/index"
import FontAwesome from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react'
import { Text, Button, SafeAreaView, StatusBar, NativeModules } from "react-native"

const getTabBarIcon=(navigation:any)=>{
    return <FontAwesome name={"ios-home"} color={navigation.navigation.isFocused() ? "blue" : "gray"} size={20} />
}


export const createBottomTabNavigators = createBottomTabNavigator(
    {
        TAB_1: {
            screen: tabOneStackNavigator,
            navigationOptions: (nav: any) => ({
                title: "TAB 1",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_2: {
            screen: tabTwoStackNavigator,
            navigationOptions: (nav: any) => ({
                title: "TAB 2",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_3: {
            screen: tabThreeStackNavigator,
            navigationOptions: (nav: any) => ({
                title: "TAB 3",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_4: {
            screen: tabFourStackNavigator,
            navigationOptions: (nav: any) => ({
                title: "TAB 4",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_5: {
            screen: tabFiveStackNavigator,
            navigationOptions: (nav: any) => ({
                title: "TAB 5",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
    }
);
