import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("store changed");
});
store.dipatch(actions.BOOK_ADDED("bug 1"));
