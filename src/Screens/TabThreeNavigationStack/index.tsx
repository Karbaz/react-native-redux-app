import {
  createStackNavigator,
} from 'react-navigation';
import Home from '../../Components/Home/Index'
import AboutUs from '../../Components/AboutUs/Index'
import Counter from '../../Components/Counter/Index'
import Services from '../../Components/Services/Index'


export const tabThreeStackNavigator = createStackNavigator({
  Home: Home,
  AboutUs: AboutUs,
  Counter: Counter,
  Services: Services
})    