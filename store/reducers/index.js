import {combineReducers} from "redux";
import {openDrawerReducer} from './openDrawerReducer';

export const reducer =  combineReducers({
    userData: userDataReducer,
    messagedata: messageDataReducer,
    offsersData: offersDataReducer,
    newsData: newsDataReducer,
    mapData: mapDataReducer
})
