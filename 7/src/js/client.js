import { applyMiddleware,createStore } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import axios from "axios";

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
};

const reducer = (state=initialState,action) => {
	switch(action.type){
	case "FETCH_USERS_PENDING":
		return {...state,fetching: true};
	case "FETCH_USERS_REJECTED":
		return {...state,fetching: true,error: action.payload};
	case "RECEIVE_USERS_FULFILLED":
		return {
			...state,
			fetching: false,
			fetched: true,
			users: action.payload
		};
	}
	return state;
};

const middleware = applyMiddleware(promise,createLogger());
const store = createStore(reducer,middleware);

store.dispatch({
	type: "FETCH_USERS",
	payload: axios.get("http://localhost:18080")
});
