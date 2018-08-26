import { DEC, INC } from '../Actions/Counter'
import { tabFiveStackNavigator } from "../Screens/TabFiveNavigationStack/index"

const initState = {
    count: 0
}


export const CounterReducer = function (state = initState, action: any) {
    switch (action.type) {
        case INC:
            return {
                ...state,
                count: initState.count++,
            }
            break;

        case DEC:
            return {
                ...state,
                count: initState.count--
            }
            break;

        default:
            return {
                ...initState
            }
            break;
    }
}