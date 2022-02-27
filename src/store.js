import { createStore } from "redux";
import reducers  from "./reducers/index";

// jei jei reducer create kore index.js a rekhe diyeci seita akta variable a rekhe diye seta store.js a rekhe dibo taile j kono jayga theke store k call korlei data peya jabe..
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;