import { legacy_createStore as createStore , applyMiddleware} from "redux";
import Reducer from "../Reducer/Reducer";
import { createLogger } from "redux-logger";

const logger= createLogger({});

const store =createStore(
    Reducer,
    applyMiddleware(logger)
)

export default store;