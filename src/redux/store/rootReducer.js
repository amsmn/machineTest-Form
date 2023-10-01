import { combineReducers } from "@reduxjs/toolkit";
import CountryListReducer from "../slice/CountryListSlice"

const rootReducer = combineReducers({
    CountryListReducer: CountryListReducer,
})
export default rootReducer