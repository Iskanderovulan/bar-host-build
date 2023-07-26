import { combineReducers } from "redux";
import mainReducer from './reducers/mainReducer'
import loaderReducer from "./reducers/loaderReducer";
import searchReducer from "./reducers/searchReducer";
import detailsReducer from "./reducers/detailsReducer";

const rootReducer = combineReducers({
    main: mainReducer,
    loader: loaderReducer,
    search: searchReducer,
    details: detailsReducer
})
export default rootReducer