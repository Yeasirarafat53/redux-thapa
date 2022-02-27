
import {combineReducers} from 'redux'
import changeTheNumber from './../reducers/updown';


const reducers = combineReducers(
    {
        // jei jei reducer create korbo por por comma diye likhte hobe..
        changeTheNumber
    }
)

export default reducers;