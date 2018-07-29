import { combineReducers } from "redux";
import { lang } from "./lang";
import { blocked } from "./blocked";

export default combineReducers({
  lang, blocked
});
