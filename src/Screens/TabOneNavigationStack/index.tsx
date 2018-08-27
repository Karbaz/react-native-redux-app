import {
    createBottomTabNavigator,
    createStackNavigator,
  } from 'react-navigation';
import Home from '../../Components/Home/Index'
import AboutUs from '../../Components/AboutUs/Index'
import Counter from '../../Components/Counter/Index'

  export const tabOneStackNavigator = createStackNavigator({
        Home:Home,
        AboutUs:AboutUs,
        ProductScreen: { screen: AboutUs, path: 'product/:code' },
        Counter:Counter
  })   