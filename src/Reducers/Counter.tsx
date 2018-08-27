import { DEC, INC } from '../Actions/Counter'
import { tabFiveStackNavigator } from "../Screens/TabFiveNavigationStack/index"

const initState = {
    count: 0
}


export const CounterReducer = function (state = initState, action: any) {
    switch (action.type) {
        case INC:
            return {
                count:state.count +=1,
                ...state,
            }
            break;

        case DEC:
            return {
                count: state.count -=1,
                ...state,
            }
            break;

        default:
            return {
                ...initState
            }
            break;
    }
}