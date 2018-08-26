import {
    createBottomTabNavigator,
    createStackNavigator,
  } from 'react-navigation';
import Home from '../../Components/Home/Index'
import AboutUs from '../../Components/AboutUs/Index'

  export const tabOneStackNavigator = createStackNavigator({
        Home:Home,
        AboutUs:AboutUs,
        ProductScreen: { screen: AboutUs, path: 'product/:code' },
  })   