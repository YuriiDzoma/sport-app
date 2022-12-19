import {combineReducers, legacy_createStore as createStore} from "redux";
import navigationReducer from "./navigation-reducer";
import profileReducer from "./profile-reducer";
import trainingReducer from "./training-reducer";


let rootReducers = combineReducers({
    navigation: navigationReducer,
    profile: profileReducer,
    training: trainingReducer,
});

type RootReducer = typeof rootReducers;
export type AppStateType = ReturnType<RootReducer>

let store = createStore(rootReducers);


// @ts-ignore
window.store = store;

export default store;
