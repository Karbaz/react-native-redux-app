import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { tabOneStackNavigator } from "../TabOneNavigationStack/index"
import { tabTwoStackNavigator } from "../TabTwoNavigationStack/index"
import { tabThreeStackNavigator } from "../TabThreeNavigationStack/index"
import { tabFourStackNavigator } from "../TabFourNavigationStack/index"
import { tabFiveStackNavigator } from "../TabFiveNavigationStack/index"

export const createBottomTabNavigators = createBottomTabNavigator(
    {
        Home_1: tabOneStackNavigator,
        Home_2: tabTwoStackNavigator,
        Home_3: tabThreeStackNavigator,
        Home_4: tabFourStackNavigator,
        Home_5: tabFiveStackNavigator,
    },

);
