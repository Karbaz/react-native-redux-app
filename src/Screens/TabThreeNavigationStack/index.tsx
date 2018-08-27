import {
  createStackNavigator,
} from 'react-navigation';

import Screen1 from "../../Components/Screen1/Index"
import Screen2 from "../../Components/Screen2/Index"
import Screen3 from "../../Components/Screen3/Index"
import Screen4 from "../../Components/Screen4/Index"
import Screen5 from "../../Components/Screen5/Index"
import Counter from '../../Components/Counter/Index'


export const tabThreeStackNavigator = createStackNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
  Screen3: Screen3,
  Screen4: Screen4,
  Screen5: Screen5,
  Counter: Counter
}, {
    initialRouteName: 'Screen3'
  })    