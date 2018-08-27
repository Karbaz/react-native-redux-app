import {
  createStackNavigator,
} from 'react-navigation';
import Home from '../../Components/Home/Index'
import AboutUs from '../../Components/AboutUs/Index'
import Counter from '../../Components/Counter/Index'
import Services from '../../Components/Services/Index'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react'
import { Text, SafeAreaView, StatusBar, Button } from "react-native"

export const tabOneStackNavigator = createStackNavigator({
  Home: Home,
  AboutUs: AboutUs,
  Counter: Counter,
  Services: Services
})