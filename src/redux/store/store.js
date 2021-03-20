import { createStore } from "redux";
import cartReducers from "../reducers/cartReducer";


export const store = createStore(cartReducers);