import { Middleware } from "redux";
import { v4 as uuidv4 } from "uuid";
export const modifyIdMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    // 如果 action 实际上是一个函数...
    console.log(action);
    console.log(storeAPI.getState());
    if (action?.type === "todo/addTodo") {
      action.payload.id = uuidv4();
    }

    // 否则，它就是一个普通 action，那就继续执行
    return next(action);
  };
