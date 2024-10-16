import { Provider } from "react-redux";
import Navigate from "./Navigate";
import {store} from "./store/store"

export default function App() {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}
