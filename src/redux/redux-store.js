import {combineReducers, legacy_createStore as createStore} from "redux";
import navigationReducer from "./navigation-reducer";
import profileReducer from "./profile-reducer";
import trainingReducer from "./training-reducer";


let reducers = combineReducers({
    navigation: navigationReducer,
    profile: profileReducer,
    training: trainingReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
